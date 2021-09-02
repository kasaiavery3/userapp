const { User } = require('./models');

// CREATE, READ, UPDATE, DELETE

// CREATE
async function makeUser(firstName, lastName, age, email) {
    try {
        const newUser = await User.create({ firstName, lastName, age, email });
        console.log(newUser.toJSON());
    } catch (err) {
        console.log(err);
    }
}

// makeUser('Kasai Avery', 18, 'sai.avery@ga.com')

async function findOrCreateUser(firstName, lastName, age, email) {
    try {
        const [user, created] = await User.findOrCreate({
            where: { firstName, lastName },
            defaults: { age, email }
        });

        console.log('USER:', user.toJSON()); // object
        console.log('WAS CREATED:', created); // true, false

    } catch (error) {
        console.log(error);
    }
}

// findOrCreateUser('Kasai Avery', 18, 'sai@email.com');
// findOrCreateUser('Kay Jordan', 81, 'kjordan@something.com');


// READ
async function fetchUserByName(firstName, lastName) {
    try {
        const foundUser = await User.findOne({
            where: { firstName, lastName }
        });
        console.log(foundUser.toJSON());
    } catch (err) {
        console.log(err);
    }
} 
// fetchUserByName('Kasai Avery');


async function fetchAllUsers() {
    try {
        const allUsers = await User.findAll({});
        // console.log(allUsers);

        const parsedUsers = allUsers.map(u => u.toJSON());
        console.log(parsedUsers);

    } catch (err) {
        console.log(err);
    }
} 
fetchAllUsers();



// UPDATE
async function updateUser(firstName, lastName, email, age) {
    try {
        const [numberOfRowsUpdate] = await User.updateUser({ email, age }, { 
            where: { firstName, lastName }
        });
        console.log(numberOfRowsUpdate);
    } catch (err) {
        console.log(err);
    }
}

// updateUser('Kasai', 'Avery', 'kavery3@ga.com', 1000000);

async function deleteUser(email) {
    try {
        let deleteUserData = await User.destroy({
            where: { email }
        });
        console.log(deleteUserData);
    } catch (error) {
        console.log(error);
    }
}

deleteUser('kavery3@ga.com');
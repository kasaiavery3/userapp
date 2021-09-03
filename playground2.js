const { User, Pet } = require("./models");
const toy = require("./models/toy");
const user = require("./models/user");

async function createNewPet(name, species, description) {
  // 1 Create a pet
  try {
    // const newPet = await Pet.create({ name, species, description });
    // console.log('RAW', newPet);

    // const pet = newPet.toJSON();
    // console.log('CLEAN DATA', pet);
    const user1 = await User.findOne({
      where: { id: 1 },
      include: [Pet],
    });
    console.log(user1.toJSON());

    // const newPet = await user1.createPet({name, species, description})
    // console.log(newPet.toJSON())
  } catch (error) {
    console.log(error);
  }
}

createNewPet("Balto", "dog", "Coolest dog ever...");

async function makeOneToy(type, color) {
    const newToy = await Toy.create({ type, color });
    console.log(newToy.toJSON());
}

makeOneToy("ball", "red");
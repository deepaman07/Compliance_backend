const StateSchema = require("../models/");
const State = StateSchema.stateList.State;
const City = StateSchema.stateList.City;

// 1. create product

const ReadallStates = async (req, res) => {
  try {
    const states = await State.findAll();
    res.status(200).send(states);
  } catch (error) {
    console.log(error);
  }
};

const ReadallCity = async (req, res) => {
  try {
    const city = await City.findAll();
    res.status(200).send(city);
  } catch (error) {
    throw error;
  }
};
const ReadSpecificCity = async (req, res) => {
  try {
    const city = await City.findAll({
      where: {
        state_id: req.params.id,
      },
    });
    res.status(200).send(city);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  ReadallStates,
  ReadallCity,
  ReadSpecificCity,
};

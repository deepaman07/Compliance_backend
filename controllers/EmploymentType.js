const EmploymentTypeSchema = require("./../models");
const EmploymentTypes = EmploymentTypeSchema.employmenttypes;
const EmploymentType = {
  getEmploymentTypes: async function (req, res, next) {
    console.log("...................." + EmploymentTypes);
    const result = await EmploymentTypes.findAll({
      attributes: ["id", "EmploymentType"],
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).send("Internal server error!");
    }
  },
};
module.exports = EmploymentType;

const userService = require("../services/userService");
const STATUS_CODES = require("../constants/status-codes");

const registerUser = async (req, res) => {
  try {
    const { username } = req.body;
    const existingUser = await userService.findUserByUsername(username);

    if (existingUser) {
      return res
        .status(STATUS_CODES.SUCCESS)
        .json({ error: `User ${username} already exists` });
    }

    const user = await userService.createUser(req.body);
    res.status(STATUS_CODES.RESOURCE_CREATED).json(user);
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODES.SERVER_ERROR).json({ error: "Failed to add user." });
  }
};

module.exports = { registerUser };
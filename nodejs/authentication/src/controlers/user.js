// const User = require("../models/user");
// const auth = require("../middleware/auth");
// const addUser = async (req, res) => {
//   const user = new User(req.body);

//   // TODO -> FINISH SEPERATE TO MVC ART
//   try {
//     await user.save();
//     const token = await user.generateAuthToken();
//     res.status(201).send({ user, token });
//   } catch (e) {
//     res.status(400).send(e);
//   }
//   return res;
// };

// module.exports = { addUser };

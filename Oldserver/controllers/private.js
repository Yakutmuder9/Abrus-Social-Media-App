const User = require("../modals/User");

exports.getUserData = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({ ...user._doc })
  } else {
    res.status(400);
    throw new Error("USer Not Found!");
  }
};
exports.updateUserData = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, firstName, lastName, profile_pic, hobbies, relationShip, status, education, location } = user;
  
    user.firstName = req.body.firstName || firstName;
    user.lastName = req.body.lastName || lastName;
    user.profile_pic = req.body.profile_pic || profile_pic;
    user.hobbies = req.body.hobbies || hobbies;
    user.relationShip = req.body.relationShip || relationShip;
    user.status = req.body.status || status;
    user.education = req.body.education || education;
    user.location = req.body.location ||  location;

    const updatedUser = await user.save();
    res.status(200).json({
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      profile_pic: updatedUser.profile_pic,
      hobbies: updatedUser.hobbies,
      relationShip: updatedUser.relationShip,
      status: updatedUser.status,
      education: updatedUser.education,
      location: updatedUser.location
    });
  } else {
    res.status(400);
    throw new Error("User not found")
  }

};
exports.deleteUser = async (req, res) => {
  const user = await User.findById(req.user._id);
  // if user doesnt exist
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  await user.remove();
  res.status(200).json({ message: "user deleted." });
};
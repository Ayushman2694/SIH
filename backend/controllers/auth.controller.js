import User from "../model/user.model";

export const register = async (req, res) => {
  const { fullName, email, password, aadharNo } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      fullName,
      email,
      password,
      aadharNo,
    });

    await newUser.save();

    return res.status(200).json({ message: "registered successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "error in register control" });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    return res.status(200).json({ message:"logged in successfully" ,user});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({error:"error in login controller"});
  }
};

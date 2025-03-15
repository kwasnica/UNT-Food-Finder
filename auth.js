const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Register user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    const verificationUrl = `http://localhost:3000/verify/${token}`;

    await transporter.sendMail({
      to: email,
      subject: "Verify Your Email",
      html: `<a href="${verificationUrl}">Click here to verify your account</a>`,
    });

    res.status(201).json({ message: "User registered. Check your email to verify." });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err });
  }
};

// Verify email
exports.verifyEmail = async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
    await User.update({ verified: true }, { where: { email: decoded.email } });
    res.json({ message: "Email verified successfully" });
  } catch {
    res.status(400).json({ message: "Invalid or expired token" });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  if (!user.verified) {
    return res.status(403).json({ message: "Verify your email first" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.json({ token });
};

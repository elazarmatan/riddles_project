import express from "express";
import {
  getAllPlayers,
  create,
  checkIfPlayerExist,
  update,
} from "../DAL/dalPlayers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/token", async (req, res) => {
  try {
    const token = req.headers['authorization'].split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRETE_KEY);
    res.json(decoded);
  } catch (err) {
    res.status(400).json({ msg: `server internal error: ${err}` });
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!req.body.password)
      return res.status(403).json({ msg: "do you not have password" });
    const user = await checkIfPlayerExist(req.body.name);
    if (user.length === 0)
      return res.status(403).json({ msg: "User not exist" });
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (!passwordMatch)
      return res.status(403).json({ msg: "the password not match" });
    const token = jwt.sign(
      { role: user[0].role, name: req.body.name },
      process.env.SECRETE_KEY,
      { expiresIn: "7m" }
    );
    res.json({ token: token, role: user[0].role, name: req.body.name });
  } catch (err) {
    res.status(500).json({ msg: `server internal error: ${err}` });
  }
});

router.get("/getall", async (req, res) => {
  try {
    const data = await getAllPlayers();
    res.json(data);
  } catch (error) {
    res.status(400);
    res.send("eror");
  }
});

router.post("/create", async (req, res) => {
  try {
    const hashedpass = await bcrypt.hash(req.body.password, 12);
    req.body.password = hashedpass;
    await create(req.body);
    const token = jwt.sign(
      { role: req.body.role, name: req.body.name },
      process.env.SECRETE_KEY,
      { expiresIn: "7h" }
    );
    res.json({ token: token, name: req.body.name, role: req.body.role });
  } catch (err) {
    console.error(" Error during creation:", err);
    res.status(400);
    res.json({ msg: "Error during creation", status: false });
  }
});
router.put("/update/:name", async (req, res) => {
  try {
    await update(req.params.name, req.body.property, req.body.time);
    res.json({ msg: "succes" });
  } catch (err) {
    console.error(" Error during update:", err);
    res.status(400);
    res.json({ msg: JSON.stringify(err) });
  }
});

router.get("/getByName/:name", async (req, res) => {
  try {
    const response = await checkIfPlayerExist(req.params.name);
    res.json(response);
  } catch (err) {
    res.status(400);
    res.end("eror");
  }
});

export default router;

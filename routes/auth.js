const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Pengguna = require('../models/pengguna');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { nama, email, kataSandi } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(kataSandi, 10);
    const pengguna = await Pengguna.create({ nama, email, kataSandi: hashedPassword });
    res.status(201).json(pengguna);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mendaftarkan pengguna' });
  }
});

router.post('/login', async (req, res) => {
  const { email, kataSandi } = req.body;

  try {
    const pengguna = await Pengguna.findOne({ where: { email } });
    if (!pengguna) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    }

    const isMatch = await bcrypt.compare(kataSandi, pengguna.kataSandi);
    if (!isMatch) {
      return res.status(400).json({ error: 'Kata sandi salah' });
    }

    const token = jwt.sign({ id: pengguna.penggunaId }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Gagal masuk' });
  }
});

module.exports = router;

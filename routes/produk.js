const express = require('express');
const Produk = require('../models/produk');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const produk = await Produk.findAll();
    res.json(produk);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil produk' });
  }
});

router.post('/', async (req, res) => {
  const { nama, deskripsi, harga, stok } = req.body;

  try {
    const produk = await Produk.create({ nama, deskripsi, harga, stok });
    res.status(201).json(produk);
  } catch (error) {
    res.status(500).json({ error: 'Gagal menambahkan produk' });
  }
});

module.exports = router;

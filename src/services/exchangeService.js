const { Asset } = require('../database/models');

const getAll = () => Asset.findAll();

module.exports = { getAll };
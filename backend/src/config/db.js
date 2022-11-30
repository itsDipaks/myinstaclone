const mongoose = require("mongoose");

require("dotenv").config();
const DatabaseUrl = process.env.DATABASE_URL;

const connection = mongoose.connect(DatabaseUrl);

module.exports = {connection};

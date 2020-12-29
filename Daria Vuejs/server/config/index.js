require("dotenv").config({ path: __dirname + "/.env" });

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    url: process.env.DB_URL
  },
};

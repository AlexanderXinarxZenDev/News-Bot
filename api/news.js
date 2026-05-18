const news = require("../data/news.json");

module.exports = (req, res) => {
  const random = news[Math.floor(Math.random() * news.length)];
  res.status(200).json(random);
};
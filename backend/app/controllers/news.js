const mongoose = require("mongoose");

const News = mongoose.model("News");

module.exports.getAllNews = async (req, res, next) => {
  try {
    const allNews = await News.find({});
    res.json(allNews);
  } catch (error) {
    next(error);
  }
};

module.exports.getNews = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);
    res.json(news);
  } catch (error) {
    next(error);
  }
};

module.exports.createNews = async (req, res, next) => {
  try {
    const news = await News.create(req.body);
    res.json(news);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteNews = async (req, res, next) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    res.json(news);
  } catch (error) {
    next(error);
  }
};

module.exports.updateNews = async (req, res, next) => {
  try {
    const news = await News.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    res.json(news);
  } catch (error) {
    next(error);
  }
};
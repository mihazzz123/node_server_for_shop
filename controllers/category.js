const Category = require('../models/Category')
const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')


module.exports.getAll = async function(req, res) {
  try {
    const categoryes = await category.find({user: req.user.id})
    res.status(200).json(categoryes)
  } catch (e) {
    errorHandler(res, e)
  }
}
module.exports.getById = async function(req, res) {
  try {
    const category = await Category.findById(req.params.id)
    res.status(200).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}
module.exports.remove = async function(req, res) {
  try {
    await Category.remove({id: req.params.id})
    await Position.remove({category: req.params.id})
    res.status(200).json({
      message: 'Категория удалена'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}
module.exports.create = async function(req, res) {
  try {
    const category = await new Category({
      name: req.body.name,
      user: req.body.id,
      imageSrc: req.file ? req.file.path : ''
    }).save()
    res.status(201).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}
module.exports.update = async function(req, res) {
  const updated = {
    name: req.body.name
  }
  if (req.file) 
    update.imageSrc = req.fole.path
  try {
    const category = await Category.findByIdAndUpdate(
      {_id: req.params.id},
      {$set: updated},
      {new: true}
    )
    res.status(200).json(category)
  } catch (e) {
    errorHandler(res, e)
  }
}
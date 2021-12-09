const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)
    .then(res => {
        console.log('connected to MONGODB')
    })
    .catch((error) => {
        console.log('error connecting to MONGODB', error.message)
    })

const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 3 },
    number: { type: String, required: true, minlength: 8 },
    date: { type: Date, required: true }
})
personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
    transform: (document, returnedObj) => {
      returnedObj.id = returnedObj._id.toString()
      delete returnedObj._id
      delete returnedObj.__v
    }
  })

module.exports = mongoose.model('Person', personSchema)
require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const customMorgan = morgan((tokens, req, res) => {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.method(req, res) === "POST" ? JSON.stringify(req.body) : ""
      ].join(' ')
})
const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name == 'CastError') {
    return res.status(400).send({ error: 'Malformatted id' })
  }
  next(error)
}
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(customMorgan)
app.use(express.json())
app.use(cors())
app.use(express.static('build'))


  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })  
  
  app.get('/info', (req, res) => {
    const amount = Person.find({}).length
    const date = new Date()
    res.send(`Phonebook has info for ${amount} people</p><p>${date}</p>`)
  })
  
  app.get('/api/persons', (req, res) => {
    Person.find({}).then(notes => {
      res.json(notes)
    })
  })

  app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
      .then(person => {
        if (person) {
          res.json(person)
        }
        else {
          res.status(404).end()
        }
      })
      .catch(error => next(error))
  })

  app.delete('/api/persons/:id', (req, res, next) => {
    console.log(req.params.id)
    Person.findByIdAndRemove(req.params.id)
      .then(result => {
        res.status(204).end()
      })
      .catch(error => next(error))
  })

  app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    }
    else if (!body.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }
    /* else if (body.find(p => p.name === body.name)) {
        return res.status(400).json({
            error: "All names must be unique"
        })
    } */

    const person = new Person({
      name: body.name,
      number: body.number,
      date: new Date()
    })

    person.save().then(savedPerson => {
      res.json(savedPerson)
    })
  })

  app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body

    const person = {
      name: body.name,
      number: body.number
    }

    console.log(person)

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
      .then(updatedNote => {
        res.json(updatedNote)
      })
      .catch(error => next(error))
  })

  app.use(unknownEndpoint)
  app.use(errorHandler)

  
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
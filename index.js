const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

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

app.use(customMorgan)
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

let persons = [
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]


  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })  
  
  app.get('/info', (req, res) => {
    const amount = persons.length
    const date = new Date()
    res.send(`Phonebook has info for ${amount} people</p><p>${date}</p>`)
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    res.json(person)

    if (person) {
        res.json(person)
    }
    else {
        res.status(404).end()
    }

  })

  app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
  
    res.status(204).end()
  })

  app.post('/api/persons', (req, res) => {
    const newId = Math.floor(Math.random() * 10000)
    const person = req.body
    person.id = newId

    if (!person.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    }
    else if (!person.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }
    else if (persons.find(p => p.name === person.name)) {
        return res.status(400).json({
            error: "All names must be unique"
        })
    }

    /* console.log(person) */

    persons = persons.concat(person)
    res.json(person)
  })
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
const express = require("express")
const app = express()
const TODO_MODEL = require('./models').tbl_todo_lists
const USER_MODEL = require('./models').tbl_users
app.use(express.json())

// Endpoint Get All Todo
app.get('/todo', (req, res) => {
    TODO_MODEL.findAll({
        include : [
            {
                model : USER_MODEL,
                required : false,
                attributes : ['id','name']
            }
        ]
    }).then(result => {
        res.json(
            {
                message : "OK",
                data : result
            }
        )
    }).catch(error => res.json({
        message:error.message
    }))
})

// Endpoint Get Todo by ID
app.get('/todo/:id', (req, res) => {
    const todoId = req.params.id
    TODO_MODEL.findOne({
        where : {
            id : todoId
        }
    }).then(result => {
        res.send({
            message : "OK",
            data : result
        })
    }).catch(error => {
        res.send({
            message : error
        })
    })
})

// Create
app.post('/todo', async (req, res) =>{
    const body = req.body
    const todo = {
        name_todo : body['name_todo'],
        desc_todo : body['desc_todo'],
        createdBy : body['createdBy']
    }

    try {
        await TODO_MODEL.create(todo)
        res.status(201).send(todo)
    } catch (error) {
        res.status(500).send({
            message : error.message
        })
    }
})

// Update Todo
app.patch('/todo/:id', async (req, res) => {
    try {
        const todoId = req.params.id
        const body = req.body
        const todo = {
            name_todo : body['name_todo'],
            desc_todo : body['desc_todo']
        }

        await TODO_MODEL.update(todo, {
            where : {
                id : todoId
            }
        })
        res.status(200).json({
            message : "Updated"
        })
    } catch (error) {
        res.status(500).send({
            message : error.message
        })
    }
})

// Menghapus Todo
app.delete('/todo/:id', async (req, res) => {
    try {
        const todoId = req.params.id

        await TODO_MODEL.destroy({
            where : {
                id : todoId
            }
        })

        res.status(200).json({
            message : "Deleted"
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
})

app.listen("3001", () => {
    console.log(`listening at http://localhost:${3001}`)
})
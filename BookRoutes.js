import express from 'express'
const bookRouter=express.Router()
import { createBook } from './BookController.js'
import { getAllData } from './BookController.js'
import { removeDetails } from './BookController.js'


bookRouter.post('/AddBook',createBook)
bookRouter.get('/getDetails',getAllData)
bookRouter.delete('/removeData/:id',removeDetails)


export default bookRouter
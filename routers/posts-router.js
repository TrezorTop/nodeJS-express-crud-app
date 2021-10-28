import {Router} from "express";
import PostController from './controllers/posts-controller.js'

const postsRouter = new Router()

postsRouter.post('/posts/add', PostController.create)
postsRouter.get('/posts/get', PostController.getAll)
postsRouter.get('/posts/get/:id', PostController.get)
postsRouter.put('/posts/update', PostController.update)
postsRouter.delete('/posts/delete/:id', PostController.delete)

export default postsRouter

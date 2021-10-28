import Post from "../models/post.js";
import fileService from '../services/file-service.js'

class PostService {
    async create(post, file) {
        const fileName = fileService.saveFile(file)
        return await Post.create({...post, picture: fileName})
    }

    async get(id) {
        if (!id) {
            throw new Error('Invalid ID')
        }
        return await Post.findById(id)
    }

    async getAll() {
        return await Post.find()
    }

    async update(post) {
        console.log(post)
        if (!post._id) {
            throw new Error('Invalid ID')
        }
        return await Post.findByIdAndUpdate(post._id, post, {new: true})
    }

    async delete(id) {
        if (!id) {
            throw new Error('Invalid ID')
        }
        return await Post.findByIdAndDelete(id)
    }
}

export default new PostService()

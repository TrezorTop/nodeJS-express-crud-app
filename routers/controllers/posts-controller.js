import PostService from "../../services/post-service.js";

class PostsController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture)
            return res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async get(req, res) {
        try {
            const posts = await PostService.get(req.params.id);
            return res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.status(200).json(updatedPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletedPost = await PostService.delete(req.params.id);
            return res.status(200).json(deletedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostsController()

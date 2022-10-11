const { Post } = require('../modals/Post');

//Create post
const createPost = async (req, res) => {
    const { bookId } = req.body;

    const user = await User.findById(req.user._id, 'isGithubConnected githubAccessToken');
   
    if (!user.isGithubConnected || !user.githubAccessToken) {
     res.json({ error: 'Github not connected' });
     return;
    }
   
    try {
     await Book.syncContent({ id: bookId, githubAccessToken: user.githubAccessToken });
     res.json({ done: 1 });
    } catch (err) {
     logger.error(err);
     res.json({ error: err.message || err.toString() });
    }
};
router.get('/github/repos', async (req, res) => {
    const user = await User.findById(req.user._id, 'isGithubConnected githubAccessToken');

    if (!user.isGithubConnected || !user.githubAccessToken) {
        res.json({ error: 'Github not connected' });
        return;
    }

    try {
        const response = await getRepos({ user, request: req });
        res.json({ repos: response.data });
    } catch (err) {
        logger.error(err);
        res.json({ error: err.message || err.toString() });
    }
});

//Fetch posts
const fetchPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json(error);
    }
};

//Fetch post
const fetchPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.json(error);
    }
};

//update post
const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
            },
            {
                new: true,
                runValidators: true,
            }
        );
        res.json(post);
    } catch (error) {
        res.json(Error);
    }
};

//Delete post
const deletePost = async (req, res) => {
    try {
        await post.findByIdAndDelete(req.params.id);
        res.send('post has succeffully deleted');
    } catch (error) {
        res.json(error);
    }
};

module.exports = { createPost, fetchPosts, fetchPost, updatePost, deletePost };
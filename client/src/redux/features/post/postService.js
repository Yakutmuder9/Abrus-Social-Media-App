import axios from "axios";

// const BACKEND_URL = 'http://localhost:5000'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const API_URL = `${BACKEND_URL}/api/private/post`;

// Create New Post
const createPost = async (formData) => {
  const response = await axios.post(API_URL, formData);
  // console.log(response)
  return response.data;
};

// Featch all users posts
const fetchAllUsersPosts = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/private/fetchallposts`);
  
  return response.data;
};

// Get all posts
const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Post
const deletePost = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Post
const getPost = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Post
const updatePost = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const postService = {
  createPost,
  fetchAllUsersPosts,
  getPosts,
  getPost,
  deletePost,
  updatePost,
};

export default postService;

import axios from 'axios';
import Base from './Base';

// REST API
// GET
// POST
// PUT
// PATCH
// DELETE
const apis = {
  getPost: (params) => Base.get('/posts', { params }),
  getPostWithId: (id, params) => Base.get(`/posts/${id}`, { params }),
  getImage: (params) => axios
    .get('https://i.postimg.cc/6pNtVFgT/Screenshot-2023-01-28-at-15-41-47.png',
      { responseType: 'blob', params }
    )
}
export default apis;
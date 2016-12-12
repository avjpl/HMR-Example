const axiox = require('axios');

module.exports = axiox({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/1'
  })
  .then(res => res.data)
  .catch(err => err);
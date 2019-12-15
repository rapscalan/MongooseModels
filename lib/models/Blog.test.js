//const mongoose = require('mongoose');
const Blog = require('./Blog');

describe('Blog model', () =>  {
  it('has a required title', () => {
    const blog = new Blog();
    const { errors } = blog.validateSync();
    //console.log(errors);
    expect(errors.title.message).toEqual('Path `title` is required.');
  });

});

import React from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      <center>
        <h3>Posts List</h3>
      </center>
      {posts.map(post => (
        <div key={post.id} class="card">
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {post.author_fullname}
            </h6>
            <p class="card-text">{post.ups}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      <div>
        {posts.map(post => (
          <div key={post.id} class="card">
            <div class="card-body">
              <h5 class="card-title">
                <a href={post.url}> {post.title} </a>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {post.author_fullname}
              </h6>
              <p class="card-text">{post.ups}</p>

              <p class="card-text">Link To Comments</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;

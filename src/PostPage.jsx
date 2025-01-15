import React from "react";
import { useParams, Link ,useNavigate} from "react-router-dom";

const PostPage = ({ posts, handleDelete, handleEdit }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate= useNavigate();
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button id="editButton" onClick={()=>navigate(`/edit/${post.id}`)}> Edit Post</button>
            <button className="deleteButton" onClick={()=>handleDelete(post.id)}> Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <Link to="/">Visit our Home page</Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;

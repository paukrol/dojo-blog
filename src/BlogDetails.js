import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`https://dojo-2-backend.herokuapp.com/blogs/${id}`);
  const history = useHistory();

  const handleClick = (id) => {
    // fetch(`http://localhost:8000/blogs/${id}` lub

    fetch(`https://dojo-2-backend.herokuapp.com/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={() => handleClick(blog.id)}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

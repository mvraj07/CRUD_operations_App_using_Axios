import { useEffect, useState } from "react";
import { PostApiData, deletePost } from "../api/PostApi";

export default function Display() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await PostApiData();
      console.log(res);
      setposts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      // console.log(id, posts);
      const updatedPosts = posts.filter((curpost) => {
        return curpost.id != id;
      });
      setposts(updatedPosts);
    } catch (error) {
      console.log(error.statuscode);
    }
  };

  return (
    <>
      <ul className="card-container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Cards posts={posts} handleDelete={handleDelete} />
        )}
      </ul>
    </>
  );
}

export const Cards = ({ posts, handleDelete }) => {
  return (
    <>
      {posts.map((curCard) => {
        return (
          <Card post={curCard} key={curCard.id} handleDelete={handleDelete} />
        );
      })}
    </>
  );
};
export const Card = ({ post, handleDelete }) => {
  return (
    <li className="card">
      <p>
        <span className="heading">Title:</span>
        {`${post.title}`}
      </p>
      <p>
        <span className="heading">Body:</span>
        {`${post.body}`}
      </p>
      <div className="cardButtons">
        <button className="Buttons">Edit</button>
        <button className="Buttons" onClick={() => handleDelete(post.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

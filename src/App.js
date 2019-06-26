import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data);
      setLoading(false);
    }

    setTimeout(() => {
      fetchPosts();
    }, 200);
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && posts.map((post) => (
        <div key={post.id}>
          <div><strong>{post.title}</strong></div>
          <p>
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

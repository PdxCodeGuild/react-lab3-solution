import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [filterText, setFilterText] = useState('');

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

  const handleChange = (event) => {
    setFilterText(event.target.value);
  }

  // With function
  // const filterPosts = () => {
  //   return posts.filter((post) => post.title.includes(filterText));
  // }

  // With a variable
  const filteredPosts = posts.filter((post) => post.title.includes(filterText));

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} value={filterText} />
      </div>
      {loading && <div>Loading...</div>}
      {!loading && filteredPosts.map((post) => (
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

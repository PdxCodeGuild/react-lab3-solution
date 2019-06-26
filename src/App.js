import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { PostContainer, PostTitle, PostBody, Input } from './App.styled';

const Post = (props) => (
  <PostContainer {...props}>
    <PostTitle>{props.post.title}</PostTitle>
    <PostBody>
      {props.post.body}
    </PostBody>
  </PostContainer>
)

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
    <>
      <Input placeholder="Filter posts..." onChange={handleChange} value={filterText} />
      {loading && <div>Loading...</div>}
      {!loading && filteredPosts.map((post) => (
        <Post dark key={post.id} post={post} />
      ))}
    </>
  );
}

export default App;

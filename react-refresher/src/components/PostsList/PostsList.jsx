import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";

import styles from "./PostsList.module.css";

function PostsList() {
  const [postBody, setPostBody] = useState("");
  const [authorName, setAuthorName] = useState("");

  const bodyChangeHandler = (e) => {
    setPostBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthorName(e.target.value);
  };

  return (
    <>
      <NewPost
        postBody={postBody}
        authorName={authorName}
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={styles.posts}>
        <Post author={authorName} body={postBody} />
        <Post author="John Deo" body="React JS is awesome" />
      </ul>
    </>
  );
}

export default PostsList;

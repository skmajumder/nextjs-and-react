import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";

import styles from "./PostsList.module.css";

const names = ["Shuvo", "SK Majumder"];

const PostsList = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author={chosenName} body="React JS is awesome" />
        <Post author={chosenName} body="React JS is awesome" />
        <Post author={chosenName} body="React JS is awesome" />
        <Post author={chosenName} body="React JS is awesome" />
      </ul>
    </>
  );
};

export default PostsList;

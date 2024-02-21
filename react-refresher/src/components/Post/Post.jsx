import styles from "./Post.module.css";

function Post({ author, body }) {
  return (
    <article className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </article>
  );
}

export default Post;

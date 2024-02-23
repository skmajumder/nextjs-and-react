import styles from "./NewPost.module.css";

function NewPost({ postBody, authorName, onBodyChange, onAuthorChange }) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">
          <span>Text</span>
          <textarea
            id="body"
            rows={3}
            value={postBody}
            onChange={onBodyChange}
            required
          />
        </label>
      </p>
      <p>
        <label htmlFor="name">
          <span>Your Name</span>
          <input
            type="text"
            id="name"
            value={authorName}
            onChange={onAuthorChange}
            required
          />
        </label>
      </p>
    </form>
  );
}

export default NewPost;

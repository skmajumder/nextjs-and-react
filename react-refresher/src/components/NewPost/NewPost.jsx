import styles from "./NewPost.module.css";

const NewPost = () => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">
          <span>Text</span>
          <textarea id="body" required rows={3} />
        </label>
      </p>
      <p>
        <label htmlFor="name">
          <span>Your Name</span>
          <input type="text" id="name" required />
        </label>
      </p>
    </form>
  );
};

export default NewPost;

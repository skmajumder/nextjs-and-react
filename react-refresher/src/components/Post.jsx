const names = ["Shuvo", "SK Majumder"];

function Post() {
  // const chosenName = names[Math.random() > 0.5 ? 0 : 1];
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>React JS is awesome</p>
    </div>
  );
}

export default Post;

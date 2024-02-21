import Main from "./components/Main/Main";
import Post from "./components/Post/Post";

const names = ["Shuvo", "SK Majumder"];

function App() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <Main>
      <div>
        <Post author={chosenName} body="React JS is awesome" />
      </div>
    </Main>
  );
}

export default App;

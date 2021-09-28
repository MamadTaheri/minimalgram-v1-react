import Header from "./components/UI/Header";
import Posts from "./components/post/Posts";
import data from "./data";

const App = () => {
  console.log(data);
  return (
    <>
      <Header />
      <Posts posts={data} />
    </>
  );
};

export default App;

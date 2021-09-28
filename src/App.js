import Header from "./components/UI/Header";
import data from "./data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import SinglePost from "./components/pages/SinglePost";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home posts={data} />
          </Route>
          <Route path="/single-post/:id">
            <SinglePost />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

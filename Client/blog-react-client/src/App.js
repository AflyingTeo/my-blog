import './App.css';
import TopBar from './components/topbar/topbar';
import HomePage from './pages/home/home';
import Single from './pages/single/single';
import Write from './pages/write/write';
import Setting from './pages/setting/setting';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/register">{user ? <HomePage /> : <Register />}</Route>
        <Route path="/setting">{user ? <Setting /> : <Register />}</Route>
        <Route path="/login">{user ? <HomePage /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      {/* <Single /> */}
    </Router>
  );
}

export default App;

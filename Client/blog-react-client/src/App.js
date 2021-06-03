import './App.css';
import TopBar from './components/topbar/topbar';
import HomePage from './pages/home/home';
import Single from './pages/single/single';
import Write from './pages/write/write';
import Setting from './pages/setting/setting';
import Login from './pages/login/login';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Login />
      {/* <Single /> */}
    </div>
  );
}

export default App;

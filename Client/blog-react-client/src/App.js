import './App.css';
import TopBar from './topbar/topbar';
import HomePage from './pages/home/home';
import Single from './pages/single/single';
import Write from './pages/write/write';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Write />
      {/* <Single /> */}
    </div>
  );
}

export default App;

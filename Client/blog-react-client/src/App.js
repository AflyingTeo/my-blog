import './App.css';
import TopBar from './topbar/topbar';
import HomePage from './pages/home/home';
import Single from './pages/single/single';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Single />
      {/* <Single /> */}
    </div>
  );
}

export default App;

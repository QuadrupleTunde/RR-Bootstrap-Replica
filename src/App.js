import './App.css';
import TopPage from './component/TopPage';
import BackgroundPage from './component/BackgroundPage'
import StoreListings from './component/StoreListings'

function App() {
  return (
    <div className="App">
      <TopPage/>
      <BackgroundPage/>
      <StoreListings/>
    </div>
  );
}

export default App;

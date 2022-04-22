/* eslint-disable no-unused-vars */
// public >> /
// thumbnailUrl
import './App.css';
import AppHeader from './Components/AppHeader';
import Pic from './data/pics';


function App() {
  const picElement = Pic.map((Picture, index) => {
    return <Picture key={index} Picture={Picture} />
  });
  return (
    <div className="App">
      <AppHeader />
      <div className='app-grid'>
        {picElement}
      </div>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <h1 className="cavalink-title">CavaLink</h1>
        <div className="weather-alert">
          <p>Fire weather stat...</p>
          <p className="alert-status">In effect</p>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

// Make sure this line exists exactly like this:
export default App;
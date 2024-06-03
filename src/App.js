import React  from 'react';
import TrickList from './Component/Tricks';
import InteractiveList from './Component/MUITricks';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h2>Miles Daily Training Plan</h2>
    </header>
    <InteractiveList />
    <TrickList />
  </div>
  );
}

export default App;

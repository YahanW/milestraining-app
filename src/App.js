import React  from 'react';
import TrickList from './Component/Tricks';
import MUITricks from './Component/MUITricks';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h2>Miles Daily Training Plan</h2>
    </header>
    {/* <TrickList /> */}
    <MUITricks />
  </div>
  );
}

export default App;

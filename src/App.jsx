import React from 'react';
import GameView from './Views/GameView';
import './styles/main.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <GameView />
      <Footer />
    </div>
  );
}

export default App;

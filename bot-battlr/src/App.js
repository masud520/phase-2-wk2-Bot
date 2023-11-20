// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Botcollection  from './components/Botcollection';
import Botarmy from './components/Botarmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  function fetchBots() {
    fetch('http://localhost:3000/bots')
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }

  function handleBotClick(bot) {
    setSelectedBots((prevSelectedBots) => (
      prevSelectedBots.find((selectedBot) => selectedBot.id === bot.id)
        ? prevSelectedBots
        : [...prevSelectedBots, bot]
    ));
  }
  

  function handleBotRelease(botId) {
    console.log("Releasing Bot ID:", botId);
    setSelectedBots((prevSelectedBots) => {
      const newSelectedBots = prevSelectedBots.filter((bot) => bot.id !== botId);
      console.log("New Selected Bots:", newSelectedBots);
      return newSelectedBots;
    });
  }

  function handleBotDischarge(botId) {
    console.log("Discharging Bot ID:", botId);
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE',
    }).then(() => {
      setSelectedBots((prevSelectedBots) => prevSelectedBots.filter((bot) => bot.id !== botId));
    });
  }

  return (
    <div className="App">
      <Botarmy army={selectedBots} onBotClick={handleBotClick} onRelease={handleBotRelease} onDischarge={handleBotDischarge} />
      <BotCollection bots={bots} onBotClick={handleBotClick} />
      
    </div>
  );
}

export default App;
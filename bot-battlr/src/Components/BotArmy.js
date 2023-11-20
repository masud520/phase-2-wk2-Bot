import React from 'react';



export default function BotArmy({ selectedBolts,removeFromBoltArmy }){
    const handleRemove = (id) => {
        removeFromBotArmy(id);
      };

    

    
    return (
        <>
        <h1>Your bot army</h1>
        
      <div className="bolt-cards-container">
      {selectedBolts.map((bolt, index) => (
          <div key={index} className="bolt-card">
        <img src={bolt.avatar_url}/>
        <h2> Name:{bolt.name}</h2>
        <p>Health:{bolt.health}</p>
        <p>Created-time {bolt.created_at}</p>
        <p>updated-time {bolt.updated_at}</p>
        <button onClick={() => handleRemove(bolt.id)}>Delete</button>
          </div>
        ))}
      </div>
        </>
    );
}
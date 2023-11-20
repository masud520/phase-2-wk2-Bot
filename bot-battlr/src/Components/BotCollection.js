import React from "react";

import SingleBot from "./SingleBot";

export default function BotCollection({ bots, enlistedBots, setEnlistedBots, handleBotDischarge  }) {
  return (
    <div className="BotCollection">
      <h2>Bot Battlr | Bot Collection</h2>
      <ul className="bot-collection">
        {bots.map((bot) => (
          <li key={bot.id}>
            <SingleBot
              bot={bot}
              enlistedBots={enlistedBots}
              setEnlistedBots={setEnlistedBots}
              handleBotDischarge={handleBotDischarge}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
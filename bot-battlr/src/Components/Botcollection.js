import React from "react";

function Botcollection({bots,onBotClick}){

    return(
        <>
            <h1>Bot collection </h1>
           <div id="botCollection">
           {bots.map((bot) => (
                    <div key={bot.id} className="bot-card" onClick={() => onBotClick(bot)}>
                        <img src={bot.avatar_url} alt={bot.name} />
                        <p>{bot.name}</p>
                        <p>Class: {bot.bot_class}</p>
                        <p>Health: {bot.health}</p>
                        <p>Damage: {bot.damage}</p>
                        <p className="catchphrase">{bot.catchphrase}</p>
                    </div>
                ))}
           </div>
        </>
    )
}

export default Botcollection
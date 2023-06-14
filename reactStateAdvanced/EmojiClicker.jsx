import { useState } from "react";
import {v4 as uuid} from "uuid"

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id:uuid(),emoji:"😂"}])
    
    function addEmoji(){
        const newEmojis = [...emojis]
        newEmojis.push({id:uuid(),emoji:"😂"})
        setEmojis(newEmojis)
    }

    function deleteEmoji(id){
        // filter method returns a new array by applyting the condition 
        const newEmojis = emojis.filter(e => e.id !== id)
        setEmojis(newEmojis)
    }

    function changeEmojis(){
        
    const newEmojis = emojis.map((item) => {
    return {
      ...item,
      emoji: "❤️",
    }
  })
  setEmojis(newEmojis)

  }
    return(
        <div>
            {emojis.map((e)=>(
                // each span element should have a unique ID
                //npm install uuid
                <span style={{fontSize:"4rem"}} key={e.id} 
                onClick={()=> deleteEmoji(e.id)}>
                    {e.emoji}
                    </span>    
                // for deleting, use arrow function
                // deleteEmoji() will run each time
            )

            )}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={changeEmojis}>Change Emojis</button>
            
        </div>
    )
}
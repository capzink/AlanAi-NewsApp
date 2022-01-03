import React, {useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alankey = "c006edb76096c08abf8044fe3d2a2ba52e956eca572e1d8b807a3e2338fdd0dc/stage";
const App =()=>{

    useEffect(()=>{
        alanBtn({ key:alankey, onCommand: ({command, articles})=>{
            if(command === 'newHeadlines'){
                console.log(articles);
            }
        }
        })
    },[])
    return(
        <div>
            <h1>Alan Ai news App</h1>
        </div>
    )
}

export default App
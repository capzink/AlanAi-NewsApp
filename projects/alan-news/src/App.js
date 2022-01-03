import React, {useState, useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alankey = "c006edb76096c08abf8044fe3d2a2ba52e956eca572e1d8b807a3e2338fdd0dc/stage";
const App =()=>{
    const [news, setNews]=useState([])

    useEffect(()=>{
        alanBtn({ key:alankey, onCommand: ({command, articles})=>{
            if(command === 'newHeadlines'){
                setNews(articles);
            }
        }
        })
    },[])
    return(
        <div>
            <h1>Alan Ai news App</h1>
            <NewsCards articles={setNews}/>
        </div>
    )
}

export default App
import React, {useState, useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import alan from './images/alanreact.png'
import useStyles from './styles'
import wordsToNumbers from "words-to-numbers";



const alankey = "c006edb76096c08abf8044fe3d2a2ba52e956eca572e1d8b807a3e2338fdd0dc/stage";
const App =()=>{
const classes= useStyles()
const [news, setNews]=useState([])
const [activeArticle, setActiveArticle] =useState(-1)

    useEffect(()=>{
        alanBtn({ key:alankey, onCommand: ({command, articles, number})=>{
            if(command === 'newHeadlines'){
               setNews(articles)
               setActiveArticle(-1)
             }
             if(command === 'highlight'){
                 setActiveArticle((preActiveArticle) => preActiveArticle +1)
             }
             else if(command === 'open'){
                 const parsedNumber = number.length > 2 ? wordsToNumbers(number,{fuzzy:true}):number
                 const article = articles[parsedNumber - 1]
                 window.open(articles[number].url, '_blank')
             }
            }
         })
    },[])
    return (
      <div>
        <div className={classes.logoContainer}>
          <img src={alan} alt="logo" className={classes.alanLogo} />
        </div>
        <NewsCards articles={news} activeArticle ={activeArticle}/>
      </div>
    );
}

export default App
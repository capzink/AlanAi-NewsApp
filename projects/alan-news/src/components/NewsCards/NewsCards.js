import React from 'react'
import Newscard from '../NewsCard/NewsCard'


const NewsCards = ({articles}) => {
    
    return (
        <div>
           {articles.map((article,index)=>{
               return(
                   <Newscard/>
               )
           })}
        </div>
    )
}
export default NewsCards

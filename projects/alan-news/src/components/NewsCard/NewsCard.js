import React,{useState,useEffect,useRef, createRef} from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import classNames from 'classnames';
import useStyles from './styles.js'


const NewsCard = ({ article, index, activeArticle }) => {
  const [refs, setRefs]= useState([])
  const scroll = (ref)=> window.scroll(0, ref.current.offsetTop -50)
  const classes = useStyles();
  const { description, publishedAt, source, title, url, urlToImage } = article;

useEffect(()=>{
    setRefs((ref)=>Array(20).fill().map((_,indexRef)=>ref[indexRef]||createRef()))
},[])

useEffect(()=>{
    if(index === activeArticle && refs[activeArticle]){
        scroll(refs[activeArticle])
    }

},[index,activeArticle,refs])


  return (
    <Card ref={refs[index]} className={ classNames(classes.card, activeArticle === index ? classes.activeCard : null)}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h6"
          component="h2"
        >
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textsecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.card}>
        <Button size="small" color="primary" href={url}>
          Learn More
        </Button>
        <Typography variant="h5" color="textsecondary">
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard

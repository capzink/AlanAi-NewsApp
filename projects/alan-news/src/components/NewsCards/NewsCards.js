import React from 'react'
import Newscard from '../NewsCard/NewsCard'
import { Grid, Grow, Typography } from '@material-ui/core'
import useStyles from './styles.js'
import infoCards from '../Data'


const NewsCards = ({articles}) => {
    const classes = useStyles()

    if(!articles.length){
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {infoCards.map((infocard,index)=>{
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        className={classes.infoCard}
                      >
                        <div
                          className={classes.card}
                          style={{ background: infocard.color }}
                        >
                          <Typography variant="h5">{infocard.title}</Typography>
                          {infocard.info ? (
                            <Typography variant="h6">
                              <strong>{infocard.title.split(" ")[2]}</strong>
                              <br />
                              {infocard.info}
                            </Typography>
                          ) : null}
                          <Typography variant='h6'>try saying: <br/><i>{infocard.text}</i></Typography>
                        </div>
                      </Grid>
                    );
                })}
                </Grid>
            </Grow>

        )
    }
    
    return (
        <>
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {articles.map((article,index)=>{
                    return(
                        <Grid item xs={12} sm={6} md={4} lg={3} className='grid-style'>
                            <Newscard article={article} index={index}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Grow>
        </>
    
    );
}
export default NewsCards

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux'
import DescriptionModal from './modal'
import { addToCart } from '../actions/cart'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: '10px 0',
    overflow: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    objectFit: 'contain'
  }
}));

function ProductList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    isOpen: false,
    data: {}
  });

  const handleOpen = (beer) => {
    setOpen({
      isOpen: true,
      data: beer
    });
  };

  const handleClose = () => {
    setOpen({
      isOpen: false,
      data: {}
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        { props.beers.map((beer) => {
            return (
              <Grid item xs={4} key={beer.id}>
                <Card>
                  <CardActionArea onClick={() => handleOpen(beer)}>
                    <CardMedia
                      component="img"
                      alt={beer.name}
                      height="140"
                      image={beer.image_url}
                      className={classes.img}
                      title={beer.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="p">
                        <b>{beer.name}</b>
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        ABV: {beer.abv}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => props.dispatch(addToCart(beer))}
                    >
                      <ShoppingCartIcon />
                    </Button>
                  </CardActions>
                </Card>

              </Grid>
            )
          })
        }
      </Grid>
      <DescriptionModal
        data={open.data}
        isOpen={open.isOpen}
        handleClose={handleClose} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  beers: state.beers.beerList
})


const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

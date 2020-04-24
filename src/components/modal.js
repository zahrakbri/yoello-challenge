import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '25px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  img: {
    objectFit: 'contain'
  }
}));

function DescriptionModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.isOpen}
        onClose={props.handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={props.data.name}
                height="140"
                image={props.data.image_url}
                className={classes.img}
                title={props.data.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                  {props.data.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b className='desc-title'>ABV:</b> {props.data.abv}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b className='desc-title'>tagline:</b> {props.data.tagline}
                </Typography>
                <Collapse in={checked} collapsedHeight={40}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    onClick={handleChange}
                    >
                    <b className='desc-title'>description:</b> {props.data.description}
                  </Typography>
                </Collapse>
                {props.data.food_pairing &&
                  <Collapse in={checked} collapsedHeight={40}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      onClick={handleChange}
                      component="p">
                      <b className='desc-title'>food pairing:</b> {props.data.food_pairing.map((food) => {
                        return (
                          <span key={food}>{food},</span>
                        )
                      })}
                    </Typography>
                  </Collapse>
                }
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => props.dispatch(addToCart(props.data))}
              >
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
        </div>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapDispatchToProps)(DescriptionModal)
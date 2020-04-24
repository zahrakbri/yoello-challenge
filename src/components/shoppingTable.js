import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cart'

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function ShoppingTable(props) {
  const classes = useStyles();

  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    let totalPrice = 0
    props.shoppingList.map((beer) => {
      totalPrice += beer.abv
    })
    setTotalPrice(totalPrice)
  }, [props.shoppingList])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Cart Details
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.shoppingList.map(beer => (
            <TableRow key={beer.id}>
              <TableCell>{beer.name}</TableCell>
              <TableCell align="right">{beer.abv}</TableCell>
              <TableCell
                align="right"
                onClick={() => props.dispatch(removeFromCart(beer.id))}>
                <DeleteForeverIcon />
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{totalPrice}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => ({
  shoppingList: state.beers.shoppingList
})


const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingTable)

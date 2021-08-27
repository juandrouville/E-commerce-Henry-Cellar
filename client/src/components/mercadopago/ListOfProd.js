import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    backgroundColor: theme.palette.background.paper,
    marginTop:"5rem"
  },
}));


export default function SimpleList() {
  const classes = useStyles();

  const orderlines=useSelector(state=>state.orderlines)

  const total=orderlines.reduce((a,b)=>a+(b.price*b.quantity),0)

  return (
    <div className={classes.root}>
        <h2 style={{marginBottom:"1rem"}}>Your Order</h2>
        <Divider/>
      <List component="nav" aria-label="main mailbox folders">
        {orderlines.map(orderline=>
          <ListItem key={orderline.id}>
          <ListItemIcon>
            <Avatar src={orderline.image}/>
          </ListItemIcon>
          <ListItemText primary={orderline.name} secondary={`x ${orderline.quantity} ($ ${parseFloat(orderline.price).toFixed(2)})`} />
          <ListItemText primary={`Subtotal $ ${orderline.price*orderline.quantity}`} />
        </ListItem>
        )}    
      <Divider />
       
       <ListItem >
       <ListItemText primary={<h3>Total    $ {total}</h3>} />
       </ListItem>
      </List>     
    </div>
  );
}

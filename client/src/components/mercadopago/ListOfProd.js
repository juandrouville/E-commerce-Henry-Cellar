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
    width: '60%',
    backgroundColor: theme.palette.background.paper,
    marginTop:"5rem"
  },
}));


export default function SimpleList() {
  const classes = useStyles();

  const orderlines=useSelector(state=>state.orderlines)

  return (
    <div className={classes.root}>
        <h2>Your Order</h2>
      <List component="nav" aria-label="main mailbox folders">
        {orderlines.map(orderline=>
          <ListItem key={orderline.id}>
          <ListItemIcon>
            <Avatar src={orderline.image}/>
          </ListItemIcon>
          <ListItemText primary={orderline.name} secondary={`x ${orderline.quantity} ($ ${orderline.price})`} />
          <ListItemText primary={`Subtotal $ ${orderline.price*orderline.quantity}`} />
        </ListItem>
        )}         
      </List>     
      <Divider />
    </div>
  );
}

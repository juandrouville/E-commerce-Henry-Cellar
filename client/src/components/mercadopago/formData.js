import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { List, ListItem, ListItemAvatar, ListItemText, MenuItem } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      marginTop:"1rem",
      width:"75%"
    },
}));
  
export function BasicTextFields() {

    const classes = useStyles();

    const [state,setState]=useState(
        {
            shipmentMethod:undefined,
            street:undefined,
            numeration:undefined,
            locality:undefined,
            state:undefined,
            floor:undefined,
            dept:undefined
        }
        )

    const shipmentMethods=[
        {label:"Retire in local",value:"Retire in local"},
        {label:"Home Delivery",value:"Home Delivery"}
    ]

    const handleChange=e=>{setState({...state,[e.target.name]:e.target.value})}
  
    return (
      <form className={classes.root} noValidate autoComplete="off">

        <TextField id="standard-basic" label="Delivery Type" select onChange={handleChange} name="shipmentMethod">
        {shipmentMethods.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>

        {
        state.shipmentMethod==="Home Delivery" ? 
        <>
            <TextField id="outlined-basic" label="Street" name="street" variant="outlined" required/>
            <TextField id="filled-basic" label="Nº" type="number" name="numeration" required/>
            <TextField id="filled-basic" label="Locality" name="locality" required/>
            <TextField id="filled-basic" label="State" name="state" required/>
            <TextField id="filled-basic" label="Floor" name="floor"  type="number"/>
            <TextField id="filled-basic" label="Dept"  name="dept"/>
        </>
        :null }
      </form>
    );
  }
  

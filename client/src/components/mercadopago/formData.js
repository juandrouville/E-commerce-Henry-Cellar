import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Divider, List, ListItem, ListItemAvatar, ListItemText, MenuItem } from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from 'react-redux';
import { editOrder, editUser } from 'actions';
import toast from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      marginTop:"1rem",
      marginBottom:"1rem",
      width:"75%"
    },
}));
  
export function BasicTextFields() {

  const dispatch=useDispatch()
  const userDB=useSelector(state=>state.user)
  const {user}=useAuth0()


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

    const handleChange=e=>{
        setState({...state,[e.target.name]:e.target.value})
        if(e.target.name==="shipmentMethod"){
            setState( {
                shipmentMethod:e.target.value,
                street:undefined,
                numeration:undefined,
                locality:undefined,
                state:undefined,
                floor:undefined,
                dept:undefined
            })
        }
    }
    const handleClickShip=e=>{
       let ad=`${state.street} ${state.numeration}.${state.locality}, ${state.state}.`
       if(state.floor) ad=ad.concat(`Floor ${state.floor}`)
       if(state.dept) ad=ad.concat(`Dept ${state.dept}`)
       dispatch(editUser(user.sub,{adress:ad}))
       dispatch(editOrder(userDB.order.id,{shippingMethod:state.shipmentMethod}))
       toast.success(`Your adress has been saved`)
    }
    return (
     
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleClickShip}>
        <h2>Shipment Data</h2>
        <Divider style={{width:"100%"}}/>
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
            <TextField id="outlined-basic" label="Street" name="street" variant="outlined" required onChange={handleChange}/>
            <TextField id="filled-basic" label="Nº" type="number" name="numeration" required onChange={handleChange}/>
            <TextField id="filled-basic" label="Locality" name="locality" required onChange={handleChange}/>
            <TextField id="filled-basic" label="State" name="state" required onChange={handleChange}/>
            <TextField id="filled-basic" label="Floor" name="floor"  type="number" onChange={handleChange}/>
            <TextField id="filled-basic" label="Dept"  name="dept" onChange={handleChange}/>
            <Button
           disabled={(!state.street || !state.numeration || !state.locality || !state.shipmentMethod || !state.state) ? true : false }
           variant="contained"
           color="primary"
           size="big"
           className={classes.button}
           startIcon={<SaveIcon />}
           onClick={handleClickShip}
          >Save Adress</Button>
        </>
        :null }
      </form>
    );
  }
  

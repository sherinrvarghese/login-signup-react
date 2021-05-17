import React from 'react';
import { Grid,Paper,Avatar,TextField,Link,Button,Typography } from '@material-ui/core';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login =()=>{

    const paperStyle={padding :20, height:'70vh', width:280, margin:"0 auto", backgroundColor: '#e5fbfb8c'}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0', height:'5vh'}
    //const text = ' \n '
    const marginTop={marginTop:8}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockTwoToneIcon/></Avatar>
                    <h2>WELCOME</h2>
                 </Grid>
                 <TextField label='Username or Email' variant='outlined' fullWidth required style={marginTop}/>
                 <TextField label='Enter Password' variant='outlined' fullWidth required style={marginTop}/>
                 <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember Me"
      />
        <Button variant="contained" color="primary" variant="contained" style={btnstyle} fullWidth>LOGIN</Button>
        <Typography>
            <Link href="#" >Forgot Password?</Link>
        </Typography>
        <Typography> 
            New user? 
            <Link href="#" >Sign Up Now!</Link>
        </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;
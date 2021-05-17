import React from 'react';
import { Grid,Paper,Avatar,TextField,Link,Button,Typography } from '@material-ui/core';
import EnhancedEncryptionTwoToneIcon from '@material-ui/icons/EnhancedEncryptionTwoTone';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Signup=()=>{
    const paperStyle={padding :20, height:'90vh', width:280, margin:"0 auto", backgroundColor: '#e5fbfb8c'}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0', height:'5vh'}
    const text = ' \n '
    const marginTop={marginTop:8}
    const GreenRadio = withStyles({
        root: {
          color: '#0000008a',
          '&$checked': {
            color: blue[900],
          },
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                    <Avatar style={avatarStyle}><EnhancedEncryptionTwoToneIcon/></Avatar>
                    <h2>REGISTER</h2>
                    <Typography>
            Fill in the details to create a new Account!
        </Typography>
             </Grid>
             <TextField label='Name' variant='outlined' fullWidth required style={marginTop}/>
             <TextField label='Email' variant='outlined' fullWidth required style={marginTop}/>
            
             <FormControl component="fieldset" style={marginTop}>
             <FormLabel component="legend">Gender</FormLabel>
                   <RadioGroup row aria-label="gender" name="gender1" style={marginTop} >
                        <FormControlLabel value="female" control={<GreenRadio  />} label="Female" />
                        <FormControlLabel value="male" control={<GreenRadio  />} label="Male" />
                        <FormControlLabel value="other" control={<GreenRadio />} label="Other" />
                        </RadioGroup>
            </FormControl>
            <TextField label='Phone Number' variant='outlined' fullWidth required style={marginTop}/>
             <TextField label='Enter Password' variant='outlined' fullWidth required style={marginTop}/>
             
             <TextField label='Re-enter Password' variant='outlined' fullWidth required style={marginTop}/>
             <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
            required
          />
        }
        label="I accept the terms and conditions"
      />
             <Button variant="contained" color="primary" variant="contained" style={btnstyle} fullWidth>SIGN UP</Button>
             <Typography> 
                Already a user? 
            <Link href="#" > Login Here!</Link>
        </Typography>
            </Paper>
        </Grid>

    )
}


export default Signup;
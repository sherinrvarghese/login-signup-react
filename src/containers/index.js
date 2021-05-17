import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Login from '../components/LoginForm';
import Signup from '../components/RegisterForm';

const SignInOutContainer=()=>{
const [value, setValue]=useState(0);
const paperStyle={width:320, margin:"20px auto"}
const text = ' \n '
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

    return (

        <Paper elevation={30} style={paperStyle}>
        <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
         >
            <Tab label="SIGN IN" />
            <Tab label="SIGN UP" />
        </Tabs>

        <TabPanel value={value} index={0}>
            <Login/>
            {/*<div object={text}>&nbsp;</div>*/}
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Signup/>
           {/*  <div object={text}>&nbsp;</div>*/}
        </TabPanel>

    </Paper>
)

}

export default SignInOutContainer;


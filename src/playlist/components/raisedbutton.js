import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './raisedbutton.css'

const style = {
    margin: 12,
};

const RaisedButtonExampleSimple = () => (
    <div className="RaisedButtonExampleSimple-cover">
        <MuiThemeProvider>
            <div>
            <RaisedButton label="Default" style={style}></RaisedButton> 
            <RaisedButton label="Primary" primary={true} style={style}></RaisedButton>
            <RaisedButton label="Secondary" secondary={true} style={style}></RaisedButton>
            </div>                  
        </MuiThemeProvider>
    </div>
);

export default RaisedButtonExampleSimple;

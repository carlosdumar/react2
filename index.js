import React from 'react';
import {render} from 'react-dom';
import RaisedButtonExampleSimple from './src/playlist/components/raisedbutton';
import ContainerX from './src/playlist/containers/containerx';
import data from './src/api.json';
//console.log('hola mundo');

const app = document.getElementById('app');

//const holaMundo = <h1>Hola Mundo!</h1>;

render(<ContainerX data={data}/>, app);
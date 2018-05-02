import React from 'react';
import {render} from 'react-dom';
import ContainerX from './src/playlist/containers/containerx';
import data from './src/api.json';
//console.log('hola mundo');

import './src/slick/util';
import ReactSlick from './src/slick/reactslick';

render(<ReactSlick data={data}/>, document.getElementById('app'));

//const holaMundo = <h1>Hola Mundo!</h1>;

//render(<ContainerX data={data}/>, app);
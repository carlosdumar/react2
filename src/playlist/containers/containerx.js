import React, { Component } from 'react';
import RaisedButton from '../../playlist/components/raisedbutton';
import PlayList from '../../playlist/components/playlist';
import Card from '../../playlist/components/card';


class ContainerX extends Component {
    render() {
        return (
            <div>
                <PlayList playlist={this.props.data} />               
                <RaisedButton />
                <Card card={this.props.data}/>
            </div>         
        )
    }
}

export default ContainerX;
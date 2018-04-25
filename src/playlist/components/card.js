import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import Carousel from 'nuka-carousel';
import './card.css'

const style = {
    width: "33%"
}

const marginT = {
    margin: "0 1em"
}

class CardExampleWithAvatar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const playlist = this.props.card.categories[0].playlist;
        console.log(playlist)       
        return (
                <MuiThemeProvider >
                     <Carousel 
                            slidesToShow={3} 
                            cellSpacing={20} 
                            dragging={true}
                        >
                        <div style={style} className="Cards">
                        {                       
                            playlist.map((item) => {
                                return <Card style={marginT}>
                                        <CardHeader
                                            title={item.title}
                                            subtitle={item.author}
                                            avatar={item.cover}
                                            key={item.id}
                                        />
                                        <CardMedia
                                            overlay={ <CardTitle key={item.id} title="Overlay title" subtile="Overlay subtitle" /> }
                                        >
                                        <img src={item.cover} atl="" />
                                        </CardMedia>
                                        <CardTitle  title={item.title} subtitle="Card subtitle"/>
                                        <CardText >
                                            Qui deserunt cillum amet voluptate elit. Ipsum quis dolore in ea veniam eu fugiat commodo aliquip adipisicing minim enim. Anim exercitation nostrud voluptate eu sint excepteur dolore laboris ad. Id qui officia consectetur nisi do quis ea. Eiusmod duis incididunt officia deserunt culpa anim labore pariatur sint.
                                        </CardText>
                                        <CardActions >
                                            <RaisedButton label="Primary" primary={true}></RaisedButton>
                                            <RaisedButton label="Secondary" secondary={true}></RaisedButton>
                                        </CardActions>
                                    </Card>
                            })
                        }                      
                        </div>
                    </Carousel>                                                    
                    
                </MuiThemeProvider>
            
        )
    }
}
// const CardExampleWithAvatar = () => (
//     <MuiThemeProvider>
//         <div style={style}>
//         <Card>
//             <CardHeader
//                 title="Url Avatar"
//                 subtitle="Subtitle"
//                 avatar="./src/images/nature-600-337.jpg"
//             />
//             <CardMedia
//                 overlay={ <CardTitle title="Overlay title" subtile="Overlay subtitle" /> }
//             >
//             <img src="./src/images/nature-600-337.jpg" atl="" />
//             </CardMedia>
//             <CardTitle  title="Card title" subtitle="Card subtitle"/>
//             <CardText>
//                 Qui deserunt cillum amet voluptate elit. Ipsum quis dolore in ea veniam eu fugiat commodo aliquip adipisicing minim enim. Anim exercitation nostrud voluptate eu sint excepteur dolore laboris ad. Id qui officia consectetur nisi do quis ea. Eiusmod duis incididunt officia deserunt culpa anim labore pariatur sint.
//             </CardText>
//             <CardActions>
//                 <RaisedButton label="Primary" primary={true}></RaisedButton>
//                 <RaisedButton label="Secondary" secondary={true}></RaisedButton>
//             </CardActions>
//          </Card>
//         </div>
//     </MuiThemeProvider>
    
// )

export default CardExampleWithAvatar;
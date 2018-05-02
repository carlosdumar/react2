import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Slider from 'react-slick';
import Button from 'material-ui/Button';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

var $ = require('jquery');
import './reactslick.css';

const styles = {
    marginRight: 20,
    medium: {
        width: 96,
        height: 96,
        padding: 24,
      },
      large: {
        width: 120,
        height: 120,
        padding: 30,
      },
      width: "33%",
      card: {
          overflowWrap: 'break-word',
          margin: 10,
        //   height: 200
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      }
};

const bNavigatorStyles = {
    backgroundColor: '#335E94',
    opacity: '0.9'
}

const arrowStyle = {
    color: '#FFFFFF',
    fontSize: 35
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return(
        <div 
            onClick={onClick}
            className={className}
            style={{...style }}
        >
        <Button variant="fab" style={{...bNavigatorStyles}}>
            <NavigateNext style={{ ...arrowStyle }} />
        </Button>        
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{...style}}
            onClick={onClick}
        >
        <Button variant="fab" style={{...bNavigatorStyles}}>
            <NavigateBefore style={{ ...arrowStyle }} />
        </Button>
        </div>
    );
}

export default class ReactSlick extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        slideIndex: 0,
        updateCount: 0    
    }

    // componentDidMount() {
        
    //     $('ul li button').click((event) => {
            
    //         var indexDot = $('.slick-dots li.slick-active button')["0"].textContent;
    //         var newDot = event.target.textContent;

    //         if(newDot > indexDot) {
    //             $(`.slick-dots li:nth-child(${indexDot})`).css("display", "none");
    //             $(`.slick-dots li:nth-child(${parseInt(newDot) + 1})`).css("display", "inline-block");
    //         }
    //         // console.log( event.target.textContent);
    //     })
    // }
    
    componentDidUpdate(prevProps, prevState) {
        // $('.slick-dots li:gt(3)').css("display", "none");
   

        // $(() => {
        //     console.log('cc ' + this.state.slideIndex)
        //     var s = $('.slick-dots li.slick-active button').text();
        //     //console.log($('.slick-dots li button'));
            
        //     $('li button').click((event) => {
        //         console.log(event);
        //     })

        //     if(s == 3) {
        //         $('.slick-dots li:first-child button').css("font-size", "26px").css("width", "auto").css("background-color", "red")
        //     }
        //     if(s == 1) {
        //         $('.slick-dots li:last-child button').css("font-size", "26px").css("width", "auto").css("background-color", "red")
        //     }
        //     console.log(s);
        // })

        // var s = document.getElementsByClassName('slick-dots')["0"]
        // console.log(document.getElementsByClassName('slick-dots')["0"])

    //    var s = ReactDOM.findDOMNode(this).getElementsByClassName("slick-dots").ul;
    //    console.log(s);
        // $(()=> {
        //    $('.slick-dots li:gt(4)').css("display", "none");
        // })
    }

    render() {
        const categories = this.props.data.categories;
        //console.log('categories: ' + categories);
        const playlist = this.props.data.categories[0].playlist;
        const playlist2 = this.props.data.categories[1].playlist;
        const playlist3 = this.props.data.categories[2].playlist;
        const playlist4 = this.props.data.categories[3].playlist;     
        const playlist5 = this.props.data.categories[4].playlist;     
        const playlist6 = this.props.data.categories[5].playlist;     
        const playlist7 = this.props.data.categories[6].playlist;     
        const playlist8 = this.props.data.categories[7].playlist;             
        const playlist9 = this.props.data.categories[8].playlist;             
        const playlist10 = this.props.data.categories[9].playlist;             
        
        const settings = {
            accessibility: true,
            adaptiveHeight: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            swipeToSlide: true,
            className: "center",
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            // afterChange: () =>
            //     this.setState(state => ({ updateCount: state.updateCount + 1 })),
            // beforeChange: (current, next) => this.setState({ slideIndex: next }),
            // afterChange:() => {
            //     $(()=> {
            //         $('.slick-dots li:gt(4)').css("display", "none");
            //      })
            // },
            appendDots: dots => (
                // dots.length = 4,
                <div>
                    <ul >
                        {dots}                                                    
                    </ul>
                </div>
              ),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1.0,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        };  
        return(
           //<MuiThemeProvider>
            <Slider {...settings} className="Slider" >
                
                <div style={styles.width} className="Cards">
                {
                    playlist.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    >
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>
                <div  className="Cards">
                {
                    playlist2.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>                
                <div  className="Cards">
                {
                    playlist3.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>
                <div  className="Cards">
                {
                    playlist4.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>
                <div style={styles.width} className="Cards">
                {
                    playlist5.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    >
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>
                <div style={styles.width} className="Cards">
                {
                    playlist6.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    >
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>
                <div style={styles.width} className="Cards">
                {
                    playlist7.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    >
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>
                <div style={styles.width} className="Cards">
                {
                    playlist8.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    >
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>
                <div style={styles.width} className="Cards">
                {
                    playlist9.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    >
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>
                <div style={styles.width} className="Cards">
                {
                    playlist10.map((item) => {
                        return <Card style={styles.card}>
                                    <CardMedia
                                        image={item.cover}                                        
                                        title={item.title}
                                        style={styles.media}
                                        key={item.id}
                                    >
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.description}                                   
                                        </Typography>
                                    </CardContent>
                                </Card>
                    })
                }               
                </div>
                {/* <div>
                    <h3>1</h3>
                </div> */}
                {/* <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div> */}
            </Slider>
            //</MuiThemeProvider >
        )
    }
}
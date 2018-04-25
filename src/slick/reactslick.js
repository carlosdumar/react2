import React, { Component } from 'react';
import Slider from 'react-slick';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import {fullWhite} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import './reactslick.css';

import { MuiThemeProvider } from 'material-ui/styles';

const style = {
    marginRight: 20,
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return(
        <div 
            onClick={onClick}
            className={className}
        >
        <MuiThemeProvider >
            <FloatingActionButton backgroundColor="#3C3C3C" style={style}>
                <KeyboardArrowRight />
            </FloatingActionButton>
        </MuiThemeProvider>
        
        </div>
    );
}
// export const RightNavButton = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div style= {{ display: "block", background: "red" }}>
//             <i className="fa fa-chevron-circle-left fa-3x"
//                 onClick={props.previousSlide} aria-hidden="true"></i>
//           </div>
//     )
// }
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    console.log(props);
    return (
        <div
            className={className}
            style={{ display: 'block', background: 'green'}}
            onClick={onClick}
        >
        </div>
    );
}

export default class ReactSlick extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,          
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
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return(
           // <h2> Responsive </h2>
            <Slider {...settings} className="Slider">
                <div>
                    <h3>1</h3>
                </div>
                <div>
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
                </div>
                <div>
                    <h3>8</h3>
                </div>
            </Slider>
        )
    }
}
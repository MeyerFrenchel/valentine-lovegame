

import React, { Component } from 'react';

import Music from '../../components/Music/Music';
import ImageSlider from '../../components/ImageSlider/imageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';



export default class Toggle extends Component{
    state= {
        on: false,
        open: 'Prize',
        close:'Close',
        
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    
    render() {

        return (
            <div>
            {
                this.state.on &&
                <div>
                <Music />
                <ImageSlider slides={SliderData} />
                
                </div>
            }
            <button onClick={this.toggle}>Surprise</button>
            </div>
        )
    }
}

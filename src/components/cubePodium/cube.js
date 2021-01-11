import React from 'react';
import './cube-style.scss'

export default function Cube(props){
    return(
        <div class="container">
            <div class="cube1">
                <div class="face top"></div>
                <div class="face bottom"></div>
                <div class="face left"></div>
                <div class="face right"></div>
                <div class="face front">player 1</div>
                <div class="face back"></div>
            </div>
        </div>
    )
}
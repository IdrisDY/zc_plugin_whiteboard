import React, { useState, useRef } from "react";
import "./ShapeSelector.css";
import hexagon from "./assets/hexagon.png";
import circle from "./assets/circle.png";
import parallelogram from "./assets/parallelogram.png";
import quadrilateral from "./assets/quadrilateral.png";
import rhombus from "./assets/rhombus.png";
import sqaure from "./assets/square.png";
import squarestraight from "./assets/squarestraight.png";
import star from "./assets/star.png";
import triangle from "./assets/triangle.png";

function ShapeSeletor(){
    const [circles, setCircles] = useState([]);

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
      };

    const addCircle = () => {
        const circ = {
          x: getRandomInt(window.innerWidth),
          y: getRandomInt(window.innerHeight),
          width: 100,
          height: 100,
          fill: "red",
          id: `circ${circles.length + 1}`,
        }; 
        const currentCircles = JSON.parse(localStorage.getItem('circles')) || []
        currentCircles.push(circ);
        
        localStorage.setItem('circles', JSON.stringify(currentCircles))
      };

    

    return(
        <div className="ShapeSelector">
            <div className="shapesContainer">
                <div className="shapes">
                    <img src={hexagon} alt="" />
                </div>
                <div className="shapes">
                    <img src={sqaure} alt="" />
                </div>
                <div className="shapes">
                    <img src={star} alt="" />
                </div>
                <div className="shapes">
                    <img src={triangle} alt="" />
                </div>
                <div className="shapes">
                    <img src={rhombus} alt="" />
                </div>
                <div className="shapes">
                    <img src={squarestraight} alt="" />
                </div>
                <div className="shapes">
                    <img src={parallelogram} alt="" />
                </div>
                <div className="shapes">
                    <img src={quadrilateral} alt="" />
                </div>
                <div className="shapes" onClick={addCircle}>
                    <img src={circle} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ShapeSeletor;
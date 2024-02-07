import React, { useEffect } from "react";
import Quote from "./quote";
import Nav from "./nav";

function LandingPage() {
  
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth ;
        canvas.height = window.innerHeight ;
        
        render();
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth * 0.85;
            canvas.height = window.innerHeight * 0.80;
            render()
        });
        function render() {
            drawCenterBackground(context, canvas.width, canvas.height) 
            drawCenterCircle(context, canvas.width, canvas.height) 
            drawTopRectangle(context, canvas.width, canvas.height);
            drawBottomRectangle(context, canvas.width, canvas.height); 
        }

    }, []);

    return (
        <section id='landingPage'>
            <Quote />
            <canvas id="canvas"></canvas>
            <div id='position'>SOFTWARE ENGINEER</div>
            <div id='title'>
                <div>PORT</div>
                <div>FOLIO</div>
            </div>
            <div id='name'>MOCHY NGUYEN</div>
            <Nav />
        </section>
    );
}

export default LandingPage;
const drawTopRectangle = (context, width, height) => {
    context.beginPath();
    const gradient = context.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgb(74,178,181)');
    gradient.addColorStop(1, 'rgb(67,82,88)');
    context.fillStyle = gradient;
    context.fillRect(width * 0.4, height * 0.1, width * 0.6, height * 0.005);
    // context.stroke();
};

const drawBottomRectangle = (context, width, height) => {
    context.beginPath();
    const gradient = context.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(1, 'rgb(74,178,181)');
    gradient.addColorStop(0, 'rgb(67,82,88)');
    context.fillStyle = gradient;
    context.fillRect(width * 0, height * 0.9, width * 0.6, height * 0.005);
    // context.stroke();
};

function drawCenterCircle(context, width, height) {
    // Create a linear gradient for the stroke
    const gradient = context.createLinearGradient(0, 0, width, 0);

    // Add color stops to the gradient
    gradient.addColorStop(0, 'rgb(85,136,168)');
    gradient.addColorStop(1, 'rgb(48,76,94)');

    // Set the stroke style to the gradient
    context.strokeStyle = gradient;
    context.beginPath();
    for (let i = 0; i <= 180; i += 180/100) {
        context.ellipse(width * 0.5,
                        height * 0.5, 
                        width * 0.10, 
                        height * 0.23, 
                        i,
                        0,
                        1.9 * Math.PI);
        context.stroke()
    }   
        
}

function drawCenterBackground(context, width, height) {
    const color2 = 'rgba(31,39,42,0.1)';
    const color3 = 'rgba(14,14,14,0.5)';
    
    
    // Draw the first ellipse
    const gradient1 = context.createLinearGradient(0, 0, width, 0);
    gradient1.addColorStop(0, color2);
    gradient1.addColorStop(1, color3);

    context.beginPath();  // Begin a new path
    context.ellipse(width * 0.85,
        height *  0.1,
        width * 0.43,
        width * 0.40,
        40,
        0,
        2 * Math.PI);
    context.fillStyle = gradient1;
    context.fill();

    
}




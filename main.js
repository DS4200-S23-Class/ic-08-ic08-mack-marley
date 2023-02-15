const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};
const FRAME1 = 

d3.select("#bar1") 
append("svg") 
    .attr("height", FRAME_HEIGHT)                        
    .attr("width", FRAME_WIDTH)
    .attr("class", "frame");

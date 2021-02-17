
var svg = d3.select("body").append("svg").attr("width",'100%').attr("height", 100).

style('background-color','red');
svg
.append('text')
.text('ahmed')
.attr('x','10')
.attr('y','10')

.attr('fill','white');

   svg
   .call(zm = d3.behavior.zoom().scaleExtent([1,3])
   .on("zoom", redraw)).append("g")

   .attr("transform", "translate(" + 350 + "," + 20 + ")");

//necessary so that zoom knows where to zoom and unzoom from
zm.translate([350, 20]);


function redraw() {

    //console.log("here", d3.event.translate, d3.event.scale);

    console.log(d3.event.translate)

    svg.attr("transform",

    "translate(" + d3.event.translate + ")"

    + " scale(" + d3.event.scale + ")");
  
}
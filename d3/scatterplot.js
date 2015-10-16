var dataset = [
                [5, 20], 
                [480, 90], 
                [250, 50], 
                [100, 33], 
                [330, 95],
                [410, 12], 
                [475, 44], 
                [25, 67], 
                [85, 21],
                [220, 88],
                [600, 150]
              ];
              
var h = 300;
var w = 500;

var padding = 20;
            
            
//scales
//Scales are functions that map from an input domain to an output range.
//scale’s input domain is the range of possible input data values
//scale’s output range is the range of possible output values,
var xScale = d3.scale.linear()
                .domain([0, d3.max(dataset, function(d){ return d[0]; })])
                .range([padding, w - padding * 2]);
var yScale = d3.scale.linear()
                .domain([0, d3.max(dataset, function(d){ return d[1]; })])
                .range([h - padding, padding]);
var rScale = d3.scale.linear()
                    .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                    .range([2,5]);
  
  
var svg = d3.select('.scatterplot')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
                      
//scatterplot
svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    //without scale
    // .attr('cx', function(d){
    //     return d[0];
    // })
    // .attr('cy', function(d){
    //     return d[1];
    // })
    //with scale
    .attr('cx', function(d){
        return xScale(d[0]);
    })
    .attr('cy', function(d){
        return yScale(d[1]);
    })
    .attr('r', function(d){
        return rScale(d[1]);
    }); //this shows different sizes of circles
    // .attr('r', 5); //set size
    
//labels
svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d){
        return d[0] + ", " + d[1];
    })
    //without scale
    // .attr('x', function(d){
    //     return d[0];
    // })
    // .attr('y', function(d){
    //     return d[1];
    // })
    //with scale
    .attr('x', function(d){
        return xScale(d[0]);
    })
    .attr('y', function(d){
        return yScale(d[1]);
    })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '11px')
    .attr('fill', 'red');

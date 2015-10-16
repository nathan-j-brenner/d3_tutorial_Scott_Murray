var circleData = [5, 10, 15, 20, 25];
var w = 500;
var h = 50;
var svg = d3.select('.circles')
            .append('svg')
            .attr('width', w)
            .attr('height', h);
var circle = svg.selectAll('circle')
                .data(circleData)
                .enter()
                .append('circle');
circle.attr('cx', function(d, i){ //i = index of d
            return (i*50)+25;
        })
        .attr('cy', h/2)
        .attr('r', function(d){
            return d;
        })
        .attr('fill', 'yellow')
        .attr('stroke', 'orange')
        .attr('stroke-width', function(d){
            return d/2;
        });
        //effective data visualization: choose appropriate mapping so the visual expression of your data is understandable and useful for the viewer
var random = []
for (var i = 0; i<25; i++){
    var newNumber = Math.round(Math.random() * 30);
    random.push(newNumber);
}

d3.select('.randomBars').selectAll('div')
    .data(random)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', function(d){
        var barheight = d*5;
        return barheight + "px";
    });
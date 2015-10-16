//chaining method
d3.select('.paragraph')
    .append('p')
    .text('New paragraph!');
    
//chainless method
// var body = d3.select('body');
// var p = body.append('p');
// p.text('A paragraph made without chaining');

/*
d3: references the d3 object so we can access its methods
    
select method: selects a single element from the DOM using CSS selector syntax
append: create a new element and append the following text to that element

chaining: perform multiple actions on one line of code by appending .method
order matters for chaining
*/

/*
data visualization: the process of mapping data to visuals
d3 binds data input values to elements in the DOM
*/

var dataset = [5, 10, 15, 20];
d3.select('.paragraphs')
    .selectAll('p') //selects all p elements in the dom, which right now it returns an empty selection
    .data(dataset) //counts and parses the values of dataset
    .enter()//create a new data bound placeholder element
    .append('p') //placeholder element becomes a paragraph element
    .text(function(d){ return "I can count up to " + d; }) //d is set to the corresponding value in yoru original data set, given the current element at hand
    .style('color', function(d){
        if( d > 15){
            return 'red';
        } else {
            return 'black';
        }
    });

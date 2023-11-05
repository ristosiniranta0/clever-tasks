// filename: complex_code.js

// This code is a complex example of a data visualization project using D3.js library.

// Import libraries
const d3 = require('d3');
const moment = require('moment');

// Set up canvas
const svg = d3.select('body')
  .append('svg')
  .attr('width', 800)
  .attr('height', 600);

// Load data from API
d3.json('https://api.example.com/data', function(error, data) {
  if (error) throw error;

  // Pre-process data
  const formattedData = data.map(d => ({
    date: moment(d.date).toDate(),
    value: +d.value
  }));

  // Set up scales
  const xScale = d3.scaleTime()
    .domain([d3.min(formattedData, d => d.date), d3.max(formattedData, d => d.date)])
    .range([0, 800]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(formattedData, d => d.value)])
    .range([600, 0]);

  // Draw axes
  const xAxis = d3.axisBottom()
    .scale(xScale)
    .tickFormat(d3.timeFormat('%b %Y'));

  const yAxis = d3.axisLeft()
    .scale(yScale);

  svg.append('g')
    .attr('class', 'x-axis')
    .attr('transform', 'translate(0, 600)')
    .call(xAxis);

  svg.append('g')
    .attr('class', 'y-axis')
    .call(yAxis);

  // Draw line chart
  const line = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    .curve(d3.curveBasis);

  svg.append('path')
    .data([formattedData])
    .attr('class', 'line-chart')
    .attr('d', line);

  // Add tooltip
  const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  svg.selectAll('.data-point')
    .data(formattedData)
    .enter()
    .append('circle')
    .attr('class', 'data-point')
    .attr('cx', d => xScale(d.date))
    .attr('cy', d => yScale(d.value))
    .attr('r', 4)
    .on('mouseover', d => {
      tooltip.transition()
        .duration(200)
        .style('opacity', .9);

      tooltip.html(`Value: ${d.value}<br>Date:${moment(d.date).format('MMM D, YYYY')}`)
        .style('left', `${d3.event.pageX}px`)
        .style('top', `${d3.event.pageY - 28}px`);
    })
    .on('mouseout', d => {
      tooltip.transition()
        .duration(500)
        .style('opacity', 0);
    });

  // Add legend
  const legend = svg.append('g')
    .attr('class', 'legend')
    .attr('transform', 'translate(650, 20)');

  legend.append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 6)
    .style('fill', 'steelblue');

  legend.append('text')
    .attr('x', 12)
    .attr('y', 0)
    .text('Data Value');

  // Add title
  svg.append('text')
    .attr('x', 400)
    .attr('y', 30)
    .attr('text-anchor', 'middle')
    .style('font-size', '18px')
    .text('Complex Data Visualization');

  // Other complex functionality and interactions can be added here...

});
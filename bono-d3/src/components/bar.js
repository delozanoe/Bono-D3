import * as d3 from "d3";

export function drawChart(data) {
  const canvas = d3.select("#chart");
  const width = 700;
  const height = 500;
  const margin = { top: 10, left: 50, bottom: 40, right: 10 };
  const iwidth = width - margin.left - margin.right;
  const iheight = height - margin.top - margin.bottom;

  const svg = canvas.append("svg");
  svg.attr("width", width).attr("height", height);

  let g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const y = d3.scaleLinear().domain([0, 100]).range([iheight, 0]);

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.purchasingpower))
    .range([0, iwidth])
    .padding(0.1);

  const bars = g.selectAll("rect").data(data);

  bars
    .enter()
    .append("rect")
    .attr("class", "bar")
    .style("fill", "steelblue")
    .attr("x", (d) => x(d.purchasingpower))
    .attr("y", (d) => y(d.lifeexpectancy))
    .attr("height", (d) => iheight - y(d.lifeexpectancy))
    .attr("width", x.bandwidth());

  g.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x))
    .attr("transform", `translate(0, ${iheight})`);

  g.append("g").classed("y--axis", true).call(d3.axisLeft(y));

  //Create X axis label

  svg
    .append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("número de refugiados");

  svg
    .append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", 6)
    .attr("dx", ".75em")
    .text("pais de procedencia");
}

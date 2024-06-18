// Declare the chart dimensions and margins.
let container = document.querySelector('.container-chart')
let width = container.offsetWidth;
let height = container.offsetHeight;

// Declare the x and y scales.
const x = d3.scaleTime()
    .range([0, width])
const y = d3.scaleLinear()
    .range([height, 0])

// Create the SVG container.
const svg = d3.select('#container-chart')
    .append('svg')
    .attr("width", '100%')
    .attr("height", '100%')
    .style("overflow", 'visible')
    .attr('viewBox', '0 0 ' + Math.max(width, height) + ' ' + Math.max(width, height))
    .attr('preserveAspectRatio', 'xMinYMin')
    .append("g")
    .attr("transform", "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")")
    .attr("transform", "scale(1.38)");

// create a fake data
const dataset = [
    { date: new Date('2020-01-01'), value: 263 },
    { date: new Date('2021-01-01'), value: 550 },
    { date: new Date('2022-01-01'), value: 775 },
    { date: new Date('2023-01-01'), value: 860 }
]

const dataset2 = [
    { date: new Date('2020-01-01'), value: 177 },
    { date: new Date('2021-01-01'), value: 330 },
    { date: new Date('2022-01-01'), value: 375 },
    { date: new Date('2023-01-01'), value: 426 }
]

// Define the x and y domains
x.domain(d3.extent(dataset, d => d.date));
y.domain([0, d3.max(dataset, d => d.value = Math.ceil(d.value))])

// Add the x-axis.
svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x)
        .ticks(d3.timeYear.every(1)));

// Add the y-axis.
svg.append('g')
    .call(d3.axisLeft(y));

//create the line and area generation
const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value));

const area = d3.area()
    .x(d => x(d.date))
    .y0(height)
    .y1(d => y(d.value))

//create gradient
const lgBlue = svg.append("defs").append("linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%");

lgBlue.append("stop")
    .attr("offset", "0%")
    .style("stop-color", "#65B8EF")
    .style("stop-opacity", .7)

lgBlue.append("stop")
    .attr("offset", "100%")
    .style("stop-color", "#ECF5FE")
    .style("stop-opacity", .7)

const lgRed = svg.append("defs").append("linearGradient")
    .attr("id", "gradientRed")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%");

lgRed.append("stop")
    .attr("offset", "0%")
    .style("stop-color", "#F4662A")
    .style("stop-opacity", .7)

lgRed.append("stop")
    .attr("offset", "100%")
    .style("stop-color", "#FF7512")
    .style("stop-opacity", .7)


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            svg.append('path')
                .datum(dataset)
                .attr('class', 'area')
                .attr('d', area)
                .style("fill", "url(#gradient)")
                .style('opacity', 0)
                .transition()
                .delay(3500)
                .duration(3000)
                .style('opacity', .5)

            svg.append('path')
                .datum(dataset)
                .attr('class', 'line')
                .attr('fill', 'none')
                .attr('stroke', '#65B8EF')
                .attr('stroke-width', 1)
                .attr('d', line)
                .attr('stroke-dasharray', 2000)
                .attr('stroke-dashoffset', 2000)
                .transition()
                .delay(2500)
                .duration(3000)
                .attr('stroke-dashoffset', 0);

            svg.append('path')
                .datum(dataset2)
                .attr('class', 'area')
                .attr('d', area)
                .style("fill", "url(#gradientRed)")
                .style('opacity', 0)
                .transition()
                .delay(3500)
                .duration(3000)
                .style('opacity', .5)

            svg.append('path')
                .datum(dataset2)
                .attr('class', 'line')
                .attr('fill', 'none')
                .attr('stroke', '#FF7512')
                .attr('stroke-width', 1)
                .attr('d', line)
                .style('stroke-dasharray', 3000)
                .style('stroke-dashoffset', 3000)
                .transition()
                .delay(2500)
                .duration(3000)
                .style('stroke-dashoffset', 0);

            //add circles
            const cx = function (d) { return x(d.date) }
            const cy = function (d) { return y(d.value) }

            svg.selectAll('circles')
                .data(dataset2)
                .enter()
                .append("circle")
                .attr("fill", "#FF7512")
                .attr("stroke", "none")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", 4)
                .style('opacity', 0)
                .transition()
                .delay(1500)
                .duration(1000)
                .style('opacity', 1)

            svg.selectAll('circles')
                .data(dataset)
                .enter()
                .append("circle")
                .attr("fill", "#65B8EF")
                .attr("stroke", "none")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r",4)
                .style('opacity', 0)
                .style('z-index', 10)
                .transition()
                .delay(1500)
                .duration(1000)
                .style('opacity', 1)
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.container-chart');
for (let elm of elements) {
    observer.observe(elm);
}
// Append the SVG element.

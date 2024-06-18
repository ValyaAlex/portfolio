// Declare the chart dimensions and margins.
let containerChart2 = document.querySelector('.container__chart-2')
let widthChart2 =  containerChart2.offsetWidth;
let heightChart2 = containerChart2.offsetHeight;
// Declare the x and y scales.
const xChart2 = d3.scaleTime()
    .range([0, widthChart2])
const yChart2 = d3.scaleLinear()
    .range([heightChart2, 0])

// Create the SVG container.
const svgChart2 = d3.select('#container__chart-2')
    .append('svg')
    .attr("width", '100%')
    .attr("height", '100%')
    .style("overflow", 'visible')
    .attr('viewBox', '0 0 ' + Math.min(widthChart2, heightChart2) + ' ' + Math.min(widthChart2, heightChart2))
    .attr('preserveAspectRatio', 'xMinYMin')
    .append("g")
    // .attr("transform", "translate(" + Math.min(widthChart2, heightChart2) / 2 + "," + Math.min(widthChart2, heightChart2) / 2 + ")")
    ;

// create a fake data
const datasetChart2 = [
    { date: new Date('2020-01-01'), value: 670 },
    { date: new Date('2021-01-01'), value: 600 },
    { date: new Date('2022-01-01'), value: 460 }
]

// Define the x and y domains
xChart2.domain(d3.extent(datasetChart2, d => d.date));
yChart2.domain([0, d3.max(datasetChart2, d => d.value = Math.ceil(d.value))])

// Add the x-axis.
svgChart2.append('g')
    .attr('transform', `translate(0, ${heightChart2})`)
    .call(d3.axisBottom(xChart2)
        .ticks(d3.timeYear.every(1)));

// Add the y-axis.
svgChart2.append('g')
    .call(d3.axisLeft(yChart2));

//create the line and area generation
const lineChart2 = d3.line()
    .x(d => xChart2(d.date))
    .y(d => yChart2(d.value));

const areaChart2 = d3.area()
    .x(d => xChart2(d.date))
    .y0(heightChart2)
    .y1(d => yChart2(d.value))

//create gradient
const lgBlueChart2 = svg.append("defs").append("linearGradient")
    .attr("id", "gradient2")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%");

lgBlueChart2.append("stop")
    .attr("offset", "0%")
    .style("stop-color", "#65B8EF")
    .style("stop-opacity", .3)

lgBlueChart2.append("stop")
    .attr("offset", "100%")
    .style("stop-color", "#FF7512")
    .style("stop-opacity", .3)


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            svgChart2.append('path')
                .datum(datasetChart2)
                .attr('class', 'area')
                .attr('d', areaChart2)
                .style("fill", "url(#gradient2)");

            svgChart2.append('path')
                .datum(datasetChart2)
                .attr('class', 'line')
                .attr('fill', 'none')
                .attr('stroke', '#65B8EF')
                .attr('stroke-width', 1)
                .attr('d', lineChart2);

            //add circles
            const cxChart2 = function (d) { return xChart2(d.date) }
            const cyChart2 = function (d) { return yChart2(d.value) }

            svgChart2.selectAll('circles')
                .data(datasetChart2)
                .enter()
                .append("circle")
                .attr("class", "circle__decoration")
                .attr("fill", "#65B8EF")
                .attr("stroke", "none")
                .attr("cx", cxChart2)
                .attr("cy", cyChart2)
                .attr("r", 4);
        }
    });
}
let optionsChart2 = { threshold: [0.5] };
let observerChart2 = new IntersectionObserver(onEntry, optionsChart2);
let elementsChart2 = document.querySelectorAll('.container__chart-2');
for (let element of elementsChart2) {
    observerChart2.observe(element);
}
// Append the SVG element.

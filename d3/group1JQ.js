$(document).ready(function() {

  var svg = d3.select("body").append("svg")
                              .attr("width",300)
                              .attr("height",200);

  var barChart = svg.append("g");

  barChart.append("rect")
      .attr("x",0).attr("y",0)
      .attr("width",100).attr("height",50).attr("fill","steelblue");
  barChart.append("rect")
      .attr("x",0).attr("y",60)
      .attr("width",200).attr("height",50).attr("fill","steelblue");
  barChart.append("rect")
      .attr("x",0).attr("y",120)
      .attr("width",300).attr("height",50).attr("fill","steelblue");
});


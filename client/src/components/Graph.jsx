import React, {useEffect} from 'react'

export default function Graph({graphData}) {
  useEffect(() => {
    if (graphData.length === 0) return;
    let transformedData = graphData.map(point => [point.time, parseFloat(point.priceUsd)]);
    transformedData.unshift(['Time', 'Price']);
    window.google.charts.load('current', {'packages':['corechart']});
    window.google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = window.google.visualization.arrayToDataTable(transformedData);
      var options = {
        title: 'Last Transaction',
        curveType: 'none',
        vAxis: {
          gridlines: {
            color: 'transparent'
          }
        },
        hAxis: {
          gridlines: {
            color: 'transparent'
          }
        },
        chartArea: {
          down: 0,
          right: 0,
          up: 0,
          width: '90%',
          height: '90%',
        },
        height: 130,
        series: {
          0: {
            color: transformedData[transformedData.length - 1][1] > transformedData[1][1] ? 'green' : 'red'
          }
        }
      };
      var chart = new window.google.visualization.LineChart(document.getElementById('curve_chart'));
      chart.draw(data, options);
    }
  }, [graphData])
  
  return (
    <div id="curve_chart" style={{width: '98%'}}>
    </div>
  )
}

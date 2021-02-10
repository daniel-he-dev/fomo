import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Chart from 'react-google-charts';
import {Card} from 'react-bootstrap'

function Trends({searchTerm}) {
  const [chartData, setChartData] = useState({});
  
  useEffect(() => {
    getTrendData(searchTerm).then(data => {
      setChartData(data)
    })
  }, [searchTerm])
  
  const getTrendData = (term, start = new Date((new Date()).setFullYear((new Date()).getFullYear() - 5)), end = new Date()) => {
    return axios.get(`/trends?keyword=${term}&startTime=${start}&endTime=${end}`)
      .then(res => {
        let data = {};
        data.points = res.data.default.timelineData.map(line => [new Date(parseInt(line.time)*1000), line.value[0]]);
        data.points.unshift(['Date', 'Search Term']);
        return data;
      });
  };


  return (
    <Card >
      <Card.Body>
        <Card.Title>Google Search Popularity</Card.Title>
        <Chart
          width={'auto'}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData.points}
          options={{
            title: searchTerm,
            legend: 'none',
            hAxis: {
              title: 'Time',

            },
            vAxis: {
              title: 'Popularity'
            }
          }}
        />
        
      </Card.Body>
    </Card>
  )
}

export default Trends

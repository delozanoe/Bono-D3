import React, { useEffect, useState } from 'react';
import './App.css';
import { drawChart } from './components/bar';
import * as d3 from 'd3';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.json(
      'https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json'
    ).then((data) => {
      console.log(data);
      drawChart(data);
    });
  }, []);

  return (
    <div className='App'>
      <h2>Purchasing Power vs Life Espectancy</h2>
      <div id='chart'></div>
    </div>
  );
}

export default App;

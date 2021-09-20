import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';

const AboutMe = () => {
  const [Series] = useState([75]);
  const [Options] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px',
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#5cdb95'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['React JS'],
  });

  return (
    <section className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='section-title'>About Me</h1>
          </div>
          <div className='col-md-4'>
            <ReactApexChart
              options={Options}
              series={Series}
              type='radialBar'
              height={250}
            />
          </div>
          <div className='col-md-8'></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

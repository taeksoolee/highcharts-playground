
/**
 * Bubble Chart
 */
import Highcharts, { reduce } from 'highcharts';

import highchartsMore from 'highcharts/highcharts-more';
highchartsMore(Highcharts); // bubble 차트 등 특정 차트는 highchart-more 설정이 필요하다.

const renderBubbleChart = () => {
  Highcharts.chart('bubble-chart', {
    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      // zoomType: 'xy',
    },
    legend: {
      enabled: true
    },
    title: {
      text: '평균 예측 오차율'
    },
    // subtitle: {
    //   text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
    // },
    accessibility: {
      point: {
        valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
      }
    },
    xAxis: {
      showFirstLabel: false,
      showLastLabel: false,
      gridLineWidth: 1,
      title: {
        text: '월'
      },
      min: 0,
      max: 13,
      startOnTick: false,
      endOnTick: false,
      labels: {
        format: '{value}'
        // format: '{value} gr'
      },
      // 선 긋기
      // plotLines: [{
      //   color: 'black',
      //   dashStyle: 'Dot',
      //   width: 2,
      //   value: 65,
      //   label: {
      //     rotation: 0,
      //     y: 15,
      //     style: {
      //       fontStyle: 'italic'
      //     },
      //     text: 'Safe fat intake 65g/day'
      //   },
      //   zIndex: 3
      // }],
      accessibility: {
        rangeDescription: 'Range: 60 to 100 grams.'
      }
    },
    yAxis: {
      // startOnTick: false,
      // endOnTick: false,
      title: {
        text: '발전시간 (h)'
      },
      labels: {
        format: '{value}'
        // format: '{value} gr'
      },
      // maxPadding: 0.2,
      // 선 긋기
      // plotLines: [{
      //   color: 'black',
      //   dashStyle: 'Dot',
      //   width: 2,
      //   value: 50,
      //   label: {
      //     align: 'right',
      //     style: {
      //       fontStyle: 'italic'
      //     },
      //     text: 'Safe sugar intake 50g/day',
      //     x: -10
      //   },
      //   zIndex: 3
      // }],
      // accessibility: {
      //   rangeDescription: 'Range: 0 to 160 grams.'
      // }
    },
    tooltip: {
      useHTML: true,
      headerFormat: '<table>',
      pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
        '<tr><th>기준월:</th><td>{point.x} 월</td></tr>' +
        '<tr><th>발전시간:</th><td>{point.y} 시간</td></tr>' +
        '<tr><th>자원수:</th><td>{point.z} 개</td></tr>',
      footerFormat: '</table>',
      followPointer: true
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false,
          // enabled: true,
          // format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'bubble',
      // name: '집합자원-1',
      name: 'HZ0003',
      data: [
        // x: 월, y: 발전시간, z: 자원수
        { x: 1, y: 95, z: 3, name: '정송솔라2호', },
        { x: 1, y: 102.9, z: 2, name: '정송솔라3호', },
        { x: 3, y: 91, z: 3, name: '묘사', },
        { x: 4, y: 102.5, z: 4, name: '와조', },
        { x: 1, y: 86.1, z: 1, name: '가야4호', },
        { x: 5, y: 70.1, z: 4, name: '태조솔라2호', },
        { x: 1, y: 68.5, z: 3, name: '사당태양광', },
        { x: 7, y: 83.1, z: 2, name: '정선1호', },
        { x: 2, y: 93.2, z: 4, name: '백양사', },
        { x: 10, y: 57.6, z: 2, name: '태조솔라3호', },
        { x: 12, y: 20, z: 3, name: '죽현1호', },
      ] as (Highcharts.PointOptionsObject & { country: string })[],
      // colorByPoint: true
      colorByPoint: false,
    },
    {
      type: 'bubble',
      // name: '집합자원-2',
      name: 'HZ0004',
      data: [
        // x: 월, y: 발전시간, z: 자원수
        { x: 1, y: 40, z: 3, name: '평산', },
        { x: 5, y: 30, z: 2, name: '적암', },
      ] as (Highcharts.PointOptionsObject & { country: string })[],
      // colorByPoint: true
      colorByPoint: false,
    }]
  } as Highcharts.Options);
}

export default renderBubbleChart;
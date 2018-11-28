import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import axios from 'axios';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData,
      quantities: []
    }
  }

//   static defaultProps = {
//     displayTitle:true,
//     displayLegend: true,
//     legendPosition:'right',
//     location:'City'
//   }

  componentDidMount(){
      axios.get('/getOrderQuantities')
      .then(res => this.setState({quantities: res.data}))
      console.log(this.state.quantities)
  }

  
  render(){
    function getRandomColor() {
        let letters = '0123456789ABCDEF'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const formattedData = {
    
        labels: this.state.quantities.map(item => item.name),
        datasets: [
          {
            data: this.state.quantities.map(item => item.quantity),
            backgroundColor: this.state.quantities.map(() => getRandomColor())
            // ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };


    return (
      <div className="chart">
        <h1>Most Popular Items</h1>

        <Pie
          data={formattedData}
          options={{
            title:{
              display: this.props.displayTitle,
              text: 'Most Popular Items',
              fontSize: 25
            },
            legend:{
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
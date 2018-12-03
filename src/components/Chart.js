import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut, Radar} from 'react-chartjs-2';
import axios from 'axios';
import {Grid, Row} from 'react-bootstrap'

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData,
      quantities: []
    }
  }

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
        <Grid>
          <Row>
            <h3>10 MOST POPULAR DRINKS</h3>
            <div className="chart-container"> 
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

            </div><br/> <br/><hr /><br/>
            <h3>10 MOST POPULAR FOOD</h3>
            <div className="chart-container"> 
              <Bar
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
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Chart;
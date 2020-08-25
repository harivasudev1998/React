import React from 'react';
import { Chart,Pie, Bar, Line } from 'react-chartjs-2';
import axios from 'axios';
import '../css/App.css';
import { Container, Card } from 'react-bootstrap';


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
       
        selectedData:[],
        chartData:{    
        }
    }
}

componentDidMount() {
  this.getChartData();
}

getChartData() {
  
    axios.get('http://localhost:3000/allProducts').then((res)=>{
        let titles=[]
        var stocks=[]
        console.log(res.data)
        this.setState({selectedData:res.data})
        this.state.selectedData.map((cat)=>{
           return(
            titles.push(cat.name)
           ) 
        });
        this.state.selectedData.map((cat)=>{
            return(
             stocks.push(parseInt(cat.stock))
             
            ) 
         });
         console.log("titles"+titles)
         console.log("stocks"+stocks)
         this.setState({chartData:
            {
                labels:[...titles],
            datasets:[{
                label:'Stock Availability',
                data:[
                    ...stocks
                ],
                backgroundColor:[
                    'rgba(225,99,132,0.6)',
                    'rgba(225,206,86,0.6)',
                    'rgba(54,162,235,0.6)',
                    'rgba(75,192,192,0.6)',
                    'rgba(153,102,255,0.6)',
                    'rgba(225,159,64,0.6)',
                    'rgba(225,99,132,0.6)'
                ]
            }],
            } 
        });
    })
    
    console.log("dataset");
    console.log(this.state.chartData)
}
render() { 
   
    return ( 
        
        <div  style={{backgroundColor:"lightgoldenrodyellow",paddingTop:'10px',paddingBottom:'200px'}}>
          
            <div>
        
                <h1 style={{color:'blue',backgroundColor:"cyan",textAlign:"center",fontFamily:"cursive"}}>Dashboard</h1>
                <Container className="dashboard">
                 
                <Pie
                data={this.state.chartData}
                height={250}
                options={
                    
                    {
                    title:{
                        display:true,
                        text:'Stock Availability'
                    },
                    legend:{
                        display:true,
                        position:"top"
                      
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                }}>



                </Pie>
               
                </Container>
        <Container className="dashboard">
                
                <Bar
                data={this.state.chartData}
                height={200}
                options={{
                    title:{
                        display:true,
                        text:'Stock Availability'
                    },
                    legend:{
                        display:true,
                        position:"top"
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                }}>

                </Bar>
             
</Container>

<Container className="dashboard">
                <Line
                data={this.state.chartData}
                height={200}
                options={{
                    title:{
                        display:true,
                        text:'Stock Availability'
                    },
                    legend:{
                        display:true,
                        position:"top"
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                }}>

                </Line>
                </Container>
            </div>
        </div>
      
     
     );
}
}
export default Home;
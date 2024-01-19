/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
// import { Box, Button, Container, Grid } from '@mui/material';
// import { red } from '@mui/material/colors';


// function App() {
//   return (
//     <Container maxWidth="sm">
//       {/* <Box sx={{ backgroundColor:'lightcyan' }}>Day wise Calendar
//       </Box> */}
//       <Grid container spacing={2}>
//       <Grid item xs={12} sx={{ backgroundColor:'lightyellow' }}>
//        <Grid item xs={4}>
         
//           <Button variant='outlined'sx={{ height:200,width:'100%' }} color='success'>19-1-2024</Button>
//           <Button variant='outlined'sx={{ height:'100%',width:'100%' }} color='success'>19-1-2024</Button>
//         </Grid>
//       </Grid>
       

//         <Grid item xs={4}>
//           <Button>xs=4</Button>
//         </Grid>
        
//         <Grid item xs={4}>
//           <Button>xs=4</Button>
//         </Grid>
//         <Grid item xs={8}>
//           <Button>xs=8</Button>
//         </Grid>

//       </Grid>
     
//     </Container>
//    /*  <div className="App">
//       <BasicGrid />
//     </div> */
//   );
// }

// export default App;

import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import DateToday from './components/DateToday';
import './App.css';
import MonthToday from './components/MonthToday';
import YearToday from './components/yearToday';


function App() {
  return (
    <Container maxWidth='sm' >
    <Grid container spacing={0.5} >
      <Grid item xs={4}>
        <div style={{ backgroundColor: 'lightblue', padding: 20,height:120, width:141,border:"2px solid black" }} >
          <div>
            <DateToday/>
          </div> 
      </div>
      </Grid>

      <Grid item xs={3}>
        <div style={{ backgroundColor: 'lightblue', padding: 20,height:120, width:95,border:"2px solid black" }}>
          <div>
            <MonthToday/>
          </div>
        </div>
      </Grid>

      <Grid item xs={5}>
        <div style={{ backgroundColor: 'lightblue', padding: 20,height:120, width:228,border:"2px solid black" }}>
          <div>
            <YearToday/>
          </div>
        </div>
      </Grid>

      <Grid item xs={6}>
        <div style={{ backgroundColor: 'pink', padding: 20,height:50, width:234,border:"2px solid black"}}>
        <table style={{width:220,textAlign:'left'}}>
          <tr>
            <th style={{fontSize:20,color:"mediumseagreen"}}>சோபகிருது</th>
            <th rowspan="2" style={{fontSize:50,color:"blueviolet"}}>5</th>
          </tr>
          <tr>
            <th style={{fontSize:20,color:"magenta"}}>தை</th>
          </tr>
        </table>
        </div>
      </Grid>

      <Grid item xs={6}>
        <div style={{ backgroundColor: 'yellow', padding: 20,height:50, width:274,border:"2px solid black" }}>
        <table style={{width:"100%",textAlign:'center'}}>
          <tr>
            <th colspan="2" style={{fontSize:30,color:"green"}}>JANUARY - FRI</th>
          </tr>
          <tr>
            <th style={{fontSize:15,color:"red"}}>வெள்ளி</th>
          </tr>
        </table>
        </div>
      </Grid>

      <Grid item xs={8}>
        <div style={{ backgroundColor:'lightcoral', padding: 20,height:150,width:325,fontSize:20,fontWeight:'bold',textAlign:'center',border:"2px solid black" }}>
          வளர். நவமி 43.05 (மா. 11.49) அசுபதி 02.10 (கா. 07.27) பரணி 57.33 (கா.05.36) தியாஜ் 25.10 அமிர்த 59.43 மேல் சித்த. நவமி</div>
        
        <div style={{ backgroundColor: 'lightgreen', padding: 20,border:"2px solid black",height:137,width:325,color:"blue" }}>
          <table style={{width:"100%",border:"1px solid black"}}>
            <tr>
              <th>நல்லநேரம்</th>
              <th>இராகு</th>
              <th>எமகண்டம்</th>
            </tr>
            <tr>
              <td>09.30-10.30</td>
              <td>10.30-12.00</td>
              <td>03.00-04.30</td>
            </tr>
          </table>
        </div>
      </Grid>

      <Grid item xs={4}>
        <div style={{ backgroundColor: 'orange', padding: 20,height:330, width:180,border:"2px solid black" }}>
          <table style={{width:"100%"}}>
          <tr >
            <th colspan="2"style={{border:"1px solid black"}}>இராசிபலன்</th>
          </tr>
          <tr>
            <td>மேஷம்</td>
            <td>மகிழ்ச்சி</td>
          </tr>
          <tr>
            <td>ரிஷபம்</td>
            <td>இன்பம்</td>
          </tr>
          <tr>
            <td>மிதுனம்</td>
            <td>இரக்கம்</td>
          </tr>
          <tr>
            <td>கடகம்</td>
            <td>பொறுமை</td>
          </tr>
          <tr>
            <td>சிம்மம்</td>
            <td>போட்டி</td>
          </tr>
        
          <tr>
            <td>கன்னி</td>
            <td>விவேகம்</td>
          </tr>
          <tr>
            <td>துலாம்</td>
            <td>முயற்சி</td>
          </tr>
          <tr>
            <td>விருச்சிகம்</td>
            <td>எதிர்ப்பு</td>
          </tr>
          <tr>
            <td>தனுசு</td>
            <td>சுகம்</td>
          </tr>
          <tr>
            <td>மகரம்</td>
            <td>நலம்</td>
          </tr>
          <tr>
            <td>கும்பம்</td>
            <td>ஜெயம்</td>
          </tr>
          <tr>
            <td>மீனம்</td>
            <td>பாசம்</td>
          </tr>
        </table>
      </div>

    </Grid>
  </Grid>      
</Container>
     
  );
}

export default App;
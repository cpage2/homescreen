import './App.css';
import Moment from 'react-moment';





function App() {


  //style for fonts
  let fontStyle ={
    fontSize: 20,
    color: 'white'

  };


  return (
    //date
    //time
    //qoute in transparent rectangle
   
    <div >
        <><Moment style={fontStyle} className='date' format='LL' interval={1000} fromNow></Moment>
        <><br></br></>
        <Moment style={fontStyle} className='time'format='LT' interval={1000} fromNow></Moment></>
       
    </div>



  );


}

export default App;

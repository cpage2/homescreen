import './App.css';
import Moment from 'react-moment';
import moment from 'moment';



//tm.jpg
function App() {


  //style for fonts
  let fontStyle ={
    fontSize: 20,
    color: 'white'

  };


  // var { currentDate, time } = TimeDate();


  return (
    //date
    //time
    //qoute in transparent rectangle
   
    <div >
     
      
       <Moment format='LL'></Moment><><br></br></>
       <Moment format='LTS'></Moment>
      
    </div>



  );




  

  function TimeDate() {
    var date = moment();
    var currentDate = date.format("LL");

    var time = date.format("LTS");
    
    return (
       <><p style={fontStyle}>{currentDate}</p><p style={fontStyle}>{time}</p></>);
  }



}

export default App;

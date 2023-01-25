import './App.css';
import Moment from 'react-moment';
import { useState, useEffect} from 'react';





function App() {


  //style for fonts
  let fontStyle ={
    fontSize: 12,
    color: 'white'

  };

  

  let aStyle = {
    color:'white',
    textDecoration: 'none'
  }

  const [bgImg, setBgImg] = useState({
    classList: ""
  });


 //Find out the issue of bg not changing
  useEffect(() => {

    let hour  = 0;
    function getHour(){
      let dt = new Date();
      hour = dt.getHours();
     
     // console.log(hour);
      return hour;

    }
   
   
    setBgImg(() => {
      getHour();
      
      if((hour > 5) && (hour <= 7)){

        return{classList:"sunrise"};
      
      }else if ((hour > 7) && (hour <=10))  {
        return { classList: "morning"};
      
      } else if((hour >10) && (hour <= 17)){
        return { classList: "midDay"};
      
      } else if((hour > 17) && (hour <= 19)){
        return { classList: "sunsest" };
      
      }else{
        return {classList:"night"}
      }

      
   
     
    })
   
    console.log(bgImg.classList);

    document.body.classList.add(bgImg.classList);
    
  }, [bgImg.classList]);

  return (
    //date
    //time
    //qoute in transparent rectangle
   
    <>
      
      
      <div className='dateTime'>
        <><Moment id='date' format='LL' interval={1000} fromNow></Moment>
          <><br></br></>
          <Moment  id='time' format='LT' interval={1000} fromNow></Moment></>

      </div>
      
      
      <div className='qouteBox'>
          <p id='qoute' style={fontStyle}>“I hope that you never cower from your dark chapters, but highlight them as proof of perseverance, endurance, and strength.”<br></br>
            ― Kierra C.T. Banks</p>
      
      </div>
      
      <footer ><p id='credit' style={fontStyle}>Photo by 
       <a style = {aStyle} href ="https://unsplash.com/@miyatankun?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"  target="_blank"
        rel="noreferrer"> Takashi Miyazaki</a></p>

      
       
       </footer>
      </>



  );



  

}

export default App;

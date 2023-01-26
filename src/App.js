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
    classList: "campfire",
    creditName: "name",
    creditLink: 'empty'
    
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
      
    //need to return different credits  
      if((hour > 5) && (hour <= 7)){

        return{classList:"sunrise", creditName:"Bailey Zindel", creditLink:"https://unsplash.com/photos/NRQV-hBF10M"};
      
      }else if ((hour > 7) && (hour <=10))  {

        return { classList: "morning", creditName:"Carolyn Page", creditLink:"#"};
      
      } else if((hour > 10) && (hour <= 16)){
        return { classList: "midDay", creditName:"Carolyn Page", creditLink:"#"};
      
      } else if((hour > 16) && (hour <= 19)){
        return {classList: "sunsest" , creditName:"Takashi Miyazaki", creditLink:"https://unsplash.com/@miyatankun?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"};
      
      }else{
        return {classList:"night", creditName:"Farid Askerov", creditLink:"https://unsplash.com/photos/cX6ra6dCtAM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}
      }

      
   
     
    })
   
   

    document.body.classList.add(bgImg.classList);
    
  }, [bgImg.classList]);


  

  return (
    //date
    //time
    //qoute in transparent rectangle
   
    <>
      
      
      <div className='dateTime'>
        <><Moment className='date' format='LL' interval={1000} fromNow></Moment>
          <><br></br></>
          <Moment  className ='time' format='LT' interval={1000} fromNow></Moment></>

      </div>
      
      
      <div className='qouteBox'>
          <p id='qoute' style={fontStyle}>“I hope that you never cower from your dark chapters, but highlight them as proof of perseverance, endurance, and strength.”<br></br>
            ― Kierra C.T. Banks</p>
      
      </div>
      
      <footer ><p id='credit' style={fontStyle}>Photo by 
       <a style = {aStyle} href ={bgImg.creditLink}  target="_blank"
        rel="noreferrer"> {bgImg.creditName}</a></p>

      
       
       </footer>
      </>



  );



  

}

export default App;

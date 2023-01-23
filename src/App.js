import './App.css';
import Moment from 'react-moment';





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

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
   
    <>
     
      <div className='dateTime'>
        <><Moment style={fontStyle} className='date' format='LL' interval={1000} fromNow></Moment>
          <><br></br></>
          <Moment style={fontStyle} className='time' format='LT' interval={1000} fromNow></Moment></>

      </div>
      
      
      <div className='qouteBox'>
          <p id='qoute'>“I hope that you never cower from your dark chapters, but highlight them as proof of perseverance, endurance, and strength.”<br></br>
            ― Kierra C.T. Banks</p>
      
      </div>
      
      <footer><p id='credit'>Photo by <a href="https://unsplash.com/@miyatankun?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Takashi Miyazaki</a> on <a href="https://unsplash.com/photos/4VELvD-vdVg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p></footer>
      </>



  );


}

export default App;

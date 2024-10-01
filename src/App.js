import './App.css';
import React ,{useState}  from 'react';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';

function App() {
  const [alert,setAlert]=useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1000);
  }
  const[btntext,setbtnText]=useState('Enable Dark Mod')
  const[navmood,setnavMood]=useState({
    color:'black',
    backgroundColor:'whitesmoke'
  })
  const [formmood,setFormMood]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const enableMood =()=>{

   if(navmood.color==='black'){
    setnavMood({
      color:'white',
      backgroundColor:'#042747'
    })
    setFormMood({
      color:'white',
      backgroundColor:'#042736'
    })
    showAlert("Dark Mood On", "Succes")
    setbtnText('Enable Light Mod')
   }
   else{
    setnavMood({
      color:'black',
      backgroundColor:'whitesmoke'
    })
    setFormMood({
      color:'black',
      backgroundColor:'white'
    })
    setbtnText('Enable Dark Mod')
    showAlert("Light Mood On", "Succes")
   }
  }
  return (
    <>
    <Navbar title="Text Utils" navHome="Home" navAbout="About" mood={navmood} enableMood={enableMood} btntext={btntext}/>
    <Alert alert={alert}/>
    <TextForm heading="Enter Text Below To Consize" mood={formmood} showAlert={showAlert}/>
    <Footer footHeading="2024 Dupli Checker. All Right Reserved." mood={navmood}/>
    </>
  );
}
export default App;

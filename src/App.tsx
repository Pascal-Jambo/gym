import { useEffect, useState } from "react";
import NavBar from "./scenes/navbar"
import { SelectedPage } from "./shared/enum";
import Home from "./scenes/home/Home";
import Benefits from "./scenes/benefits/Benefits";
import OurClasses from "./scenes/our-classes/OurClasses";
import ContactUs from "./scenes/contactUs/ContactUs";
import Footer from "./scenes/Footer/Footer";



function App() {
 const [selectedPage,setSelected]=useState<SelectedPage>(SelectedPage.Home)
const [isTopPage,setIsTopPage]=useState<boolean>(true)
useEffect (()=>{
  
  const handleScroll=()=>{
   
    
    if(window.scrollY===0){
      // console.log("yesssss");
      
      setIsTopPage(true);
      setSelected(SelectedPage.Home)
    }else{
      setIsTopPage(false);
      // console.log("nnonoonon");
    }
   
  }
  // console.log("ohhh yes");
  window.addEventListener ("scroll",handleScroll)
 
  return ()=>window.removeEventListener("scroll",handleScroll)
},[])
  return (
  
      <div className='app bg-gray-20'>
       <NavBar
       isTopPage={isTopPage}
       selectedPage={selectedPage}
       setSelected={setSelected}
       />
       <Home  setSelected={setSelected}/>
       <Benefits setSelected={setSelected}/>
       <OurClasses setSelected={setSelected}/>
       <ContactUs setSelected={setSelected}/>
      
       <Footer />
      </div>
    
  
  )
}

export default App


import { createStyles,Theme } from '@material-ui/core';
export const PricingStyle = (theme:Theme) =>
createStyles({
   root:{
      // backgroundColor:"#FCFCFC",
       color:"#2AAFE1",
       position:"relative"
       },
   card:{
       width:"40%",
       height:"80%",
       color:"white",
       backgroundColor:"rgba(255, 0, 0, 0.4)",
    //position:'absolute',left:'30%',top:"70%",transform:'translate(-10%,-90%)'
   },

   div:{
       position:'absolute',left:'10%',top:"80%",transform:'translate(-20%,-80%)'
   },
   image:{
       width:"100%",
       height:"20%"
   },
   h1:{
    position:"absolute",
    top: '10%', left: '30%', 
    marginRight: '-50%', 
    transform: 'translate(-20%, -80%)'
   },
   h2:{
    position:"absolute",
    top: '20%', left: '50%', 
    marginRight: '-50%', 
    transform: 'translate(-50%, -50%)'
    
   }
  
})
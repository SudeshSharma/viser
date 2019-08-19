
import { createStyles,Theme } from '@material-ui/core';
export const BlogStyle = (theme:Theme) =>
createStyles({
   root:{
     '@media screen and (maxWidth: 1024px)':{
       card:{
         width:"40%",
         height:"80%"
       }


     },
     'media screen and (minWidth: 480px)' :{
      card:{
        width:"20%",
        height:"30%"

      }
     }

   },
   h1:{
    color: "#2AAFE1  ", 
    position: 'absolute', 
    top: '40%', left: '10%', 
    marginRight: '-80%', 
    transform: 'translate(-30%, -70%)'

},
card:{
  marginTop:"5%",
  width:"20%",
  height:"80%",
  marginLeft:"10%",
  fontFamily:"Georgia",
  color:"black",
  '&:hover':{
    boxShadow: '-1px 10px 29px 0px #730629',
    transitionDuration: '0.3s',
    transition: 'all .25s linear'
  }
},
media:{
  height:"20%",
  width:"20%"
},

   
    textInput:{
        fontFamily:"Georgia",
        color:"black",
        borderBlockColor:"#ccffff",
        '& label.Mui-focused': {
            color: 'black',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
    },
},
button:{
    backgroundColor:"#2AAFE1  ",
    fontFamily:"Georgia",
    color:"white"

}
})
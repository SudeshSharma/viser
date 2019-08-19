import { createStyles, Theme } from '@material-ui/core'
export const BodyStyle = (theme: Theme) =>

  createStyles({
    
   root:{
    position:'relative',
    justifyItems:'center',
    backgroundColor:"#FCFCFC"
   },
   grid:{
     width:"30%"
   },
    card: {
      marginTop:"5%",
      width:"20%",
      height:"80%",
      marginLeft:"5%",
      fontFamily:"Georgia",
      color:"black",
      '&:hover':{
        boxShadow: '-1px 10px 29px 0px #730629',
        transitionDuration: '0.3s',
        transition: 'all .25s linear'
      }
     
    },
    
      cardHover:{
        width:'20%',height:'80%',backgroundColor:"#F1C40F",fontFamily:"Georgia",color:"black",
        '&:hover':{
          boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
          transitionDuration: '0.3s',
          transition: 'all .25s linear'
        }
      },
      cardHover1:{
        width:'20%',height:'80%',backgroundColor:"red",fontFamily:"Georgia",color:"black",
        '&:hover':{
          boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
          transitionDuration: '0.3s',
          transition: 'all .25s linear'
        }

      },

      cardHover2:{
        width:'20%',height:'80%',backgroundColor:"orange",fontFamily:"Georgia",color:"black",
        '&:hover':{
          boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
          transitionDuration: '0.3s',
          transition: 'all .25s linear'
        }

      },

      cardHover3:{
        width:'20%',height:'80%',backgroundColor:"blue",fontFamily:"Georgia",color:"black",
        '&:hover':{
          boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
          transitionDuration: '0.3s',
          transition: 'all .25s linear'
        }
      }
    
 
  })

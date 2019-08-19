import {createStyles,Theme} from '@material-ui/core'
const divStyle=require('../Images/regiback.jpg')
export const RegiStyle = (theme: Theme) => 
    createStyles({

        root:{
            
            backgroundImage:`url(${divStyle})`,
            backgroundSize: 'cover',
            marginTop:"2%",
            maxHeight:"80%"
        },
        card:{
            backgroundColor:"#5DADE2",
            width:"20%",
            height:"100%",
            marginTop:"20%",
            marginLeft:"20%",
            fontFamily:"Georgia",
            color:"#ccffff"

        },
        textInput:{
            fontFamily:"Georgia",
            color:"#ccffff",
            borderBlockColor:"#ccffff",
            '& label.Mui-focused': {
                color: 'yellow',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'yellow',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'yellow',
                },
        },
    },
    input:{
        color:"#ccffff"
    },
        h1:{
            fontFamily:"Georgia",
            fontSize:"ex",
            color:"#ccffff"

        },
        button:{
            backgroundColor:"#2AAFE1",
            fontFamily:"Georgia",
            color:"#ccffff"

        }

    })
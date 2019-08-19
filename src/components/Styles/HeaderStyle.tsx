import {createStyles,Theme} from '@material-ui/core'
export const HeaderStyle = (theme: Theme) => 
    createStyles({

        root:{
            position:'relative',
            textAlign:'justify',
            backgroundColor:"#FCFCFC"
        },
        h1:{
            color: " white", 
            position: 'absolute', 
            top: '30%', left: '50%', 
            marginRight: '-50%', 
            transform: 'translate(-50%, -50%)'

        },
        h5:{
            color: " white", 
            position: 'absolute', 
            top: '40%', left: '50%', 
            marginRight: '-50%', 
            transform: 'translate(-50%, -50%)'

        },
        button:{
            backgroundColor:'white',
            color:"black"

        }

    })
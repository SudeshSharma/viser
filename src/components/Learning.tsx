import React from 'react'
import { Paper, CardContent, CardMedia, Card } from '@material-ui/core';
import tally2 from './Images/tally2.png'
//import BasicTally from '../assets/Video/BasicTally.mp4'

import {BodyStyle} from './Styles/BodyStyle'
import { withStyles } from '@material-ui/styles';
// const tally1= require("./Images/tally1.png")
// const tally = require("../assets/Video/BasicTally.mp4")

class Learning extends React.Component{
    render(){
        // const {classes}:any = this.props
        return(
        <div style={{marginTop:"2%",backgroundColor:"#FCFCFC"}}>
            <Paper style={{marginTop:"4%",width:"60%",height:"80%",paddingTop:"2%",marginLeft:"20%",marginRight:"20%",backgroundColor:"#FCFCFC"}}> 
                <h1 style={{fontFamily:"Georgia",color:"black"}}> Tally ERP 9</h1>
                <Card>
                    <CardContent style={{fontFamily:"Georgia",color:"black"}}>
                    Tally has been voted winner for the channel/ partner marketing category in the Marketing Excellence in IT Awards 2016 hosted by reputed marketing advisory, Paul Writer. Paul Writer’s Excellence in IT Marketing Award recognizes the best marketing campaigns in the IT sector. Paul Writer announced the winners of the Excellence in IT Marketing at its 4th Annual Great Indian IT Marketing Summit & Awards held on February 4, 2016. The awards were evaluated by an independent jury panel of industry leaders.
                    </CardContent>
                    <CardMedia  component="img" alt="Tally ERP 9" height="80%" image={tally2} title="Tally ERP 9"/>
                    <br/><br/>
                    <CardMedia >
                    {/* <video width="60%" height="40%" controls  poster="./Images/tally1.png" >
                        <source src={tally} type="video/mp4"/>
                    </video> */}
                    </CardMedia>
                   
                   
                </Card>  
                {/* <Card  className={classes.card}>
                    <CardMedia >
                    <video width="60%" height="40%" >
                        <source src={tally} type="video/mp4"/>
                    </video>
                    </CardMedia>
                    </Card> */}

              
                
             </Paper> 
        </div>
        )
    }

}

export default withStyles(BodyStyle)(Learning)
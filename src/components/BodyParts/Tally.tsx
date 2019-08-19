import React from 'react'
import { GridList, CardContent, Card, CardHeader, CardMedia, withStyles } from '@material-ui/core';

import {BodyStyle} from '../Styles/BodyStyle'

import tt from '../Images/tt.jpg'
import tally2 from '../Images/tally2.png'
const Pdf = require('./Tally1.pdf')

class Tally extends React.Component{
    render(){
        const {classes}:any = this.props
        return(
            <div>
                <GridList cols={5} cellHeight={"auto"} style={{justifyContent:"space-around"}}>
                   <br/><br/>
                    <Card className={classes.card}>
                        <CardHeader title="Instructor" subheader="N.K Gupta"  style={{backgroundColor:"#730629",fontFamily:"Georgia",color:"white"}}/>
                        <CardContent>
                            I have working in viser since from one year. Here I am teaching Tally and advanced excel.   
                        </CardContent>
                        <CardMedia component="img" alt="Tally ERP 9" height="auto" image={tt} title="Tally ERP 9"/>
                    </Card>
                    <Card  className={classes.card}>
                        <CardHeader title=" Course Structure" style={{backgroundColor:"#730629",fontFamily:"Georgia",color:"white"}}/>
                        <CardContent>
                        LEARNING TALLY.ERP 9 (VOL I-III)
                        Impart working knowledge of the basics of accounting on Tally.ERP 9.
                        For Course Structure Click Here to <a href={Pdf} target="_blank" rel="noopener noreferrer">Download</a>                         
                        </CardContent><br/><br/>
                        <CardMedia component="img" alt="Tally ERP 9" height="auto" image={tally2} title="Tally ERP 9"/>
                    </Card>
                    <Card  className={classes.card}> 
                        <CardHeader title="Certification"  style={{backgroundColor:"#730629",fontFamily:"Georgia",color:"white"}}/>
                        <CardContent  >
                           Viser offers a wide range of industry 
                           endorsed professional certifications on computerized 
                           accounting and Tally. Tally Certification establishes 
                           a benchmark for the candidate and the employer in terms 
                           of the skill on domain as well as application, ranging 
                           from basic to comprehensive level. This benefits candidates 
                           by, certifying their skill level with a verifiable digital 
                           certificate, and access to Tally Job Portal.                         
                        </CardContent> 
                        {/* <CardMedia component="img" alt="Tally ERP 9" height="20%"image={sample4} title="Tally ERP 9"/> */}
                    </Card>
                    {/* <Card  className={classes.card}>
                        <CardHeader title="Schedule" style={{backgroundColor:"#A3A4A0",fontFamily:"Georgia",color:"white"}}/>

                      
                        <CardContent>
                         
                        </CardContent>
                    </Card> */}
                </GridList>
            </div>
        )
    }

}

export default withStyles(BodyStyle)(Tally)
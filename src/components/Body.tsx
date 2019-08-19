import React from 'react'
import { Card, CardContent, CardHeader, CardMedia, GridList} from '@material-ui/core'

// import room from './Images/room.jpg'
import Tally from './BodyParts/Tally'
import Testimonials from './BodyParts/Testimonials';
import { BodyStyle } from './Styles/BodyStyle'
import { withStyles } from '@material-ui/styles';
//import Travel from './BodyParts/Travel';
import tallyace from './Images/tallyace.jpg'
import tallypro from './Images/tallypro.jpg'
import tallyguru from './Images/tallyguru.jpg'
import btally from './Images/btally.png'

// const videos = require('./Images/videos/classroom.mp4')
class Body extends React.Component {
    render() {
        const { classes }: any = this.props;
        return (
            <div className={classes.root}>
                <GridList cols={4} spacing={5} cellHeight={200} className={classes.grid}>
                <div  style={{position:'absolute',left:'30%',top:'4%',transform:'translate(-10%,-90%)'}}>
               
                <Card className={classes.card}>
                    <CardHeader title="Tally Ace"/>
                     <CardMedia component="img" alt="Tally Ace" height="auto" image={tallyace}/> 
                </Card>
              </div>
                 <div style={{position:'absolute',left:'38%',top:'4%',transform:'translate(-10%,-90%)'}}>
                    <Card  className={classes.card}>
                    <CardHeader title="Tally Pro"/>
                    <CardMedia component="img" alt="Tally Pro" height="auto" image={tallypro}/>
                </Card></div>
                <div style={{position:'absolute',left:'46%',top:'4%',transform:'translate(-10%,-90%)'}}>
                    <Card  className={classes.card}>
                    <CardHeader title="Tally Guru"/>
                    <CardMedia component="img" alt="Tally Guru" height="auto" image={tallyguru}/>
                </Card></div>
                <div style={{position:'absolute',left:'54%',top:'4%',transform:'translate(-10%,-90%)'}}>
                    <Card  className={classes.card}>
                    <CardHeader title="Tally Basic"/>
                    <CardMedia component="img" alt="Basic of Tally" height="auto" image={btally}/>
                </Card> </div>  </GridList>
               <br /><br /><br /><br /> <br /><br /><br /><br /> 
                <Tally />
                <br /><br /><br /><br />
                <div>
                    <GridList cols={4} cellHeight="auto" spacing={5} style={{ justifyContent: "space-around" }}>
                        <Card className={classes.card}>
                            <CardHeader title="Why Viser ?" style={{backgroundColor:"#730629",fontFamily:"Georgia",color:"white"}}/>
                            {/* style={{width:"20%",height:"40%",marginLeft:"25%",fontFamily:"Georgia",color:"#F4D03F",backgroundColor:"#FCFCFC"}} */}
                                <CardContent><br/><br/>
                                    Welcome to Viser Tally Training Centre. We Provide Excellet Training Here.
                                    Our Tally Instructor Provide best way to learn tally in any easy way.
                                    Viser offers a wide range of industry endorsed professional certifications on computerized 
                                    accounting and Tally. Tally Certification establishes a benchmark for the candidate and the employer in terms 
                                    of the skill on domain as well as application, ranging from basic to comprehensive level. This benefits candidates 
                                    by, certifying their skill level with a verifiable digital certificate, and access to Tally Job Portal.
                                </CardContent>
                        </Card>
                        <Card className={classes.card}>
                            <CardHeader title="ClassRoom" style={{backgroundColor:"#730629",fontFamily:"Georgia",color:"white"}}/>
                            {/* <CardMedia component="img" alt="classroom gallary" height="80%" image={room}>

                            </CardMedia> */}
                            <CardMedia>
                                 {/* <video width="100%" height="60%" controls style={{marginTop:"2%"}}>
                                    <source src={videos} type="video/mp4"/>
                                </video>  */}
                            </CardMedia>
                        </Card>
                        <br /><br />
                    </GridList>
                </div><br /><br />

                {/* Contact us part 
            //     <div>
            //         <GridList cols={1} spacing={11} style={{justifyContent:"space-around"}} >
            //     <form >
            //         <Card  style={{backgroundColor:"transparent"}}>
            //             <CardHeader title="Reach Us"/>
            //             <CardContent>
            //                 <TextField type="text" variant="outlined" label="First Name" style={{marginLeft:"10%"}}/>
            //                 <TextField type="text" variant="outlined" label="Last Name" style={{marginLeft:"5%"}}/>
            //                 <TextField type="text" variant="outlined" label="Email" style={{marginLeft:"5%"}}/>
            //                 <TextField type="text" variant="outlined" label="Mobile Number" style={{marginLeft:"5%"}}/>
            //                 <Button type="submit" variant="contained" color="secondary" size="large"  style={{marginLeft:"5%"}}>Contact Us</Button>
            //             </CardContent>
            //         </Card>
            // <br/><br/>
            //     </form>
            //     </GridList>
            //     </div>*/}



                <div>
                    <Testimonials />
                </div>
                {/*
                <div>
                    <Travel/>
                </div>
                 */}

            </div>
        )
    }

}

export default withStyles(BodyStyle)(Body)
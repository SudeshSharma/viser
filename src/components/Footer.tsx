import React from 'react'
import { Card, CardHeader, CardContent, GridList, Icon } from '@material-ui/core';
import { MobileFriendly, Phone, Copyright } from '@material-ui/icons'
import linkedin from './Images/icons/linkedin.png';
import whatsapp from './Images/icons/whatsapp.png';
import facebook from './Images/icons/facebook.png';
import instagram from './Images/icons/instagram.png';
import twitter from './Images/icons/twitter.png'
//import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom'
// import Home from './Home'
// import Blog from './Blog'

//const divStyle = require('./Images/footerimg.jpg')

class Footer extends React.Component{
    render(){
        return(
            <div style={{backgroundSize: 'cover',fontFamily:"Times New Roman",fontSize:"em",color:"white",backgroundColor:"black"}}> 
                    <GridList cols={4} style={{justifyContent:"space-around"}}>
                    
                    
                        <Card style={{width:"20%",height:"20%",backgroundColor:"transparent",color:"white"}}>
                            <CardHeader title="Address"/>
                            <CardContent>
                                Viser Pvt. Ltd.
                                Shop No 44/45, Shree Manoshi Complex CHS
                                Plot No 5 & 6,Scetor-3,
                                Ghansoli,Navi Mumbai-400701

                            </CardContent>
                            
                        </Card>
                    
                        <Card style={{width:"20%",height:"20%",backgroundColor:"transparent",color:"white"}}>
                            <CardHeader title="Contact with us"/>
                            <CardContent>
                                <MobileFriendly/>+91-9004723127<br/>
                                <Phone/>022-27541511<br></br>
                                <Icon><img src={whatsapp} alt="Whatsapp" width="8%"/>+91-9004723127</Icon>

                            </CardContent>
                        </Card>

                        <Card style={{width:"20%",height:"20%",backgroundColor:"transparent",color:"white"}}>
                            <CardHeader title="Quick Links"/>
                            <CardContent>
                                Home<br/>
                                Pricing<br/>
                                Certificate<br/>
                                Blog<br/>
                            </CardContent>
                            {/* <Route path="/" component={Home}/>
                            <Route path="/Blog" component={Blog}/> */}

                            
                        </Card>

                        <Card style={{width:"20%",height:"20%",backgroundColor:"transparent",color:"white"}}>
                            <CardHeader title="Follow Us For Latest Update"/>
                            <CardContent>
                                <a href="https://www.linkedin.com/"><Icon style={{marginRight:"2%"}}><img src={linkedin} alt="LinkedIn" width="10%"/></Icon></a>
                                <a href="https://www.instagram.com/"><Icon style={{marginRight:"2%"}}><img src={instagram} alt="Instagram" width="10%"/></Icon></a>
                                <a href="https://www.facebook.com/"><Icon style={{marginRight:"2%"}}><img src={facebook} alt="Facebook" width="10%"/></Icon></a>
                                <a href="https://www.twitter.com/"><Icon style={{marginRight:"2%"}}><img src={twitter} alt="Twitter"  width="10%"/></Icon></a>
                            </CardContent>
                        </Card>
                        </GridList>

                        <h4>Copyright <Icon><Copyright/></Icon> 2019 Viser Private Limited<br/>
                        This Site Use Cookies. Check Cookie Policy for details.</h4>

                    
                   

                
            </div>
        )
    }

}

export default Footer
import React from 'react'
import { GridList, Card, CardHeader, CardActions , CardMedia, TextField, Button} from '@material-ui/core';
import {BlogStyle} from './Styles/BlogStyle'

//blog realted images

import vat from './Images/vat.jpeg'
import GST1 from './Images/GST1.jpg'
import GST2 from './Images/GST2.jpg'
import GST3 from './Images/GST3.jpg'
import regi from './Images/regi.jpeg'
import ebill from './Images/ebill.jpeg'
import tally18 from './Images/tally18.jpg'
import tally65 from './Images/tally65.jpg'
import UTGST from './Images/UTGST.jpg'


import { withStyles } from '@material-ui/styles';



const blogBG = require('./Images/blog3.jpg')
class Blog extends React.Component{
    render(){ 
        const { classes }:any = this.props
        return(
            <div className={classes.root} style={{marginTop:"2%"}}>

                <img src={blogBG} alt="Tally Blog" width="100%"/>
                <h1 className={classes.h1}>Our Blog<br/>
                Connect,Educate,Learn,Collaborate</h1>
                 <GridList cols={4} spacing={5} cellHeight="auto">
                    <Card className={classes.card}>
                        <CardHeader title="Government uses GST alerts for better compliance"/>
                        {/* <CardContent>
                         <h3>HIGHLIGHTS</h3>
                          The GST authorities also raise an alarm
                          in case the input tx credit(ITC) does not 
                          match with the claims made in GSTR 2A return
                          form and GSTR 3B filing. 
                        </CardContent> */}
                          <CardActions>
                         <Button href="https://timesofindia.indiatimes.com/business/india-business/govt-uses-gst-alerts-for-better-compliance/articleshow/69997338.cms" className={classes.button} >Read More </Button>
                          </CardActions>
                          <CardMedia component="img" alt="Tally ERP 9" height="auto" image={GST1} title="Tally ERP 9"/>
                    </Card>

                    <Card className={classes.card}>
                        <CardHeader title="A GST reforms agenda" subheader="A set of micro and macro proposals to enable stakeholders to breathe easy"/>
                        {/* <CardContent>
                            <h3>A set of micro and macro proposals to enable stakeholders to breathe easy</h3>
                            GST, two years after its inception, has proved to be a 
                            roller-coaster ride for all stakeholders. The GST 
                            regime has been marked by continuous change. 
                            What are the critical tasks ahead?Ideally, GST rates 
                            should have been stable, GST policy should have had 
                            a clear roadmap and technology should have been flexible.
                            
                        </CardContent> */}
                        <CardActions>
                            <Button href="https://www.thehindubusinessline.com/opinion/gst-reforms-agenda/article28158215.ece" className={classes.button}>Read More</Button>
                        </CardActions>
                         <CardMedia component="img" alt="Tally ERP 9" height="auto"  image={GST2} title="Tally ERP 9"/> 
                        {/* <CardMedia>
                        <img src={GST2} alt="GST News"  className={classes.media}/></CardMedia> */}
                        
                    </Card>
{/* Tally blogs */}
                    <Card className={classes.card}>
                        <CardHeader title="Tally Eway Bill under GST"/>
                        {/* <CardContent>
                            <h3>Waybill under Earlier VAT system</h3>
                            In order to monitor bulk trade, 
                            – which necessarily takes place through 
                            trucks – it was mandated under VAT that 
                            each such consignment shall be accompanied 
                            by a ‘Delivery Note’ which were issued from 
                            the VAT offices to the taxpayers.
                        </CardContent> */}
                        <CardActions>
                            <Button href="https://www.tallyanswers.com/tally-eway-bill-under-gst/" className={classes.button}>Read More</Button>
                        </CardActions>
                        <CardMedia component="img" alt="Tally ERP 9"height="auto"  image={vat} title="Tally ERP 9"/>
                        
                    </Card>
                    <Card className={classes.card}>
                        <CardHeader title="Tally unveils e-Way Bill compliance solution"/>
                        {/* <CardContent>
                        E-Way Bill, an electronic way bill for 
                        movement of goods which can be generated 
                        on the e-Way Bill Portal, is  an accompaniment 
                        of the Goods and Services Tax (GST). 
                        </CardContent> */}
                        <CardActions>
                            <Button href="https://www.deccanherald.com/content/661981/tally-unveils-e-way-bill.html" className={classes.button}>Read More</Button>
                        </CardActions>
                        <CardMedia component="img" alt="Tally ERP 9" height="auto"  image={ebill} title="Tally ERP 9"/>
                        
                    </Card>
                    
                    <Card className={classes.card}>
                        <CardHeader title="ERP 9 For BlackBerry Now Available For Tally.ERP 9 Users"/>
                        {/* <CardContent>
                        ERP 9 for BlackBerry, the latest application 
                        for the Tally software series is now available 
                        on the BlackBerry World storefront giving existing 
                        Tally.ERP 9 customers enhanced business capabilities 
                        on their BlackBerry smartphones.
                        </CardContent> */}
                        <CardActions>
                            <Button href="https://www.firstpost.com/business/biztech/erp-9-for-blackberry-now-available-for-tally-erp-9-users-1895031.html" className={classes.button}>Read More</Button>
                        </CardActions>
                        <CardMedia component="img" alt="Tally ERP 9" height="auto"  image={regi} title="Tally ERP 9"/>
                        
                    </Card>

                    <Card className={classes.card}>
                        <CardHeader title="New version of Tally Accounting Software Launched : What to expect from Tally" />
                        {/* <CardContent>
                        Tally Solutions is about to launch 
                        their new products in India. With 
                        aim to empower SME and take benefits 
                        of Digital India, Tally is working on 
                        their new range of products.
                        </CardContent> */}
                        <CardActions>
                            <Button href="https://www.techmouse.in/tally-18.html" className={classes.button}>Read More</Button>
                        </CardActions>
                        <CardMedia component="img" alt="Tally 18" height="auto"  image={tally18} title="Tally 18"/>

                    </Card>

                    <Card className={classes.card}>
                        <CardHeader title="Tally launches updated .ERP9 Release 6.1.1"/>
                        {/* <CardContent>
                        In the wake of the changes proposed 
                        by the Goods and Services Tax (GST) 
                        Council in their meeting on October 6, 
                        Tally Solutions, a business software provider 
                        launched the updated Tally.ERP9 Release 6.1.1, 
                        the latest in its suite of GST ready releases, 
                        making it easier for GSTPs and businesses to file returns for GSTR1.
                        </CardContent> */}
                        <CardActions>
                            <Button href="https://www.business-standard.com/article/news-ani/tally-launches-updated-erp9-release-6-1-1-117101001066_1.html"  className={classes.button}>Read More</Button>
                        </CardActions>
                        <CardMedia component="img" alt="Tally 18" height="auto"  image={tally65} title="Tally ERP 9 Release 6.1.1"/>


                    </Card>

                    <Card className={classes.card} >
                        <CardHeader title="Mamata government to give rebates on cinema tickets in GST regime"/>
                        {/* <CardContent>
                        The West Bengal government on Wednesday 
                        decided to give rebates on regional cinema 
                        tickets in the upcoming Goods and Services Tax (GST) 
                        regime so that the effective tax rate will remain at 
                        par with the existing two per cent entertainment tax, 
                        a senior minister said on Wednesday.
                        </CardContent> */}
                        <CardActions>
                            <Button href="https://www.business-standard.com/article/news-ians/mamata-government-to-give-rebates-on-cinema-tickets-in-gst-regime-117062801420_1.html" className={classes.button}>Read More</Button>
                        </CardActions>
                        <CardMedia component="img" alt="Cinema" height="auto"  image={GST3} title="GST Cinema"/>
                    </Card>

                    <Card className={classes.card}>
                        <CardHeader title="GST Bill to be tabled in LS tomorrow"/>
                        {/* <CardContent>
                        The Goods and Services Tax (GST) Council, in its 12th meeting, 
                        has approved the State and Union Territory GST, thus paving way 
                        for tabling of the GST Bills in the current session of Parliament.
                        The clearance comes as an indicator to industry players to begin 
                        the documentation process in order to avoid a time crunch closer 
                        to the implementation date of July 1, 2017.
                        </CardContent> */}
                        <CardActions>
                            <Button href="https://www.business-standard.com/article/news-ani/gst-bill-to-be-tabled-in-ls-tomorrow-117032300707_1.html" className={classes.button}>Read More</Button>
                        </CardActions>
                        <CardMedia component="img" alt="UT GST" height="auto"  image={UTGST} title="UT GST"/>
                        
                    </Card>

                    
                 </GridList> 
                <br/><br/>

                {/* <h1 style={{fontFamily:"Georgia",color:"black"}}> For Latest News  about GST and Tally Follow Us on Social Media</h1><br/><br/>
                <Card style={{width:"20%",height:"20%",backgroundColor:"transparent",color:"white",marginLeft:"40%"}}>
                            <CardHeader title="Follow Us For Latest Update" style={{color:"black"}}/><br/><br/>
                            <CardContent>
                                <a href="https://www.linkedin.com/"><Icon style={{marginRight:"2%"}}><img src={linkedin} alt="LinkedIn" width="10%"/></Icon></a>
                                <a href="https://www.instagram.com/"><Icon style={{marginRight:"2%"}}><img src={instagram} alt="Instagram" width="10%"/></Icon></a>
                                <a href="https://www.facebook.com/"><Icon style={{marginRight:"2%"}}><img src={facebook} alt="Facebook" width="10%"/></Icon></a>
                                <a href="https://www.twitter.com/"><Icon style={{marginRight:"2%"}}><img src={twitter} alt="Twitter"  width="10%"/></Icon></a>
                            </CardContent>
                </Card><br/><br/><br/> */}
                <h1 style={{fontFamily:"Georgia",color:"black"}}> For More Updates About Tally Classes Information</h1>
                <form>
                    <TextField type="text" label="Email" variant="outlined" inputProps={{className:classes.textInput}} className={classes.textInput}/><Button type="submit" className={classes.button} variant="contained" style={{marginLeft:"4%"}}>Subscribe</Button>
                 <br/><br/><br/>
                </form>
            </div>
        )
    }

}

export default withStyles(BlogStyle)(Blog)
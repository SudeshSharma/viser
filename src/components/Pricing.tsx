import React from 'react'
import { withStyles } from '@material-ui/styles';
import { PricingStyle } from './Styles/PricingStyle';
import { Card, CardHeader, GridList, CardContent, Icon } from '@material-ui/core';

const image=require('./Images/pricing.jpg')
const rupee= require('./Images/icons/INR.png')

class Pricing extends React.Component{
    render(){
        const {classes}:any =this.props
        return(
            <div>
        <div className={classes.root} >
          <img src={image} className={classes.image} alt="pricing background"/> 
            <h1 className={classes.h1}>Select the course that fits your needs and help you to make your future better.</h1><br/>
            <h2 className={classes.h2}>Learn the most critical skills that corporate finance departments and accounting firms needed with our Tally training.<br/>
            Enroll Now For Your Better Future</h2>
            <GridList cols={5} spacing={6} cellHeight="auto">
            <div className={classes.div} style={{left:'20%'}}>
            <Card className={classes.card} >
                <CardHeader title="Tally Ace"/>
                <CardContent>
                    <h2>Fee Structure of Tally Ace</h2>
                    <Icon><img src={rupee} alt="Indian Rupee"/></Icon>
                    <h2>4500 Full course</h2>
                </CardContent>
            </Card>
            </div>
            <div className={classes.div} style={{left:'40%'}}>
            <Card className={classes.card} >
                <CardHeader title="Tally Ace"/>
                <CardContent>
                    <h2>Fee Structure of Tally Pro</h2>
                    <Icon><img src={rupee} alt="Indian Rupee"/></Icon>
                    <h2>7500 Full course</h2>
                </CardContent>
            </Card></div>
            <div className={classes.div} style={{left:'60%'}}>
            <Card className={classes.card} >
                <CardHeader title="Tally Ace"/>
                <CardContent>
                    <h2>Fee Structure of Tally Guru</h2>
                    <Icon><img src={rupee} alt="Indian Rupee"/></Icon>
                    <h2>10000 Full course</h2>
                </CardContent>
            </Card></div>
            <div className={classes.div} style={{left:'80%'}}>
            <Card className={classes.card} >
                <CardHeader title="Tally Ace"/>
                <CardContent>
                    <h2>Fee Structure of Tally Basic</h2>
                    <Icon><img src={rupee} alt="Indian Rupee"/></Icon>
                    <h2>3000 Full course</h2>
                </CardContent>
            </Card>
            </div>
            </GridList>
        </div>
        </div>
        )
    }

}

export default withStyles(PricingStyle)(Pricing)
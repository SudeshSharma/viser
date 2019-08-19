import React from 'react'
import { GridList,Card, CardContent, CardHeader, Avatar,  Icon, withStyles } from '@material-ui/core';
import {BodyStyle} from '../Styles/BodyStyle'

import auth1 from '../Images/auth1.jpeg'
import { Grade } from '@material-ui/icons';
import above from '../Images/icons/above.png'
import below from '../Images/icons/below.png'


class Testimonials extends React.Component{
    render(){
        const {classes}:any = this.props
        return(
            <div style={{fontFamily:"Georgia",color:"black",backgroundColor:"#FCFCFC"}}>
                
                <Card style={{backgroundColor:"#FCFCFC"}}>
                <h1 style={{color:"f1c40f"}}><Icon> <h1> <img src={below} alt="above"/> Testimonials <img src={above} alt="below"/></h1>  </Icon></h1>
                <h3 style={{fontFamily:"Georgia"}}>People Say Nicest Things</h3>
                <GridList cols={5} spacing={11} cellHeight="auto" style={{justifyContent:"space-around",backgroundColor:"#FCFCFC"}}>
                {/* <label>Students Testimonials</label> */}<br/><br/>
                <Card className={classes.card}>
                   
                {/* style={{width:"20%",height:"40%",marginLeft:"5%",fontFamily:"Georgia",color:"black",backgroundColor:"#FCFCFC"}}       */}
                    <CardContent>
                        <Icon style={{paddingLeft:"10%"}}><img src={above} alt="above"/></Icon><br/>
                   "The training was very good.
                    N.K.Gupta Sir explained every topic in 
                    detail with good examples,also discussed 
                    about realtime scenarios.N.K.Gupta sir
                    answered any questions that would come up.
                    Overall very good experience,would definitely recommend to friends. "
                    </CardContent>
                    <Icon><Grade color="primary"/><Grade color="primary"/><Grade color="primary"/><Grade color="primary"/></Icon><br/><br/>
                    <CardHeader title="Sudesh Sharma" subheader="Sr Accountant" avatar={
                        <Avatar src={auth1} style={{margin:10,width:60,height:60,justifyContent:"center"}} />
                    }   style={{backgroundColor:"#730629",fontFamily:"Georgia",color:"white"}} />
                </Card>
                <Card className={classes.card}>
               
                <CardHeader title="Pooja Sharma" subheader="Accounts Executive" avatar={
                        <Avatar src={auth1} style={{margin:10,width:60,height:60}}></Avatar>
                    } style={{backgroundColor:"#730629",fontFamily:"Georgia",color:"white"}}/>
         
                <CardContent>
                
                " Really a very good course and a highly enjoyable week. 
               Trainers were excellent, combining theory and examples 
               from the field and extracting the valid points from the
               different contributions from the group.
               huge breadth of knowledge and the ability to tie the 
               different ends together and draw general lessons. " 
               </CardContent>
               <Icon style={{paddingLeft:"10%"}}><img src={below} alt="above"/></Icon><br/>
               <Icon><Grade color="primary"/><Grade color="primary"/><Grade color="primary"/><Grade color="primary"/></Icon>

           </Card><br/>
        
           <Card className={classes.card}>
               
           
         
               <CardContent>
               <Icon style={{paddingLeft:"10%"}}><img src={above} alt="above"/></Icon><br/>
                " From Google Search Engine i found this institute for Tally... 
               Trainer teaches all the topics to understand every student...
               who don't know about basics... like Accounts, Audits, Payroll and Taxs etc.... 
               and the Computer LAB is also good. I Really like that the Faculty focus on every student... 
               clarrify her doubts with patience. I can say this is best institute for Accounting Courses. 
               Thanks to Viser. "
               </CardContent>
               <Icon><Grade color="primary"/><Grade color="primary"/><Grade color="primary"/><Grade color="primary"/></Icon>
               <CardHeader title="Pooja sharma" subheader="Accounts Officer" avatar={
                        <Avatar src={auth1} style={{margin:10,width:60,height:60}}></Avatar>
                    } style={{backgroundColor:"#730629",fontFamily:"Georgia",color:"white"}}/>

           </Card>
          
                </GridList><br/><br/><br/><br/><br/><br/>
                </Card>
                
            </div>
        )
    }

}

export default withStyles(BodyStyle)(Testimonials)






 {/* <Card className={classes.card}>
               
                <CardHeader title="Pooja Sharma" subheader="Accounts Executive" avatar={
                        <Avatar src={auth1} style={{margin:10,width:60,height:60}}></Avatar>
                    } style={{backgroundColor:"#A3A4A0",fontFamily:"Georgia",color:"black"}}/>
         
                <CardContent>
                
                " Excellent Faculty, Very Cooperative and interactive, 
                got to learn new things. " 
               </CardContent>
               <Icon style={{paddingLeft:"10%"}}><img src={below} alt="above"/></Icon><br/>
               <Icon><Grade color="primary"/><Grade color="primary"/><Grade color="primary"/><Grade color="primary"/></Icon>

           </Card><br/> */}
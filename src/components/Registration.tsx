import React from 'react'
import {Card, GridList, CardContent, CardMedia, CardHeader, TextField, Button, InputAdornment, Icon} from '@material-ui/core'
import Tallyerp from './Images/Tallyerp.png'
import {RegiStyle} from './Styles/RegiStyle'
import { withStyles } from '@material-ui/styles';
import {People, EmailOutlined, PhoneAndroidOutlined} from '@material-ui/icons'
import call from './Images/icons/call.png'
//import tallyregi2 from './Images/tallyregi2.png'
import erp_image from './Images/erp_image.png'
import axios from 'axios'

//import {Map,GoogleApiWrapper} from 'google-maps-react'

const divStyle=require('./Images/regiback.jpg');

interface IState{
    fname:string,
    lname:string,
    email:string,
    number:string,
}

class Registration extends React.Component<any,IState>{
    constructor(props:any){
        super(props)
        this.state={
            fname:'',
            lname:'',
            email:'',
            number:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e:any){
        e.preventDefault();
        const data = {
            // id:this.state.id,
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            number:this.state.number
        }
      console.log("data",data)
    //     this.props.addData(data);
    const url ='http://localhost:3000/post/student'
        const form = axios.post(url,data)
        .then(function (resonse:any){
            console.log(resonse.data)
        })
        .catch(function(err:any){
            console.log(err)
        })
       // console.log("data",form)
    }
    render(){
        const { classes }:any = this.props
        return(
            <div style={{backgroundImage:`url(${divStyle})`,backgroundSize: 'cover',marginTop:"2%"}} >
               <img src={erp_image} alt="Tally"  height="80%" style={{paddingTop:"2%"}}/>
               <GridList cols={3} >
                   <Card style={{backgroundColor:"#5DADE2",width:"20%",height:"100%",marginTop:"5%",marginLeft:"20%",fontFamily:"Georgia",color:"#ccffff"}}>
                       <CardContent>
                           <h1 className={classes.h1}>Register to enroll your Tally ERP9 Course</h1>
                       </CardContent>
                       <CardMedia component="img" alt="Tally ERP 9" height="80%" image={Tallyerp} title="Tally ERP 9"/>
                   </Card >
                   <Card style={{backgroundColor:"#5DADE2",width:"20%",height:"100%",marginTop:"5%",marginLeft:"20%",fontFamily:"Georgia",color:"#ccffff"}}>
                       <CardHeader title="Register and join our institute" />
                       <CardContent>
                            <form onSubmit={this.handleSubmit}>
                               <TextField variant="outlined" label=" First Name"  value={this.state.fname} onChange={ (e:any) => this.setState({fname:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><People/></InputAdornment>)}} className={classes.textInput}/><br/><br/>
                               <TextField variant="outlined" label=" Last Name" value={this.state.lname} onChange={ (e:any) => this.setState({lname:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><People/></InputAdornment>)}}className={classes.textInput} /><br/><br/>
                               <TextField variant="outlined" label=" Email" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><EmailOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.email} onChange={ (e:any) => this.setState({email:e.target.value})}/><br/><br/>
                               <TextField variant="outlined" label=" Mobile Number" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><PhoneAndroidOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.number} onChange={ (e:any) => this.setState({number:e.target.value})}/><br/><br/>
                               <Button type="submit" variant="contained" className={classes.button}>Register</Button>
                            </form>
                       </CardContent>
                     
                   </Card><br/><br/><br/>

                <h1 style={{fontFamily:"Georgia",color:"#5DADE2",textAlign:"center",marginLeft:"30%"}}>For more information Contact Us.<br/>
                tallytechsupport@viser.in<br/>
                <Icon><img src={call} alt="Landline Number" style={{color:"#5DADE2"}}/>022-27541511</Icon>
                </h1>


               </GridList>
            
               {/* <GridList cols={2}>
                   <Map google={this.props.google}
                        zoom={8}
                        style={mapStyle}
                        initialCenter={{lat:"47.444",lng:"-122.176"}}
                    />
               </GridList> */}
            </div>
        )
    }

}



export default withStyles(RegiStyle)(Registration)
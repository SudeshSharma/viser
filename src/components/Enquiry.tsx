 import React from 'react'
 import {Card, GridList, CardContent, CardHeader, TextField, Button, InputAdornment, Grid} from '@material-ui/core'

 import {RegiStyle} from './Styles/RegiStyle'
 import { withStyles } from '@material-ui/styles';
 import {People, EmailOutlined, PhoneAndroidOutlined, LocationCity, Person, Cake, School, PinDrop, Home, Work, CommentRounded, WcOutlined} from '@material-ui/icons'
 

 import tallylogo from './Images/tallylogo.png'
 import axios from 'axios'


 const divStyle=require('./Images/regiback.jpg');



 interface IState{
     name:string,
     fathername:string,
     number:string,
     gender:string,
     dob:string,
     qualification:string,
     address:string,
     city:string,
     pincode:string,
     email:string,
     maritalstatus:string,
     occupation:string,
     course:string,
     comment:string,
     formtype:string
 }


 class Enquiry extends React.Component<any,IState>{
     constructor(props:any){
         super(props)
         this.state={
             name:'',
             fathername:'',
             number:'',
             gender:'',
             dob:'',
             qualification:'',
             address:'',
             city:'',
             pincode:'',
             email:'',
             maritalstatus:'',
             occupation:'',
             course:'',
             comment:'',
             formtype:''
         }
         this.handleSubmit=this.handleSubmit.bind(this)
     }
     handleSubmit(e:any){
         e.preventDefault();
         const data = {
             // id:this.state.id,
             name:this.state.name,
             fathername:this.state.fathername,
             number:this.state.number,
             gender:this.state.gender,
             dob:this.state.dob,
             qualification:this.state.qualification,
             address:this.state.address,
             city:this.state.city,
             pincode:this.state.pincode,
             email:this.state.email,
             maritalstatus:this.state.maritalstatus,
             occupation:this.state.occupation,
             course:this.state.course,
             comment:this.state.comment,
             formtype:'Enquiry'
         }
       console.log("data",data)
     //     this.props.addData(data);
     const url ='http://192.168.0.46:3000/node/express/post/student'
         const form = axios.post(url,data)
         .then(function (resonse:any){
            alert("Registration is done successfully.")
             console.log(resonse.data)
         })
         .catch(function(err:any){
             alert("Error Occur")
             console.log(err)
         })
         console.log("data",form)
     }
     render(){
         const { classes }:any = this.props
      
//          const [gender,setGender] = React.useState('')

//    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//      setGender(event.target.value);
//    };
         return(
              <div style={{backgroundImage:`url(${divStyle})`,backgroundSize: 'cover',marginTop:"2%"}} >
             
     <img src={tallylogo} alt="Tally" width="20%" height="10%" style={{paddingTop:"2%"}}/> 

                {/* <GridList cols={4} > */}
                <Grid container spacing={9}>
                    <Card style={{backgroundColor:"#5DADE2",width:"80%",height:"100%",marginTop:"5%",marginLeft:"10%",fontFamily:"Georgia",color:"#ccffff"}}>
                        <h1>Viser Technosys Pvt. Ltd. </h1>
                        <CardHeader title="Enquiry Form" />
                        <CardContent>
                            
                             <form onSubmit={this.handleSubmit}>
                               <Grid item md={12}>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Name"  value={this.state.name} onChange={ (e:any) => this.setState({name:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Person/></InputAdornment>)}} className={classes.textInput}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Father Name" value={this.state.fathername} onChange={ (e:any) => this.setState({fathername:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Person/></InputAdornment>)}}className={classes.textInput} />
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Mobile Number" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><PhoneAndroidOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.number} onChange={ (e:any) => this.setState({number:e.target.value})}/><br/><br/>
                                </Grid>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Gender" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><WcOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.gender} onChange={ (e:any) => this.setState({gender:e.target.value})}/>

                                 {/* <TextField id="standard-select-gender" select label="Gender"  value={gender} onChange={handleChange} className={classes.textInput} SelectProps={{MenuProps:{className:classes.menu}}}>
                                    {genders.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                     </MenuItem>
                                    ))}
                                </TextField>   */}
 
                               
                               
                                <TextField style={{ marginLeft:"10%"}} id="Date" variant="outlined" type="date" label="Date Of Birth" value={this.state.dob} onChange={ (e:any) => this.setState({dob:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Cake/></InputAdornment>)}}className={classes.textInput} InputLabelProps={{shrink:true}} />
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Qualification" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><School/></InputAdornment>)}}className={classes.textInput} value={this.state.qualification} onChange={ (e:any) => this.setState({qualification:e.target.value})}/><br/><br/>
                             
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Address" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Home/></InputAdornment>)}}className={classes.textInput} value={this.state.address} onChange={ (e:any) => this.setState({address:e.target.value})}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="City"  value={this.state.city} onChange={ (e:any) => this.setState({city:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><LocationCity/></InputAdornment>)}} className={classes.textInput}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Pincode" value={this.state.pincode} onChange={ (e:any) => this.setState({pincode:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><PinDrop/></InputAdornment>)}}className={classes.textInput} /><br/><br/>
                               
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Email" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><EmailOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.email} onChange={ (e:any) => this.setState({email:e.target.value})}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Marital Status" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><PhoneAndroidOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.maritalstatus} onChange={ (e:any) => this.setState({maritalstatus:e.target.value})}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Occupation"  value={this.state.occupation} onChange={ (e:any) => this.setState({occupation:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Work/></InputAdornment>)}} className={classes.textInput}/><br/><br/>
                               
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Course" value={this.state.course} onChange={ (e:any) => this.setState({course:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><People/></InputAdornment>)}}className={classes.textInput} />
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Comment" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><CommentRounded/></InputAdornment>)}}className={classes.textInput} value={this.state.comment} onChange={ (e:any) => this.setState({comment:e.target.value})}/><br/><br/>
                                <br/><br/>

                                <Button type="submit" variant="contained" className={classes.button}>Register</Button>
                             </form>
                        </CardContent>
                     
                    </Card><br/><br/><br/>

                 <h3 style={{fontFamily:"Georgia",color:"#ccffff",textAlign:"center",marginLeft:"30%"}}>
                     {/* For more information Contact Us.<br/>
                 tallytechsupport@viser.in<br/> */}
                 {/* <Icon><img src={call} alt="Landline Number" style={{color:"#5DADE2"}}/>022-27541511</Icon> */}
                 
                 </h3>

                 </Grid>
                {/* </GridList> */}
            
              
             </div>
         )
     }

 }



 export default withStyles(RegiStyle)(Enquiry)
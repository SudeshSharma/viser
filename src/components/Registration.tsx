 import React from 'react'
 import {Card, GridList, CardContent, CardHeader, TextField, Button, InputAdornment, Typography, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'
 import {RegiStyle} from './Styles/RegiStyle'
 import { withStyles } from '@material-ui/styles';
 import { EmailOutlined, PhoneAndroidOutlined, LocationCity, Person, Cake, PinDrop, Home, Work, WcOutlined} from '@material-ui/icons'
 import tallylogo from './Images/tallylogo.png'
 import axios from 'axios'

 const divStyle=require('./Images/regiback.jpg');

 interface IState{
     name:string,
     fathername:string,
     number:string,
     gender:string,
     dob:string,
     fatherOccupation:string,
     address:string,
     city:string,
     pincode:string,
     email:string,
     maritalstatus:string,
     occupation:string,
     course:string,
     comment:string,
     hsc:string,
     degree:string,
     pgdegree:string,
     tenthMarks:string,
     hscMarks:string,
     graduationMarks:string,
     postGraduationMarks:string,
     formtype:string
 }
  

 class Registration extends React.Component<any,any>{
     constructor(props:any){
         super(props)
         this.state={
             name:'',
             fathername:'',
             number:'',
             gender:'',
             dob:'',
             fatherOccupation:'',
             address:'',
             city:'',
             pincode:'',
             email:'',
             maritalstatus:'',
             occupation:'',
             course:'',
             comment:'',
             hsc:'',
             degree:'',
             pgdegree:'',
             tenthMarks:'',
             hscMarks:'',
             graduationMarks:'',
             postGraduationMarks:'',
             formtype:'Register',
            
         }
         this.handleSubmit=this.handleSubmit.bind(this);
         
     }
   
     handleSubmit(e:any){
         e.preventDefault();
         const data = {
//             // id:this.state.id,
             name:this.state.name,
             fathername:this.state.fathername,
             number:this.state.number,
             dob:this.state.dob,
             gender:this.state.gender,
             occupation:this.state.occupation,
            //  fatherOccupation:this.state.fatherOccupation,

             address:this.state.address,
             city:this.state.city,
             pincode:this.state.pincode,
             email:this.state.email,
            //  maritalstatus:this.state.maritalstatus,
            
             course:this.state.course,
            //  comment:this.state.comment,
             hsc:this.state.hsc,
             degree:this.state.degree,
             pgdegree:this.state.pgdegree,
             tenthMarks:this.state.tenthMarks,
             hscMarks:this.state.hscMarks,
             graduationMarks:this.state.graduationMarks,
             postGraduationMarks:this.state.postgraduationMarks,
             formtype:'Register'
         }
       console.log("data",data)
//     //     this.props.addData(data);
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

            
                
                    <Card style={{backgroundColor:"#5DADE2",width:"80%",height:"100%",marginTop:"5%",marginLeft:"10%",fontFamily:"Georgia",color:"#ccffff"}}>
                        <h1>Viser Technosys Pvt. Ltd. </h1>
                        <CardHeader title="Registration Form" />
                        <CardContent>
                             <form onSubmit={this.handleSubmit}>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Name of the Candidate"  value={this.state.name} onChange={ (e:any) => this.setState({name:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Person/></InputAdornment>)}} className={classes.textInput}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Father Name" value={this.state.fathername} onChange={ (e:any) => this.setState({fathername:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Person/></InputAdornment>)}}className={classes.textInput} />
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Mobile Number" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><PhoneAndroidOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.number} onChange={ (e:any) => this.setState({number:e.target.value})}/><br/><br/>
                                <TextField style={{ marginLeft:"10%"}} id="Date" variant="outlined" type="date" label="Date Of Birth" value={this.state.dob} onChange={ (e:any) => this.setState({dob:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Cake/></InputAdornment>)}}className={classes.textInput} InputLabelProps={{shrink:true}} />
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Gender" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><WcOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.gender} onChange={ (e:any) => this.setState({gender:e.target.value})}/>
                                 {/* <TextField id="standard-select-gender" select label="Gender"  value={gender} onChange={handleChange} className={classes.textInput} SelectProps={{MenuProps:{className:classes.menu}}}>
                                    {genders.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                     </MenuItem>
                                    ))}
                                </TextField>   */}
                             
                              
                               
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Occupation" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Work/></InputAdornment>)}}className={classes.textInput} value={this.state.occupation} onChange={ (e:any) => this.setState({occupation:e.target.value})}/><br/><br/>
                             
                                <Typography variant="h4" style={{backgroundColor:"#5DADE2",fontFamily:"Times New Roman",color:"#ccffff"}}>Address for communication</Typography><br/><br/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Address" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Home/></InputAdornment>)}}className={classes.textInput} value={this.state.address} onChange={ (e:any) => this.setState({address:e.target.value})}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="City"  value={this.state.city} onChange={ (e:any) => this.setState({city:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><LocationCity/></InputAdornment>)}} className={classes.textInput}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Pincode" value={this.state.pincode} onChange={ (e:any) => this.setState({pincode:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><PinDrop/></InputAdornment>)}}className={classes.textInput} /><br/><br/>
                               
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Course" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><PhoneAndroidOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.course} onChange={ (e:any) => this.setState({course:e.target.value})}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Email" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><EmailOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.email} onChange={ (e:any) => this.setState({email:e.target.value})}/><br/><br/>
                              
                             <Typography variant="h4" style={{backgroundColor:"#5DADE2",fontFamily:"Times New Roman",color:"#ccffff"}}>Academic Qualifications</Typography><br/><br/>
                              {/* <Button variant="contained" className={classes.button} onClick={this.toggleEdit}>Edit</Button> */}
                             <Table style={{fontFamily:"Georgia",color:"#ccffff"}} >
                                    <TableHead>
                                    <TableRow style={{fontFamily:"Georgia",color:"#ccffff"}}>
                                        <TableCell>S.No</TableCell>
                                        <TableCell>Institution/Board/University</TableCell>
                                        <TableCell>Degree</TableCell>
                                        <TableCell>Subject</TableCell>
                                        <TableCell>Percentage/CGPA</TableCell>
                                        <TableCell>Year</TableCell></TableRow>
                                    </TableHead>                                  
                                   
                                    <TableBody>
                                        <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>10th</TableCell>
                                       <TableCell><TextField /></TableCell>
                                       <TableCell><TextField/></TableCell>
                                       <TableCell><TextField value={this.state.tenthMarks} onChange={ (e:any) => this.setState({tenthMarks:e.target.value})}  /></TableCell>
                                       <TableCell><TextField/></TableCell>
                                     

                                        </TableRow>

                                        <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>HSC/12th</TableCell>
                                        <TableCell><TextField value={this.state.hsc} onChange={ (e:any) => this.setState({hsc:e.target.value}) }/></TableCell>
                                       <TableCell><TextField/></TableCell>
                                       <TableCell><TextField value={this.state.hscMarks} onChange={ (e:any) => this.setState({hscMarks:e.target.value})} /></TableCell>
                                       <TableCell><TextField/></TableCell>
                                      

                                        </TableRow>
                                       
                                        <TableRow>
                                        <TableCell>3</TableCell><TableCell>Graduation</TableCell>
                                        <TableCell><TextField value={this.state.degree} onChange={ (e:any) => this.setState({degree:e.target.value}) }/></TableCell>
                                       <TableCell><TextField/></TableCell>
                                       <TableCell><TextField value={this.state.graduationMarks} onChange={ (e:any) => this.setState({graduationMarks:e.target.value})} /></TableCell>
                                       <TableCell><TextField/></TableCell>
                                        </TableRow>
                                       
                                        <TableRow>
                                        <TableCell>4</TableCell><TableCell>Post Graduation</TableCell>
                                        <TableCell><TextField value={this.state.pgdegree} onChange={ (e:any) => this.setState({pgdegree:e.target.value}) }/></TableCell>
                                       <TableCell><TextField/></TableCell>
                                       <TableCell><TextField value={this.state.postGraduationMarks} onChange={ (e:any) => this.setState({postGraduationMarks:e.target.value})} /></TableCell>
                                       <TableCell><TextField/></TableCell>
                                        </TableRow>
                                       
                                        {/* <TableRow>
                                        <TableCell>5</TableCell><TableCell></TableCell>
                                        <TableCell><TextField/></TableCell>
                                       <TableCell><TextField/></TableCell>
                                       <TableCell><TextField/></TableCell>
                                       <TableCell><TextField/></TableCell>
                                        </TableRow> */}
                                       
                                       
                                    </TableBody>
                                </Table><br/><br/> 
                                    
                                     {/* <Tableedu/> */}

                                <Button type="submit" variant="contained" className={classes.button}>Register</Button>
                             </form>
                        </CardContent>
                    
                    </Card><br/><br/><br/>

                 <h3 style={{fontFamily:"Georgia",color:"#ccffff",textAlign:"center",marginLeft:"30%"}}>
                     {/* For more information Contact Us.<br/>
                 tallytechsupport@viser.in<br/> */}
                 {/* <Icon><img src={call} alt="Landline Number" style={{color:"#5DADE2"}}/>022-27541511</Icon> */}
                
                 </h3>


              
           
             
             </div>
         )
     }

 }



 export default withStyles(RegiStyle)(Registration)


// import React from 'react';
// import MaterialTable, { Column } from 'material-table';

// interface Row {
//   name: string;
//   surname: string;
//   birthYear: number;
//   birthCity: number;
// }

// interface TableState {
//   columns: Array<Column<Row>>;
//   data: Row[];
// }

// export default function MaterialTableDemo() {
//   const [state, setState] = React.useState<TableState>({
//     columns: [
//       { title: 'S.No', field: 'S.no' },
//       { title: 'Institution/Board/University', field: 'Institution/Board/University' },
//       { title: 'Degree', field: 'Degree'},
//       { title: 'Subject',field: 'Subject'},
//       { title: 'Percentage/CGPA',field: 'Percentage/CGPA'},
//       { title: 'Year',field: 'Year'},
//     ],
//     data: [
//       { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//       {
//         name: 'Zerya Betül',
//         surname: 'Baran',
//         birthYear: 2017,
//         birthCity: 34,
//       },
//     ],
//   });

//   return (
//     <MaterialTable
//       title="Academic Qualifications details"
//       columns={state.columns}
//       data={state.data}
//       editable={{
//         onRowAdd: (newData:any) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.push(newData);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//         onRowUpdate: (newData, oldData) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               if (oldData) {
//                 setState(prevState => {
//                   const data = [...prevState.data];
//                   data[data.indexOf(oldData)] = newData;
//                   return { ...prevState, data };
//                 });
//               }
//             }, 600);
//           }),
//         onRowDelete: oldData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.splice(data.indexOf(oldData), 1);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//       }}
//     />
//   );
// }



                                    /* <Tableedu/> 
                                {/* <Table style={{fontFamily:"Georgia",color:"#ccffff"}}>
                                    <TableHead>
                                    <TableRow style={{fontFamily:"Georgia",color:"#ccffff"}}>
                                        <TableCell>S.No</TableCell>
                                        <TableCell>Institution/Board/University</TableCell>
                                        <TableCell>Degree</TableCell>
                                        <TableCell>Subject</TableCell>
                                        <TableCell>Percentage/CGPA</TableCell>
                                        <TableCell>Year</TableCell></TableRow>
                                    </TableHead>                                  
                                   
                                    <TableBody>
                                        <TableRow>
                                        <TableCell>1</TableCell><TableCell>10th</TableCell>
                                        <TableCell/><TableCell/><TableCell/><TableCell/>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell>2</TableCell><TableCell>HSC/12th</TableCell>
                                        <TableCell/><TableCell/><TableCell/><TableCell/>
                                        </TableRow>
                                       
                                        <TableRow>
                                        <TableCell>3</TableCell><TableCell>Graduation</TableCell>
                                        <TableCell/><TableCell/><TableCell/><TableCell/>
                                        </TableRow>
                                       
                                        <TableRow>
                                        <TableCell>4</TableCell><TableCell>Post Graduation</TableCell>
                                        <TableCell/><TableCell/><TableCell/><TableCell/>
                                        </TableRow>
                                       
                                        <TableRow>
                                        <TableCell>5</TableCell><TableCell></TableCell>
                                        <TableCell/><TableCell/><TableCell/><TableCell/>
                                        </TableRow>
                                       
                                       
                                    </TableBody>
                                </Table><br/><br/> */
                                /* <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Marital Status" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><PhoneAndroidOutlined/></InputAdornment>)}}className={classes.textInput} value={this.state.maritalstatus} onChange={ (e:any) => this.setState({maritalstatus:e.target.value})}/>
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Occupation"  value={this.state.occupation} onChange={ (e:any) => this.setState({occupation:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><Work/></InputAdornment>)}} className={classes.textInput}/><br/><br/>
                                */
                                /* <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Course" value={this.state.course} onChange={ (e:any) => this.setState({course:e.target.value})} InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><People/></InputAdornment>)}}className={classes.textInput} />
                                <TextField style={{ marginLeft:"10%"}} variant="outlined" label="Comment" InputProps={{className:classes.textInput,startAdornment:(<InputAdornment position="start"><CommentRounded/></InputAdornment>)}}className={classes.textInput} value={this.state.comment} onChange={ (e:any) => this.setState({comment:e.target.value})}/><br/><br/>
                                <br/><br/> */


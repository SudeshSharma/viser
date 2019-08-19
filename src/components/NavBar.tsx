import * as React from 'react'
import { Tabs, Tab, Typography } from '@material-ui/core';


import Registration from './Registration';
import Home from './Home'
import Learning from './Learning'
import Blog from './Blog';
import About from './About';
import Pricing from './Pricing';

// const logo = require('./Images/logo.ico')
interface TabContainerProps{
  children?: React.ReactNode;
  dir?:string;
}

function TabContainer({children,dir}: TabContainerProps){
  return(
    <Typography component="div" dir={dir}style={{padding: 3*3}}>
      {children}
    </Typography>
  )
}

function NavBar(){
  const [value,setValue] = React.useState(0)

  function handleChange(event: React.ChangeEvent<{}>,newValue:number){
    setValue(newValue)
  }

    return(
        <div>

            {/* <AppBar color="default">   */}
            {/* <img src={logo} alt="logo" height="10%" width="10%"/> */}
            <Tabs  value={value} onChange={handleChange}  variant="scrollable" scrollButtons="on" >
              <Tab disableRipple label="Home" style={{fontFamily:"Times New Roman",fontSize: '20px'}}/>
              <Tab disableRipple label="Learning" style={{fontFamily:"Times New Roman",fontSize: '20px'}} />
              <Tab disableRipple label="Blog" style={{fontFamily:"Times New Roman",fontSize: '20px'}}/>
              <Tab disableRipple label="About" style={{fontFamily:"Times New Roman",fontSize: '20px'}}/>
              <Tab disableRipple label="Pricing" style={{fontFamily:"Times New Roman",fontSize: '20px'}}/>
              <Tab disableRipple label="Register" style={{fontFamily:"Times New Roman",fontSize: '20px'}}/>
            </Tabs>
            {/* </AppBar>  */}

            {value===0 && <TabContainer><Home/></TabContainer>}
            {value===1 && <TabContainer><Learning/></TabContainer>}
            {value===2 && <TabContainer><Blog/></TabContainer>}
            {value===3 && <TabContainer><About/></TabContainer>}
            {value===4 &&<TabContainer><Pricing/></TabContainer>}
            {value===5 && <TabContainer><Registration/></TabContainer>}
            {/* </SwipeableViews> */}
        </div>

    )
}

export default NavBar


























// import React from 'react'
// import {AppBar,Tabs,Tab} from '@material-ui/core'


// //import logo from './Images/logo.png'

// //  interface TabConatinerProps{
// //      children?: React.ReactNode
// //  }

// //  function TabContainer(props: TabConatinerProps){
// //      return(
// //          <Typography component="div" style={{padding:8*3}}>
// //          {props.children}
// //          </Typography>
// //      )
// //  }
// const divStyle = require('./Images/logo.png')


// export default function NavBar(){
//         const [value,setValue] = React.useState(0)
//         // const [anchorE1,setAnchorEl] = React.useState<null | HTMLElement>(null);
//          function handleChange(e:React.ChangeEvent<{}>,newValue:number){
//              setValue(newValue)
//          }


//         // function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
//         //     setAnchorEl(event.currentTarget);
//         //   }

//         //   function handleClose() {
//          //    setAnchorEl(null);
//           // }
//         return(
//             <div style={{backgroundImage:`url(${divStyle})`}}>
//                 <AppBar style={{backgroundColor:"white"}} position="static">
//                     {/* <img src={logo} width="10%" alt="company logo"/> */}
//                     <Tabs value={value} onChange={handleChange} style={{color:"black",marginLeft:"40%",marginTop:"2%"}}>
//                         <Tab label="Home"/>
//                         <Tab label="Learning"/>
//                         {/* <Menu id="menu"  keepMounted open={Boolean(anchorE1)}>
//                             <MenuItem onClick={handleClose}>Tally ERP9</MenuItem>
//                         </Menu> */}
//                         <Tab label="Blog"/>
//                         <Tab label="About"/>
//                         <Tab label="Pricing"/>
//                      </Tabs>


//                 </AppBar>


//             </div>
//         )
//     }




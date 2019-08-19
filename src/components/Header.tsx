import React from 'react'
import { Button } from '@material-ui/core'
import {HeaderStyle} from './Styles/HeaderStyle'
import { withStyles } from '@material-ui/styles';

const divStyle = require('./Images/backheader.png')
class Header extends React.Component {
    handleClick() {
        window.alert('Work in Progress')
    }
    render() {
        const {classes}:any =this.props
        return (
            <div className={classes.root} style={{backgroundImage:`url(${divStyle})`,backgroundSize:"cover"}}>
               
               <img src={divStyle} alt="tally" width="100%" /> 
                <h1 className={classes.h1}>The India Best Tally ERP 9 Training Institute <br />
                
                    <Button type="submit" variant="contained" className={classes.button} onClick={this.handleClick}>Tally ERP9</Button><br/><br/></h1>
                    <h3 className={classes.h5}>Always Available,Smart Classroom,Easy Solution.</h3> <br/>
            </div>
        )
    }

}

export default withStyles(HeaderStyle)(Header)
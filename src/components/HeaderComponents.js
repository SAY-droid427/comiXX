import React ,{Component} from "react";
import {Collapse, Navbar, NavbarToggler,Nav,NavbarBrand,NavItem,NavbarText,ButtonGroup,Button} from "reactstrap";
import {NavLink} from "react-router-dom";
import {Jumbotron} from "reactstrap";


class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            bgColor:"rgb(247, 213, 119)",
            nvColor:"rgb(115, 88, 62)",
            textColor:"rgb(0,0,0)"

        }
        this.toggle=this.toggle.bind(this);
        this.changeToGr=this.changeToGr.bind(this);
        this.changeToHu=this.changeToHu.bind(this);
        this.changeToRa=this.changeToRa.bind(this);
        this.changeToSl=this.changeToSl.bind(this);
    }
    toggle(){
        this.setState({isOpen:!this.state.isOpen})
    }
    changeToGr(){
        this.setState({
            bgColor:"rgb(174,0,1)",
            nvColor:"rgb(0,0,0)",
            textColor:"rgb(238,186,48)"
        })
    }
    changeToHu(){
        this.setState({
            bgColor:"rgb(240,199,94)",
            nvColor:"rgb(114,98,85)",
            textColor:"rgb(55,46,41)"
        })
    }
    changeToRa(){
        this.setState({
            bgColor:"rgb(34,47,91)",
            nvColor:"rgb(0,0,0)",
            textColor:"rgb(148,107,45)"
        })
    }
    changeToSl(){
        this.setState({
            bgColor:"rgb(26,71,42)",
            nvColor:"rgb(0,0,0)",
            textColor:"rgb(170,170,170)"
        })
    }
    render(){
        const jumboStyle={
            backgroundColor:this.state.bgColor,
            color:this.state.textColor
        }
        const navStyle={
            backgroundColor:this.state.nvColor,
            
        }
        const linkColors={
            color:this.state.textColor
        }
        return(
            <React.Fragment>
                <Navbar style={navStyle} dark expand="md">
                    <div className="container-fluid">
                    <NavbarBrand href="/">Sayani Mallick</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" style={linkColors}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/gallery" style={linkColors}>Gallery</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                <Jumbotron style={jumboStyle}>
                    <h1>ComiXX</h1>
                </Jumbotron>
                <div className="container-fluid">
                    <ButtonGroup>
                        <Button onClick={()=>{this.changeToGr()}}>Gryffindor</Button>
                        <Button onClick={()=>{this.changeToHu()}}>HufflePuff</Button>
                        <Button onClick={()=>{this.changeToRa()}}>Ravenclaw</Button>
                        <Button onClick={()=>{this.changeToSl()}}>Slytherin</Button>
                    </ButtonGroup>
                </div>
            </React.Fragment>
            
        )
    }
}
export default Header;
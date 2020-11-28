import React,{Component} from 'react';
import '../stylesheet/headerChat.css';
import RoboInfoModal from './roboInfoModal';
class ChatHeader extends Component{
    constructor(props){
        super(props)
        this.state = {
            displayRoboInfoModal: false
        }
        this.roboDetailsDisplayHandler = this.roboDetailsDisplayHandler.bind(this)
        this.toggleModalHandler = this.toggleModalHandler.bind(this)
    }
    roboDetailsDisplayHandler(){
        this.setState({displayRoboInfoModal: true})
    }
    toggleModalHandler(){
        this.setState({displayRoboInfoModal: !this.state.displayRoboInfoModal})
    }
    render(){
        return(
            <>
            <div className="header_chat">
                <img style = {{cursor:"pointer"}} src={this.props.roboIcon} alt="robo_img" onClick = {(e) => this.roboDetailsDisplayHandler()}/>
                <h3>{this.props.roboName}</h3>
            </div>
            <RoboInfoModal toggleModal={this.toggleModalHandler} isOpen={this.state.displayRoboInfoModal} facePic={this.props.roboIcon} roboName={this.props.roboName} algoUsed={this.props.algo} />
            </>
        );
    }

}

export default ChatHeader;
import React,{Component} from 'react';
import '../stylesheet/headerChat.css';
class ChatHeader extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className="header_chat">
                <img src={this.props.roboIcon} alt="robo_img"/>
                <h3>{this.props.userName}</h3>
            </div>
        );
    }

}

export default ChatHeader;
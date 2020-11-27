import React,{Component} from 'react';
import '../stylesheet/headerChat.css';
class ChatHeader extends Component{
    render(){
        return(
            <div className="header_chat">
                <img src="https://picsum.photos/200/300/?blur=2" alt="user img"/>
                <h3>{this.props.userName}</h3>
            </div>
        );
    }

}

export default ChatHeader;
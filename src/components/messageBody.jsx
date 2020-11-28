import React,{Component} from 'react';
import '../stylesheet/messageBody.css';
import sendMsg from '../img/send.png';
class MessageBody extends Component{
    render(){
        return(
            <div className="messageContainer">
                <div className="messages">

                        {this.props.userArr.msg.map( roboMsg => 
                                    <div className="userMessages">
                                        <p>{roboMsg}</p>
                                        <img  src={this.props.roboIcon} alt=""/>
                                    </div>

                        )}            
                </div>
                <div className="inputFieldBottom">
                    <input type="text" placeholder="Type Your Messages Here..."/>
                    <button className = "sendBtn">
                        <img className = "img-fluid" src = {sendMsg} alt = "send"/>
                    </button>
                </div>
            </div>
        );
    }

}

export default MessageBody;
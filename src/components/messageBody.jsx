import React,{Component} from 'react';
import '../stylesheet/messageBody.css';
import sendMsg from '../img/send.png';
class MessageBody extends Component{
    render(){
        return(
            <div className="messageContainer">
                <div className="messages">

                        {this.props.userArr[this.props.userId].msg.map( m => 
                                    <div className="userMessages">
                                        <p>{m}</p>
                                        <img src="https://picsum.photos/200/300/?blur=2" alt=""/>
                                    </div>

                        )}            


                </div>
                <div className="inputFieldBottom">
                    <input type="text" placeholder="Type Your Messages Here..."/>
                    <input type="image" name = "submit" alt="send" src={sendMsg}/>
                </div>
            </div>
        );
    }

}

export default MessageBody;
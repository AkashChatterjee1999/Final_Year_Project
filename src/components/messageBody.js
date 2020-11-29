import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheet/messageBody.css';
import sendMsg from '../img/send.png';
import replyBot from '../img/replyBot.png'
import loader from '../img/loader.gif'

class MessageBody extends Component {

    state = {
        sentMessage: '',
        botResponse: '',
        emojiLoading: false,
        sentBtnIsActive: true
       
    }
    componentDidUpdate = () => {
        const msgContainer = document.getElementById('messages');
        if(msgContainer)
            msgContainer.scrollTo(0,msgContainer.scrollHeight);
    }

    handleChange = (e) => {
        this.setState({ sentMessage: e.target.value });
    }

    handleMessages = () => {
        if(this.state.sentMessage.length>1){
            const cur_host = "https://be113081d0e3.ngrok.io"
            let userStr = this.state.sentMessage
            this.setState({ emojiLoading: true, sentMessage: "" , sentBtnIsActive: false },() => {
                this.props.sentMessages(this.props.userId,userStr);
                this.props.botMessages(this.props.userId,"---");
            });
            axios.post(cur_host+"/api/v1.0/lstm/predMoji",{
                "query" : userStr
            },{
                headers: {
                    'content-type': 'text/plain;charset=utf-8'
                }
            }).then(res => {
                let emoji = res.data.emojis
                this.setState({emojiLoading: false, sentBtnIsActive: true, botResponse: emoji},() => {
                    this.props.replaceBlankWithBotReply(emoji,this.props.userId)
                })
    
            }).catch(err => {
                console.error(err)
                this.setState({emojiLoading: false, sentBtnIsActive: true, botResponse: "I don't know to respond to that"},() => {
                    this.props.replaceBlankWithBotReply("I don't know to respond to that",this.props.userId)
                })
            })
        } else {
            console.log("Provide arguments to start")
        }
    }

    render() {
        return (
            <div className="messageContainer">
                <div id='messages' className="messages">
                    {
                        this.props.userArr.userMsg.map((userMsg,idx) =>
                        idx<this.props.userArr.botMsg.length?
                        <>
                            <div className="userMessages">
                                <p>{userMsg}</p>
                                <img style={{ background: "#000000" }} src={replyBot} alt="user" className = "img-fluid" />
                            </div>
                            {
                                this.props.userArr.botMsg[idx] !== "---"?
                                    <div className="botMessages">
                                        <p>
                                            <span style={{ fontSize: this.props.userArr.botMsg[idx].length<3?35:16 }}> 
                                                {this.props.userArr.botMsg[idx]}
                                            </span>
                                        </p>
                                        <img style={{ background: "#000000" }} src={this.props.roboIcon} alt="reply Bot" />
                                    </div>
                                :   <div className="botMessages">
                                        <div className="emojiLoader" style = {{backgroundImage:`url(${loader})`}}></div>
                                        <img style={{ background: "#000000" }} src={this.props.roboIcon} alt="reply Bot" />
                                    </div>
                            }
                           
                        </>
                        :   <div className="userMessages">
                                <p>{userMsg}</p>
                                <img style={{ background: "#000000" }} src={replyBot} alt="user" className = "img-fluid" />
                            </div>
                    )}
                </div>
                <div className="inputFieldBottom">
                    <input type="text" placeholder="Type Your Messages Here..." onChange={this.handleChange} value={this.state.sentMessage} onKeyPress={(e) => { if(e.key==='Enter')this.handleMessages()} }/>
                    <button className="sendBtn" onClick={this.handleMessages} disabled={!this.state.sentBtnIsActive}>
                        <img className="img-fluid" src={sendMsg} alt="send" />
                    </button>
                </div>
            </div>
        );
    }

}

export default MessageBody;
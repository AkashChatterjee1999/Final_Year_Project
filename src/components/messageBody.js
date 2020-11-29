import React, { Component } from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import '../stylesheet/messageBody.css';
import sendMsg from '../img/send.png';
import replyBot from '../img/replyBot.png'

class MessageBody extends Component {

    componentDidUpdate = () => {
        const msgContainer = document.getElementById('messages');
        if(msgContainer)
            msgContainer.scrollTo(0,msgContainer.scrollHeight);
    }

    state = {
        sentMessage: '',
        botResponse: '',
        emojiLoading: false
    }
    handleChange = event => {
        this.setState({ sentMessage: event.target.value });
    }

    handleMessages = () => {
        this.setState({ emojiLoading: true });
        this.props.sentMessages(
            this.props.userId,
            this.state.sentMessage
        );
        axios.get('https://emoji-api.com/emojis?access_key=12721a3786bf027d30807a552f0b8284834ae18a')
            .then(res => {

                this.setState({ botResponse: res.data[this.props.userId].character });
                this.props.botMessages(
                    this.props.userId,
                    this.state.botResponse
                );
                this.setState({ emojiLoading: false })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="messageContainer">
                <div id='messages' className="messages">

                    {this.props.userArr.userMsg.map(roboMsg =>
                        <div className="userMessages">
                            <p>{roboMsg}</p>
                            <img src={this.props.roboIcon} alt="" />
                        </div>

                    )}
                    <div className="emojiLoader">
                        loading...
                        {this.state.emojiLoading && <ReactBootStrap.Spinner animation="grow" />}
                    </div>
                    {this.props.userArr.botMsg.map(m =>
                        <div className="botMessages">
                            <p><span style={{ fontSize: 50 }} > {m} </span></p>
                            <img style={{ background: "#000000" }} src={replyBot} alt="reply Bot" />
                        </div>



                    )}
                </div>
                <div className="inputFieldBottom">
                    <input type="text" placeholder="Type Your Messages Here..." onChange={this.handleChange} />
                    <button className="sendBtn" onClick={this.handleMessages}>
                        <img className="img-fluid" src={sendMsg} alt="send" />
                    </button>
                </div>
            </div>
        );
    }

}

export default MessageBody;
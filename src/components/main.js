import React, {Component} from 'react';
import '../stylesheet/mainStyle.css';
import UserThreads from './userThreads';
import ChatHeader from './chatHeader';
import MessageBody from './messageBody';
import robo1Face from '../img/robo1.jpeg'
import robo2Face from '../img/robo2.jpg'
import robo3Face from '../img/robo3.jpg'
import robo4Face from '../img/robo4.jpg'

import {Activity} from 'react-feather';
class Main extends Component{
    constructor(props) {
        super(props)
        this.state = {
            userArr : [
                {id:1,name:"Bot #1", algo: "LSTM",icon: robo1Face, userMsg:[],
                botMsg:[]},
    
                {id:2,name:"Bot #2",algo: "RNN", icon: robo2Face, userMsg:[],
                botMsg:[]},
    
                {id:3,name:"Bot #3",algo: "RNN", icon:robo3Face, userMsg:[],
                botMsg:[]},
    
                {id:4,name:"Bot #4",algo: "CNN", icon:robo4Face, userMsg:[],
                botMsg:[]}
            ],
            userName: "No Chat Selected",
            selectedId: 0
        };
    }
    handleUserDetails = id => {
        const userObj = this.state.userArr.filter( c => c.id === id );
        // console.log(userObj[0].name);
        this.setState({userName:userObj[0].name}); 
        this.setState({selectedId:id});           
    }

    replaceBlankWithBotReply = (reply,id) => {
        let userArrUpdated = [...this.state.userArr];
        let lastIndex = this.state.userArr[id-1].botMsg.length-1
        userArrUpdated[id-1].botMsg[lastIndex] = reply
        console.log(userArrUpdated,reply)
        this.setState({userArr: userArrUpdated})
    }

    handleSentMessages = (userId,receivedMsg) => {
        //console.log(userId,receivedMsg);
        let userArr = [...this.state.userArr];
        userArr[userId-1].userMsg.push(receivedMsg);
        this.setState({userArr});
        console.log(this.state.userArr);
    }

    handleBotMessages = (userId,receivedMsg) => {
        
        let userArr = [...this.state.userArr];
        userArr[userId-1].botMsg.push(receivedMsg);
        this.setState({userArr});
        console.log(userArr[userId-1].botMsg);
    }

    render(){
        return(
            <div className="mainComponent">
                <div className="leftSidebar">
                    <div className="leftSidebar_header mx-auto mt-3">
                        <Activity color = "blue" size = {48} />
                        <p className = "lead font-weight-bolder ml-3">predMoji</p>
                    </div>
                    <div className="leftSidebar_threads">
                        {this.state.userArr.map( users => (
                            <UserThreads key={users.id} userArr={users}  handleUserName={this.handleUserDetails}/>
                        ))}
                    </div>
                </div>
                <div className="rightSidebar">
                    <div className="rightSidebar_header">
                    {
                        this.state.selectedId>0?
                        <ChatHeader roboName={this.state.userName} roboIcon = {this.state.userArr[this.state.selectedId-1].icon} userId={this.state.selectedId} algo={this.state.userArr[this.state.selectedId-1].algo}/>
                        :null
                    }
                    </div>
                    {
                        this.state.selectedId>0?
                            <div className="rightSidebar_body">
                                <MessageBody userArr={this.state.userArr[this.state.selectedId-1]} roboIcon = {this.state.userArr[this.state.selectedId-1].icon} userId={this.state.selectedId} sentMessages={this.handleSentMessages} botMessages={this.handleBotMessages} replaceBlankWithBotReply={this.replaceBlankWithBotReply}/>
                            </div>
                        :   <div className = "rightSidebar_body">
                                <div className="messageContainer" style = {{marginTop: "40vh"}}>
                                    <center><h2>Select a bot to start</h2></center>
                                </div>
                            </div>
                    }
                </div>
            </div>
        );
    }

}

export default Main;
import React, {Component} from 'react';
import '../stylesheet/mainStyle.css';
import UserThreads from './userThreads';
import ChatHeader from './chatHeader';
import MessageBody from './messageBody';
class Main extends Component{
    constructor(props) {
        super(props)
        this.state = {
            userArr : [
                {id:1,name:"Bot #1", algo: "LSTM",msg:["This is a message from Bot #1","Hi Hello","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio reiciendis praesentium ullam eum, ipsam et. Numquam voluptatibus sint minus accusantium, possimus ipsam beatae.","Dummy Texts"]},
    
                {id:2,name:"Bot #2",algo: "RNN",msg:["This is a message from Bot #2","Hi Hello","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio reiciendis praesentium ullam eum, ipsam et. Numquam voluptatibus sint minus accusantium, possimus ipsam beatae.","Dummy Texts"]},
    
                {id:3,name:"Bot #3",algo: "RNN", msg:["This is a message from Bot #3","Hi Hello","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio reiciendis praesentium ullam eum, ipsam et. Numquam voluptatibus sint minus accusantium, possimus ipsam beatae.","Dummy Texts"]},
    
                {id:4,name:"Bot #4",algo: "CNN",msg:["This is a message from Bot #4","Hi Hello","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio reiciendis praesentium ullam eum, ipsam et. Numquam voluptatibus sint minus accusantium, possimus ipsam beatae.","Dummy Texts"]}
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
    render(){
        return(
            <div className="mainComponent">
                <div className="leftSidebar">
                    <div className="leftSidebar_header">
                        <h1>PRED_MOJI</h1>
                    </div>
                    <div className="leftSidebar_threads">
                        {this.state.userArr.map( users => (
                            <UserThreads key={users.id} userArr={users}  handleUserName={this.handleUserDetails}/>
                        ))}
                    </div>
                </div>
                <div className="rightSidebar">
                    <div className="rightSidebar_header">
                        <ChatHeader userName={this.state.userName}/>
                    </div>
                    {
                        this.state.selectedId>0?
                            <div className="rightSidebar_body">
                                <MessageBody userArr={this.state.userArr[this.state.selectedId-1]} userId={this.state.selectedId} />
                            </div>
                        :   <div className = "rightSidebar_body">
                                <div className="messageContainer" style = {{marginTop: "40vh"}}>
                                    <center><h2>Select a chat to start</h2></center>
                                </div>
                            </div>
                    }
                </div>
            </div>
        );
    }

}

export default Main;
import React, {Component} from 'react';
import '../stylesheet/mainStyle.css';
import UserThreads from './userThreads';
import ChatHeader from './chatHeader';
import MessageBody from './messageBody';
class Main extends Component{
    state = {
        userArr : [
            {id:1,name:"User #1",msg:["This is a message from User #1","Hi Hello","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio reiciendis praesentium ullam eum, ipsam et. Numquam voluptatibus sint minus accusantium, possimus ipsam beatae.","Dummy Texts"]},

            {id:2,name:"User #2",msg:["This is a message from User #2","Hi Hello","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio reiciendis praesentium ullam eum, ipsam et. Numquam voluptatibus sint minus accusantium, possimus ipsam beatae.","Dummy Texts"]},

            {id:3,name:"User #3",msg:["This is a message from User #3","Hi Hello","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio reiciendis praesentium ullam eum, ipsam et. Numquam voluptatibus sint minus accusantium, possimus ipsam beatae.","Dummy Texts"]},

            {id:4,name:"User #4",msg:["This is a message from User #4","Hi Hello","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio reiciendis praesentium ullam eum, ipsam et. Numquam voluptatibus sint minus accusantium, possimus ipsam beatae.","Dummy Texts"]}
        ],
        userName: "No Chat Selected",
        selectedId: 0
    };
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
                            // <UserThreads key={users.id} userArr={users} userDetails={this.handleUserDetails}/>
                            <UserThreads key={users.id} userArr={users}  handleUserName={this.handleUserDetails}/>
                        ))}
                    </div>
                </div>
                <div className="rightSidebar">
                    <div className="rightSidebar_header">
                        <ChatHeader userName={this.state.userName}/>
                    </div>
                    <div className="rightSidebar_body">
                        <MessageBody key={this.state.userArr.id} userArr={this.state.userArr} userId={this.state.selectedId} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Main;
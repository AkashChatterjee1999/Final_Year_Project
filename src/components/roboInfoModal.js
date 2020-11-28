import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
export default class RoboInfoModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        console.log("Hello world")
        return(
            <Modal fade isOpen={this.props.isOpen} toggle={this.props.toggleModal} external={this.props.toggleModal}>
                <ModalHeader toggle={this.props.toggleModal}>
                    About this bot
                </ModalHeader>
                <ModalBody>
                    <Card>
                        <CardImg top src={this.props.facePic} alt="Card image cap" style={{width:"35%",height:"35%"}} />
                        <CardBody>
                            <CardTitle tag="h5">{this.props.roboName}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Always a bot for your help</CardSubtitle>
                            <CardText>{"I use "+this.props.algoUsed + " Algorithm for predecting the emoji's based on the text you write to me. Happy to help"}</CardText>
                        </CardBody>
                    </Card>
                </ModalBody>
            </Modal>
        )
    }
}
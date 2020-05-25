import React, {PureComponent} from 'react';
import { Textarea, Content } from 'native-base';
import Storage from './../store/Storage';
import Config from './../../config/Config.json'

class TextInput extends PureComponent {

    constructor(props){
        super(props);
        this.saveState = props.saveState;
        this.state = {
            text: props.value,
            prevText: props.value
        }
    }

    componentDidMount() {
        this.setState({
            "text": this.props.value,
            "prevText": this.props.value
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.value != this.props.value){
            this.setState({
                "text": this.props.value,
                "prevText": this.props.value
            });
        }
    }
    
    _handleChange = (value) => {
        
        this.setState(
            {
                "text" : value,
            }
        );
    }

    _saveMessage = () => {
        
        if(this.state.text){
            if(this.state.text !== this.state.prevText){
                this.saveState( this.state.text );
                this.setState({"prevText": this.state.text});
            }
        }
        
    }

    render() {

        return (
            <Content>
                <Textarea 
                rowSpan={7} 
                bordered
                value = { this.state.text }
                placeholder="Enter some text here" 
                onChangeText = { this._handleChange }
                onBlur= { this._saveMessage }>

                </Textarea>
            </Content>
        );
    }
}

export default TextInput;
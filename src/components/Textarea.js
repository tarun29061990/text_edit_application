import React, {PureComponent} from 'react';
import { Textarea, Content } from 'native-base';

class TextInput extends PureComponent {

    constructor(){
        this.state = {
            text: ""
        }
    }
    render() {

        return (
            <Content>
                <Textarea 
                rowSpan={5} 
                bordered
                placeholder="Enter some text here" onBlur={_handleChange}>

                </Textarea>
            </Content>
        );
    }

    _handleChange = (value) => {
        this.setState({text:"value"});
    }
}

export default TextInput;
import React, {PureComponent} from 'react';
import {
    Content,
    Text
} from 'native-base';

class Count extends PureComponent {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <Content>
                <Text>{this.props.count} Words</Text>
            </Content>
        );
    }
}

export default Count;
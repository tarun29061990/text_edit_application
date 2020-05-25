import React, {PureComponent} from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    Content,
    Text,
    Button
} from 'native-base';

class Count extends PureComponent {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <Content>
                <Text style={styles.text}>{this.props.count} Words</Text>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default Count;
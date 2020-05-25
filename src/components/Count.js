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
                <Button full transparent><Text style={styles.text}>{this.props.count} Words</Text></Button>
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
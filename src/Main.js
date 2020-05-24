import React, { PureComponent } from 'react';
import {Content, Container} from 'native-base';
import MainHeader from './components/header/Header';
import TextInput from './components/Textarea';
import Count from './components/Count';
import Undo from './components/Undo';

class Main extends PureComponent{

    
    render(){
        return (
            <Container>
                <MainHeader></MainHeader>            
                <Content padder>
                    <TextInput></TextInput>
                    <Count></Count>
                    <Undo></Undo>
                </Content>
            </Container>
        );
    }
}

export default Main;
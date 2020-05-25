import React, { PureComponent } from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    Content, 
    Container,
    Text,
    Spinner
} from 'native-base';

import Config from './../config/Config.json';
import Storage from './store/Storage';
import MainHeader from './components/header/Header';
import TextInput from './components/Textarea';
import Count from './components/Count';
import Undo from './components/Undo';

class Main extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            "wordCount": 0,
            "savedMessages": [],
            "currentText":'',
            "showLoader": true
        };
    }
    async componentDidMount(){
        const savedMessages = await Storage.getValue(Config.state.name);
        this.setState({"showLoader": false});
        if(savedMessages && savedMessages.length){
            this.setState(
                {
                    "savedMessages": savedMessages
                },
                ()=>{
                    const currentText = this.state.savedMessages.slice(-1)[0];
                    this.setState({
                        'currentText': currentText
                    })
                    this._updateWordCount(currentText);
                }
            );
        }
    }

    _countWords = (str) =>{ 
        let state = 0;
        let wordCount = 0;
        
        for(let i = 0; i < str.length; i++){
            if(str[i] === ' ' || str[i] === '\n' || str[i] === '\t' ){
                state = 0;
            }else if(state === 0){
                state = 1;
                wordCount += 1;
            }
        }

        return wordCount;
    }

    _updateWordCount = (text) => {
        let wordCount = this._countWords(text)
        this.setState({
            "wordCount": wordCount
        })
    }

    _saveState = async (newMessages) => {

        //save state to Async storage
        if(newMessages){
            let currentText = '';
            if(newMessages.length){
                currentText = newMessages.slice(-1)[0];
            }
            
            this.setState({
                "savedMessages": newMessages,
                "currentText": currentText
            });

            this._updateWordCount(currentText);
            
            Storage.setValue(Config.state.name, newMessages);
        }
    }

    _processSave = (text) =>{
        
        let newMessages = this.state.savedMessages;
        newMessages.push(text)
        this._updateWordCount(text);

        this.setState({
            "savedMessages": newMessages,
            "currentText": text
        });

        Storage.setValue(Config.state.name, newMessages);
    }

    render(){
        if (this.state.showLoader) {
            
            return(
                <Spinner color='blue' />
            );

        }else{
            return (
                <Container>
                    
                    <MainHeader></MainHeader>   
                    
                    <Content padder contentContainerStyle = {styles.container}>
                        
                        <TextInput style={styles.textInput}
                            value = {this.state.currentText}
                            saveState={this._processSave}
                            key = {this.state.currentText.length+"-"+"text"}
                        ></TextInput>
                        <Content contentContainerStyle={styles.actionContainer}>
                            <Count style={styles.wordCount}
                                value = {this.state.currentText} 
                                count={this.state.wordCount} >
                            </Count>

                            <Undo style={styles.undo}
                                value = {this.state.savedMessages} 
                                updateData={this._saveState}
                                key = {this.state.savedMessages.length+"-"+"undo"}
                            >
                            </Undo>
                        </Content>
                        <Text style={styles.introText}>Created By Tarun Chaudhary</Text>
                    </Content>
                </Container>
            );
        }
    }
}

const styles = StyleSheet.create({
    
    container:{
        flex:6
    },
    textInput:{
        flex:4
    },
    actionContainer: {
        flex:2
    },

    wordCount:{
        flex:0.5
    },

    undo:{
        flex:0.5
    },

    introText:{
        justifyContent:"center", 
        alignSelf:"center"
    }
    
});

export default Main;
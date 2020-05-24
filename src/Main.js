import React, { PureComponent } from 'react';
import {Content, Container} from 'native-base';

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
            "savedData": [],
            "currentText":''
        };
    }
    async componentDidMount(){
        const savedData = await Storage.getValue(Config.state.name);
        console.log(savedData);
        if(savedData && savedData.length){
            this.setState(
                {
                    "savedData":await Storage.getValue(Config.state.name)
                },
                ()=>{
                    const currentText = this.state.savedData.slice(-1)[0];
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

    _saveState = async (newData) => {

        //save state to Async storage
        const stateName = Config.state.name;

        if(newData){
            let currentText = ''
            if(newData.length){
                currentText = newData.slice(-1)[0]
            }
            this.setState({
                "savedData": newData,
                "currentText": currentText
            })
            this._updateWordCount(currentText);
            Storage.setValue(stateName, newData);
        }
    }

    _processSave = (text) =>{
        
        let newData = this.state.savedData;
        newData.push(text)
        this._updateWordCount(text);

        this.setState({
            "savedData": newData
        })
        Storage.setValue(Config.state.name, newData);
    }

    render(){
        return (
            <Container>
                <MainHeader></MainHeader>            
                <Content padder>
                    
                    <TextInput 
                        value = {this.state.currentText}
                        saveState={this._processSave}
                        key = {this.state.currentText.length}
                    ></TextInput>
                    
                    <Count 
                        value = {this.state.currentText} 
                        count={this.state.wordCount} >
                    </Count>

                    <Undo
                        value = {this.state.savedData} 
                        updateData={this._saveState}
                        key = {this.state.savedData.length}
                    >
                    </Undo>

                </Content>
            </Container>
        );
    }
}

export default Main;
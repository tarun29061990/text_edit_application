import React , { PureComponent } from 'react';
import { 
    Button,
    Text
} from 'native-base';

class Undo extends PureComponent {

    constructor(props){
        super(props);
        this.updateData = props.updateData;
        this.state = {
            messages: [],
            show: false
        }
    }

    _arraysMatch = (arr1, arr2) => {
        
        if (arr1.length !== arr2.length) return false;

        
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    componentDidMount() {
        if(this.props.value && this.props.value.length){
            this.setState({
                messages: this.props.value,
                show: true
            });
        }
    }

    _undo = () => {
        
        let messages = this.state.messages;
        if(messages.length){
            messages.pop();
            this.updateData(messages);
            if(!messages.length){
                this.setState({
                    "show": false
                });
            }
        }else{
            this.setState({
                "show": false
            });
        }
    }

    render(){

        return (
            <Button disabled={!this.state.show} block onPress={this._undo}>
                <Text>Undo</Text>
            </Button>
        );
    }
}

export default Undo;
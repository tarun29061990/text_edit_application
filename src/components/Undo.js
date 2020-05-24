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
            data: [],
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
                data: this.props.value,
                show: true
            });
        }
    }

    componentDidUpdate(prevProps){
        if(!this._arraysMatch(prevProps.value, this.props.value)){
            this.setState({
                data: this.props.value,
                show: true
            });
        }
    }

    _undo = () => {
        
        const val = this.state.data;
        if(val.length){
            val.pop();
            this.updateData(val);
            if(!val.length){
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
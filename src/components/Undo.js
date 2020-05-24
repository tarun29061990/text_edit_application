import React , { PureComponent } from 'react';
import { 
    Button,
    Text
} from 'native-base';

class Undo extends PureComponent {

    render(){

        return (
            <Button block light>
                <Text>Undo</Text> 
            </Button>
        );
    }
}

export default Undo;
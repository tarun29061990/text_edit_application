import React, { PureComponent } from "react";
import { 
    Header,
    Body,
    Left,
    Right,
    Title
} from "native-base";

class MainHeader extends PureComponent{
    
    render(){
        return (
            <Header>
                <Left />
                <Body>
                    <Title>Text Edit App</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}

export default MainHeader;
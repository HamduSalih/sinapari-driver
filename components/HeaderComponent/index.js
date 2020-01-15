import React from 'react';
import { Text, Image } from 'react-native';
import { Header, Left, Body, Right, Button} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import styles from './HeaderComponentStyles'
export const HeaderComponent = ({logo}) => {
    return(
        <Header style={{backgroundColor:'#fff', marginTop:24}}>
            <Left>
                <Button transparent>
                    <FontAwesome name='bars' style={styles.icon} />
                </Button>
            </Left>
            <Body style={{alignItems:'center', marginLeft:60}}>
                {logo &&
					<Image resizeMode="contain" style={styles.logo} source={logo}/>
					||
					<Text style={styles.headerText}>Driver on the way</Text>
				}
            </Body>
            <Right>
                <Button transparent>
                    <FontAwesome name='gift' style={styles.icon} />
                </Button>
            </Right>
        </Header>
    );
}

export default HeaderComponent;
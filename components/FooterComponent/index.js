import React from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './FooterComponentStyles'
export const FooterComponent = () => {
    //tab bar items
    const tabs = [{
        title:'Dry',
        subTitle:'',
        icon:'truck-trailer'
    },
    {
        title:'Reefer',
        subTitle:'',
        icon:'truck-trailer'
    },{
        title:'Container',
        subTitle:'',
        icon:'truck-trailer'
    },{
        title:'Flat',
        subTitle:'',
        icon:'truck-trailer'
    },
    ];


    return(
        <Footer>
            <FooterTab style={styles.footerContainer}>
                {
                    tabs.map((obj, index)=>{
                        return(
                            <Button key={index}>
                                <MaterialCommunityIcons size={20} name={obj.icon} color={(index === 0) ? 'blue'  : '#eee'} />
                                <Text style={{fontSize:12, color:(index === 0) ? 'blue'  : '#eee'}}>{obj.title}</Text>
                                <Text style={styles.subText}>{obj.subTitle}</Text>
                            </Button>
                        )
                    })
                }
            </FooterTab>
        </Footer>
    );
}

export default FooterComponent;
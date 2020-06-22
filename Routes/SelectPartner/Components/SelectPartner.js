import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Container } from 'native-base'
import RenderPartners from './RenderPartners'

export default class SelectPartner extends React.Component{
    
    componentDidMount(){
        console.log(this.props.userData)
        if((this.props.affiliates).length < 1){
            this.props.getAffiliates()
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.affiliates)
    }

    render(){
        return(
            <Container>
                {
                    (this.props.affiliates).length < 1 &&
                    <View style={{
                        flex:1, justifyContent:'center', alignItems:'center'
                    }}>
                        <ActivityIndicator size="large" color="#eef0ef"/>
                        <Text style={{
                            width:'100%',
                            textAlign:'center',
                            fontSize:14,
                            lineHeight: 16
                        }}>Loading Companies List...</Text>
                    </View>
                }
                {
                    (this.props.affiliates).length > 0 &&
                    <View style={{flex:1}}>
                        <RenderPartners 
                            userData={this.props.userData}
                            affiliates={this.props.affiliates} />
                    </View>
                }
            </Container>
        )
    }
}
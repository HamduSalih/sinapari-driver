import React, { Component } from 'react';

const styles = {
    container: {
        flex: 1
    },
    scrollStyle:{
        padding: 10
    },
    distanceContainer:{
        flexDirection: 'row',
        marginBottom: 20
    },
    viewContainer:{
        marginBottom: 20
    },
    distanceHeader:{
        marginBottom: 5,
        fontSize: 12
    },
    distanceFigure:{
        fontSize: 20
    },
    locView: {
        flexDirection: 'row',
      },
      locIcon: {
        marginRight: 10,
      },
      locText: {
        fontWeight: 'bold'
      },
      headerText:{
        fontSize: 18,
        borderWidth: 1,
        padding: 5,
        backgroundColor:'#eef0ef',
        borderColor: 'grey',
        width: '50%'
      },
      dateStyle:{
        fontSize: 12,
        marginLeft: 18,
        fontWeight: '100'
      },
      bidContainer:{
          flexDirection: 'row',
          padding: 15,
          borderTopColor: 'grey',
          borderTopWidth: 1,
          justifyContent: 'space-between',
      },
      bidInput:{
          width: '55%',
          backgroundColor: 'white',
          borderRadius: 3,
          padding: 10,
          fontSize: 15,
      },
      bidButton:{
        backgroundColor: '#141d48',
        padding: 15,
        width: '35%',
        borderRadius: 5,
      },
      bidButtonText:{
          color: '#fff',
          fontSize: 15,
          textAlign: 'center',
      }
}

export default styles;
import React, { Component } from 'react'; 
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/beautiful-place.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {

    state = {
        viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener('change', (dims) => {
            this.setState({
                viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
            })
        })
    }

    loginHandler = () => {
        startMainTabs();
    }

    render() {

        let headingText = null;
        if(this.state.viewMode === 'portrait') {
            headingText = (
                <MainText>
                    <HeadingText style={styles.headingTextByB}>Please Log In</HeadingText>
                </MainText>
            )
        }

        return(
            <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
            <View style={styles.container}>
                {headingText}
                <ButtonWithBackground color="#29aaf4" onPress={() => alert("Hello")} >Switch to Login</ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your E-mail Address" style={styles.input}/>
                    <View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
                        <View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}><DefaultInput placeholder="Password" style={styles.input}/></View>
                        <View style={this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}><DefaultInput placeholder="Confirm Password" style={styles.input}/></View>
                    </View>
                </View>
                
                <ButtonWithBackground 
                color="#29aaf4" 
                onPress={this.loginHandler}>Submit</ButtonWithBackground>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingTextByB: {
        backgroundColor: 'rgba(255,255,255,.6)',
        borderColor: 'black',
        borderWidth: 1
    },
    ImageBackground: {
        flex: 1,
        width: '100%'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#eee',
        borderColor: '#bbb'
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width:  '45%'
    },
    portraitPasswordWrapper: {
        width:  '100%'
    }
})

export default AuthScreen;
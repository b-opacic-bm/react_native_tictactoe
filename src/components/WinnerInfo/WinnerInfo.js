import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class WinnerInfo extends Component {

    state = {
        winnerInfo: null
    }

    componentWillMount() {
        AsyncStorage.getItem("winner").then(winner => {
            this.setState({
                winnerInfo: winner
            })
        }).done();
    }

    render() {

        

        return(
            <View style={styles.absWrapper}>
                <View style={styles.container}>
                    <View style={styles.opacityContainer}>
                        <View style={styles.asyncInfoWrapper}>
                            <Text style={styles.infoWinnerText}>Last Winner:</Text>
                            <Text style={[styles.infoWinnerText, {fontSize: 24, color: "orange"}]}>{this.state.winnerInfo ? (this.state.winnerInfo == '"X wins!"' ? "Player X" : "Player O") : null}</Text>
                        </View>
                        <TouchableOpacity onPress={this.props.btnPress}>
                            <View style={styles.backButton}>
                                <View style={styles.iconStyle}>
                                <Icon size={24} color="teal" name="md-arrow-round-back"/>
                                </View>
                                <Text style={styles.buttonText}>
                                    Go Back
                                </Text>
                                </View>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    absWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "transparent"
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    opacityContainer: {
        padding: 40,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: 5
    },
    asyncInfoWrapper: {
        backgroundColor: "transparent",
        marginBottom: 50
    },
    infoWinnerText: {
        color: "teal",
        fontSize: 30,
        textAlign: "center"
    },
    backButton: {
        borderWidth: 3,
        borderColor: "teal",
        backgroundColor: "transparent",
        paddingLeft: 10,
        borderRadius: 10,
        flexDirection: "row"
    },
    buttonText: {
        color: "teal",
        fontSize: 24,
        paddingLeft: 10,
        paddingRight: 2
    },
    iconStyle: {
        paddingTop: 4
    }
})

export default WinnerInfo;
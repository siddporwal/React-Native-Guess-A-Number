import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';


const StartScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const inputNumberHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    const resetHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };
    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be between 1 and 99.',
                [{ text: 'Okay', style: "destructive", onPress: resetHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();

    };
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text>
                You Selected
            </Text>
            <NumberContainer>
                {selectedNumber}
            </NumberContainer>
            <Button title="START GAME" onPress={()=>props.onStartGame(selectedNumber)}/>
            </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <View style={styles.inputContainer}>
                        <Text >Select a Number</Text>

                        <TextInput style={styles.input} keyboardType="number-pad" maxLength={2} blurOnSubmit onChangeText={inputNumberHandler} value={enteredValue} />

                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Reset" onPress={resetHandler} color='#c717fc' />
                            </View>
                            <View style={styles.button}>
                                <Button title="Confirm" onPress={confirmInputHandler} color='#f7287b' />
                            </View>

                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: "center"
    },
    button: {
        width: 80

    },
    input: {
        width: 30,
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    },
    summaryContainer:{
        marginTop:20,
        alignItems:"center"
    }
});
export default StartScreen;

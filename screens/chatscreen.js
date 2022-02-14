import React, { Component } from "react";
import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from "react-native-dialogflow";
import { dialogflowConfig } from "../assets/env";
import { authentication, db } from '../firebase/firebase-config';
import { deviceHeight } from "../Dimen";
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';

const botAvatar = require('../assets/icons/bot.png')
const BOT = {
    _id: 2,
    name: 'Mr.Bot',
    avatar: botAvatar,
}


class Chatbot extends Component {

    state = {
        messages: [
            { _id: 2, text: 'I am your personal assistant.', createdAt: new Date().getTime(), user: BOT },
            { _id: 1, text: 'Welcome to Swasthya Upchara.', createdAt: new Date().getTime(), user: BOT },],
        id: 1,
        name: '',
    };

    componentDidMount() {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id,
        );


    }

    handleGoogleResponse(result) {
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
    }

    sendBotResponse(text) {
        let msg;

        msg = {
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date().getTime(),
            // image: 'https://cdn-icons-png.flaticon.com/128/266/266286.png',
            user: BOT,

        }


        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, [msg])
        }));
    }



    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages)

        }))
        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
            message,
            (result) => this.handleGoogleResponse(result),
            (error) => console.log(error)
        )
    }

    onQuickReply(quickReply) {

        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, quickReply)

        }))
        let message = quickReply[0].value;

        Dialogflow_V2.requestQuery(
            message,
            (result) => this.handleGoogleResponse(result),
            (error) => console.log(error)
        )

    }

    renderBubble = props => {
        return <Bubble  {...props} textStyle={{ left: { color: 'white' }, right: { color: 'white' } }} wrapperStyle={{ left: { backgroundColor: '#3b4b21' }, right: { backgroundColor: 'olive' } }} />

    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', height: deviceHeight }}>
                <GiftedChat messages={this.state.messages}
                    onSend={(message) => this.onSend(message)}
                    onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
                    renderBubble={this.renderBubble}
                    user={{ _id: 1 }}
                />

            </View>

        );
    }
}


export default Chatbot;
import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import config from '../config/config'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const generateColor = () => {
    const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
};

class settingscreen extends React.Component {
    state = {
        news: []
    }

    componentDidMount() {
        fetch(`https://newsapi.org/v2/everything?q=ayurveda&sortBy=publishedAt&apiKey=${config.API_KEY}`,
        )
            .then(res => res.json())
            .then(response => {
                this.setState({
                    news: response.articles
                })
                console.log(this.state.news.length)

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {


        return (
            <View style={{ height: deviceHeight - 50 }}>

                <View style={{ alignItems: 'center' }}>
                    {
                        this.state.news.length === 0 ? (
                            <ActivityIndicator color='black' size='large' style={{ height: deviceHeight, width: deviceWidth, alignItems: 'center', justifyContent: 'center' }} />) : (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {
                                    this.state.news.map((news, index) => (
                                        <TouchableOpacity key={index}
                                            onPress={() => {
                                                this.props.navigation.navigate('WebView', {
                                                    url: news.url
                                                })
                                                // console.log(news)
                                            }}
                                        >

                                            <View key={index} style={{ margin: 10, display: 'flex', flexDirection: 'row', backgroundColor: generateColor(), borderRadius: 10, elevation: 4, width: deviceWidth - 30, marginVertical: 7, padding: 10 }}>
                                                {news.urlToImage == null ? <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5122/5122821.png' }} style={{ height: 100, width: 100, borderRadius: 10, marginBottom: 10 }} /> : <Image source={{ uri: `${news.urlToImage}` }} style={{ height: 100, width: 100, borderRadius: 10, marginBottom: 10 }} />}
                                                <Text style={{ textAlign: 'justify', width: deviceWidth - 140, padding: 10, color: 'white' }}>{news.title}</Text>
                                            </View>

                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>)
                    }

                </View>
            </View >
        )
    };
}

export default settingscreen;

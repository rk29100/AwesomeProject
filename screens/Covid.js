import React from 'react';
import { View, ScrollView } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceHeight, deviceWidth } from '../Dimen';


const DATA = [
    {
        id: 1,
        desc: '\n1. Drink warm water throughout the day. \n\n 2. Daily practice of Yogasana, Pranayama and meditation for at least 30minutes as advised by Ministry of AYUSH (#YOGAatHome #StayHome #StaySafe).\n\n3. Spices like Haldi (Turmeric), Jeera (Cumin), Dhaniya (Coriander) and Lahsun (Garlic) are recommended in cooking. ',
        title: 'General Measures',
    },
    {
        id: 2,
        desc: '\n1. Take Chyavanprash 10gm (1tsf) in the morning. Diabetics should take sugar free Chyavanprash.\n\n2. Drink herbal tea / decoction (Kadha) made from Tulsi (Basil), Dalchini (Cinnamon), Kalimirch (Black pepper), Shunthi (Dry Ginger) and Munakka (Raisin) - once or twice a day. Add jaggery (natural sugar) and / or fresh lemon juice to your taste, if needed.\n\n3. Golden Milk- Half tea spoon Haldi (turmeric) powder in 150 ml hot milk - once or twice a day.',
        title: 'Ayurvedic Immunity Promoting Measures',
    },
    {
        id: 3,
        desc: '\n1. Nasal application - Apply sesame oil / coconut oil or Ghee in both the nostrils (Pratimarsh Nasya) in morning and evening.\n\n2. Oil pulling therapy- Take 1 table spoon sesame or coconut oil in mouth. Do not drink, Swish in the mouth for 2 to 3 minutes and spit it off followed by warm water rinse. This can be done once or twice a day.',
        title: 'Simple Ayurvedic Procedures',
    },
    {
        id: 4,
        desc: '\n1. Steam inhalation with fresh Pudina (Mint) leaves or Ajwain (Caraway seeds) can be practiced once in a day.\n\n2. Lavang (Clove) powder mixed with natural sugar / honey can be taken 2-3 times a day in case of cough or throat irritation. \n\n3. These measures generally treat normal dry cough and sore throat. However,it is best to consult doctors if these symptoms persist.\n',
        title: 'During dry cough / sore throat',
    },

];

const generateColor = () => {
    const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
};


const Covid = () => {
    return (
        <View style={{ height: deviceHeight }}>
            <ScrollView>
                {DATA.map((data, index) => {
                    return (
                        <View key={index} style={{ margin: 10, backgroundColor: generateColor(), borderRadius: 10, elevation: 4, width: deviceWidth - 30, marginVertical: 7, padding: 10 }}>
                            <Title style={{ marginTop: 10, color: 'white' }}>{data.title}</Title>
                            <Paragraph style={{ color: 'white' }}>{data.desc}</Paragraph>
                        </View>

                    );
                })}
            </ScrollView>
        </View>
    )
}

export default Covid;

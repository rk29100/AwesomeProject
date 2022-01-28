import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Turmeric milk,Masala chai,ginger,honey.',
    title: 'Cough',
  },
  {
    id: 2,
    desc: ' put a few drops of the oil on the towel and keep it beside you when you sleep. Position the napkin so that you can breathe in the aroma.',
    title: ' Asthma',
  },
  {
    id: 3,
    desc: 'Cinnamon is the perfect remedy to cure hypertension problems. Home remedies for high blood pressure with cinnamon can work well as it aids in better blood flow. ',
    title: 'Hypertension',
  },
  {
    id: 4,
    desc: 'Have adequate salt,Drink more fluids,Caffeine helps',
    title: 'Low blood pressure',
  },
  {
    id: 5,
    desc: '1. Add 1 teaspoon of salt to a glass of warm water. Mix well until the salt dissolved thoroughly.Gargle with it 2 or 3 times daily until your congestion clears.\n\n2. Add 2 teaspoons of organic raw, unfiltered apple cider vinegar to a cup of warm water. Mix in 1 teaspoon of raw honey. Drink this solution2 to 3 times a day for a week.',
    title: 'Chest Congestion',
  },
];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const chest = ({ navigation }) => (
  <View style={{ height: deviceHeight - 100 }}>
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

);

export default chest;
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Dissolve Epsom salt in warm water and soak a compress in it. Apply the compress to the area for 20 minutes at a time.',
    title: 'Boils',
  },
  {
    id: 2,
    desc: 'Take two teaspoons of vinegar with honey in water and drink twice and thrice a day until sensation and ringing stopped in your ear.',
    title: ' Tinnitus',
  },
  {
    id: 3,
    desc: 'Avoid consuming foods or liquids that are high in salt or sugar,onsuming more fluids each day, including water, milk, and low-sugar fruit juices',
    title: 'Meniere’s Disease',
  },
  {
    id: 4,
    desc: 'Keep External Ear Dry,Rinse Ear With Normal Saline Drops Or Distil Water,Removal of Ear Wax',
    title: 'Otomycosis',
  },
  {
    id: 5,
    desc: '1. Boil three or four basil leavesin one cup of warm milk. Inhale the smell and drink this healthy tonic daily before going to bed. Do this for at least a few weeks.\n\n2. Slightly heat two teaspoon of seasame oil. Mix in one-half teaspoon each of powdered cinnamon and cardamom. Gently massage your head with this oil and leave it on for few hours. Do this several times aa week for a few weeks.',
    title: 'Dizziness Vertigo',
  },
  {
    id: 6,
    desc: '1. Crush a few basil leaves and extract the juice. Put three or four drops of this juice in the aching ear. Repeat once or twice a day.\n\n2. Putting moist heat around an infected ear can work as a great pain reliver. Simply wrap a hot water bottle in a towel and press it against the aching ear for few minutes.',
    title: 'Earache',
  },
];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const ear = ({ navigation }) => (
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

export default ear;
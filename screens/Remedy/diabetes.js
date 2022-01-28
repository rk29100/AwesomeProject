import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Garlic: Since diabetics face a higher risk of developing a yeast infection – use garlic to combat the high-sugar environment that encourages yeast production.',
    title: 'Type 1 Diabetes',
  },
  {
    id: 2,
    desc: 'Taking apple cider vinegar before bedtime helps in bringing down the blood sugar level that raises after sleep.',
    title: 'Type 2 Diabetes',
  },
  {
    id: 3,
    desc: 'Exercise, proper diet plan For Prediabetes is useful',
    title: 'Pre-Diabetes',
  },
  {
    id: 4,
    desc: 'High-Fiber Diet,vitamin D,regular exercise, proper diet plan can treat Gestational Diabetes',
    title: 'Gestational Diabetes',
  },

  {
    id: 5,
    desc: '1. Cut off the ends of few okras and prick them in several places using a fork. Soak the okras in a glass of water overnight. In the morning, discard the okras and drink the water on an empty stomach.\n\n2. Mix one-half teaspoon each of ground bay leaves and turmeric and one-tablespoon of aloevera gel. Consume it twicw daily, before lunch and dinner.',
    title: 'Diabetes',
  },

];


const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};



const diabetes = ({ navigation }) => (
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

export default diabetes;
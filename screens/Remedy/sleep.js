import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: '1. Mindfulness meditation,yoga,exercise,Mantra repetition.\n\n2. Enjoy a cup of chamomile tea to induce sleep and relaxation. You can also sweeten it with a pinch of cinnamon and some honey.\n\n3. Eating a banana can be useful in combating insomnia because it contains an amino acid called tryptophan that helps raise serotonin levels, which help regulate sleep patterns. It also will elevate your mood and help regulate your appetite. Minerals like iron, calcium, and potassium present in this fruit also help with sleep.',
    title: 'Insomnia',
  },
  {
    id: 2,
    desc: '1.Add 1 tablespoon of grated ginger and a medium-size cinnamon stick to 1 cup of hot water. Boil it for a few minutes, strain and add some honey. Drink it daily before going to bed. Alternatively, mix 1 to 2 teaspoons of cinnamon powder in a cup of hot water. Drink it once daily. You can also prepare a paste of cinnamon powder and water and apply it on your forehand and chest. Leave it on for a few minutes, then rinse it off with water. Use as needed to open blocked passages. Note: Those who are taking other medications should consult a doctor before taking cinnamon.\n\n2. Add 1 tablespoon of raw honey to a glass of warm water and drink it daily before going to bed. Another option is to mix 1 teaspoon each of honey and black pepper powder in a glass of warm water. Sip it slowly before going to bed. To lose weight, drink a glass of warm water with 1 tablespoon of honey and the juice of half lemon on an empty stomach daily in the morning.',
    title: 'Sleep Apnoea',
  },
  {
    id: 3,
    desc: ' Hot bath or shower ',
    title: 'Restless legs syndrome',
  },
  {
    id: 4,
    desc: 'Drink a cup of lemon balm tea before sleeping to help you sleep well and feel more rested when you get up in the morning.',
    title: 'Narcolepsy',
  },
  {
    id: 5,
    desc: '1. Add one-half cup of Epsom salt to warm bath water. Stir for a few minutes so that the salt dissolves properly in the water. Soak in this bath for about 20 minutes. Follow this remedy a few times a week one hour before going to bed.\n\n2. Chew a handful of dry roasted almonds at least one hour before your bedtime. Alternatively, you can spread one tablespoon of almond butter on a piece of toast and have it with a glass of warm milk before going to bed.\n\n3. Drink one-half to one cup of tart cherry juice twice daily. If you do not like the juice, eat a handful of tart cherries a few hours before going to bed.',
    title: 'Sleep Disorder',
  }
];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const sleep = ({ navigation }) => (
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

export default sleep;
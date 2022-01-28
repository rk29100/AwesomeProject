import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Get enough sleep,Exercise,Talk about your problem to your trusted one,engage yourself in work which you love to do.',
    title: 'Depression',
  },
  {
    id: 2,
    desc: ' The fear, worry, and nervousness that comes with anxiety can be hard to manage ;Therapy and or medication could help,Drink chamomile tea.',
    title: 'Anxiety',
  },
  {
    id: 3,
    desc: 'Yoga,mind relaxation theropy,deep breathing',
    title: 'Phobias',
  },
  {
    id: 4,
    desc: 'As part of a healthy diet and a source of nutrients that the body requires, eating plenty of fresh fruits and vegetables is an essential form of treatment ',
    title: 'Bulimia',
  },
  {
    id: 5,
    desc: 'Eat Omega 3 fatty acid rich foods like cold-water fish, walnuts, spinach, broccoli, and kidney beans',
    title: 'Amnesia (Memory Loss)',
  },
  {
    id: 6,
    desc: '1. To boost your brainpower, drink sage tea as well as include sage in your soups, stews and salad dressings.\n\n2. Try to drink 2 to 3 cups of green tea daily to keep your brain sharp for years.\n\n3. You can take Ashwagandha herb in powdered, dried or fresh root form thatt can be chewed or brewed as tea.',
    title: 'Sharpen your brain',
  },
];


const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const mind = ({ navigation }) => (
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

export default mind;
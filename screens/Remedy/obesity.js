import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Take 4 lemons and squeeze to get the juice Consume the juice on an empty stomach every morning Then, drink a glass of water Do this method every day in a week.',
    title: 'Gallbladder disease and gallstones',
  },
  {
    id: 2,
    desc: 'Epsom salt bath.',
    title: 'Osteoarthritis',
  },
  {
    id: 3,
    desc: 'Take ginger internally by boiling water and steeping 2 teaspoons of gingerroot for 10 minutes. Enjoy 3 cups per day ',
    title: 'Gout',
  },
  {
    id: 4,
    desc: '1. Cabbage has been used as a remedy for weight loss and obesity. Being a cruciferous vegetable, it contains phytochemicals that help improve the imbalance of oestrogen metabolism.\n\n2. Drink about three to four cups of green tea daily to combat obesity. You can also combine it with ginger tea or cayenne pepper.\n\n3. Make cayenne pepper tea by pouring a glass of hot water over cayenne pepper (start with one tenth of a teaspoon or just a dash of cayenne pepper and gradually increase its quantity to one teaspoon). Squeeze the juice from half a lemon in it. Drink this tea regularly at least for a month. Mix two tablespoons each of lemon juice in 10 ounces of water (one glass contains 8 ounces). Stir in a dash of cayenne pepper and drink it. Use cayenne pepper and other spices, such as ginger, black pepper, and mustard seeds, generously in your meal preparations.',
    title: 'Over Weight'
  }
];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const obesity = ({ navigation }) => (
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

export default obesity;
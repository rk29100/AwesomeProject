import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceHeight, deviceWidth } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Fruits consisiting of vitamin C such as oranges, dates are useful to treat anemia.',
    title: 'Anemia',
  },
  {
    id: 2,
    desc: ' It can prevent vitamin B12 deficiency by eating enough meat, poultry, seafood, dairy products, and eggs.',
    title: 'B12 deficiency',
  },
  {
    id: 3,
    desc: 'Folate or folic acid is a component of Vitamin B-complex and helps alleviate the symptoms of thalassemia. As such, you may consume certain herbs which supplements folate in the diet. Some such herbs are red clover leaves, nettle leaves, and oatstraw, among others.',
    title: 'Thalassemia',
  },
  {
    id: 4,
    desc: '1. Carrot, palak and amla are good for eyes and help to prevent Glaucoma\n\n2. Grind some almond kernels and kali Mirch with water and filter. Finally add some sugar-candy and use this for Glaucoma treatment.',
    title: 'Glaucoma',
  },
  {
    id: 5,
    desc: '1. Add moderate amounts of organic coconut oil to your diet.\n\n2.Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate and flavonoids.',
    title: 'High Cholesterol',
  },
  {
    id: 6,
    desc: '1. Eat 2 to 3 raw garlic clovs daily on an empty stomach.\n\n2. Consume 2 to 3 tablespoons of extra-virgin coconut oil daily.\n\n3. The cocoa in dark chocolate helps improve blood flow.',
    title: 'Poor Circulation',
  },
  {
    id: 7,
    desc: '1. Eat 2 to 3 raw garlic clovs daily on an empty stomach.\n\n2. Eat daily magnesium-rich foods are almonds, avocados, bananas, beans, pumpkin seeds and green leafy vegetables.',
    title: 'High BP',
  },

];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const blood = ({ navigation }) => (
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

export default blood;
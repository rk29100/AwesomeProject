import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'apply mixture of Apple cider vinegar and honey at least once in the morning and one more time in the evening.',
    title: 'Cold sores ',
  },
  {
    id: 2,
    desc: ' Avoid eating acidic or spicy foods that will simply increase the pain and discomfort. 3 Apply ice on the canker sores.',
    title: 'Canker sores',
  },
  {
    id: 3,
    desc: 'Chewing garlic can help in relieving ',
    title: 'Thrush',
  },
  {
    id: 4,
    desc: 'Firstly, you take equal parts of lemon oil, tea tree oil, and peppermint oil;Then, you mix all these ingredients well in water now You can rinse your mouth with this water as a mouthwash to treat bad breath problem regularly.',
    title: 'Bad breath',
  },
  {
    id: 5,
    desc: '1. Applying aloevera gel or juice on the affected are alleviates pain, promotes healing, and works as a natural antiseptic. It also has antibacterial, antifungal, and antiviral properties.\n\n2. Boil one teaspoon of coriander seeds in a cup of water. Strain it and allow it to cool. Swish it around in your mouth. Repeat three or four times a day.',
    title: 'Mouth Ulcer',
  },
];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};



const mouth = ({ navigation }) => (
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

export default mouth;
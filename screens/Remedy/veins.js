import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Eat blueberries',
    title: 'Reticular Veins',
  },
  {
    id: 2,
    desc: '1. Massage your affected skin areas gently after applying undiluted apple cider vinegar.\n\n2. Add one teaspoon of cayenne pepper powder to a cup of hot water and stir it well. Drink this mixture three times a day for one or two months.\n\n3. Apply undiluted apple cider vinegar on the skin over the varicose veins and gently massage the area. Do it every day before going to bed and again in the morning. Follow this remedy for a few months to reduce the size of varicose veins. Add two teaspoons of apple cider vinegar to a glass of water and stir well. Drink the mixture twice a day for at least one month to see positive results.\n\n4. Boil a handful of chopped fresh parsley in one cup of water for five minutes. Remove from the heat, cover and allow the solution to cool to lukewarm. Then strain the solution. Add one drop each of rose and marigold essential oils. Put the solution in the refrigerator for several minutes. Using a cotton ball, apply the solution to the affected area. Do this daily for several months to see positive results. Also, try to eat raw parsley as often as you can.',
    title: 'Varicose Veins',
  },
  {
    id: 3,
    desc: 'Compress hot water bag ',
    title: 'Swelling of Legs and Ankles',
  },
  {
    id: 4,
    desc: 'Apply alovera gel',
    title: 'Ulcers and Open Sores',
  },
];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const veins = ({ navigation }) => (
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

export default veins;
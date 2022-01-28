import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Have soybeans, legumes, red grapes, kale,broccoli,apples,berrie, teasespecially green tea',
    title: 'Gastritis and Peptic Ulcers',
  },
  {
    id: 2,
    desc: 'Eat bananas',
    title: 'Gastric Outlet Obstruction',
  },
  {
    id: 3,
    desc: 'Half teaspoon of cinnamon powder in a glass of warm water. Drink this mixture twice a day to get the best results. ',
    title: 'Hiatal Hernia',
  },
  {
    id: 4,
    desc: 'Bitter herbs stimulate the stomach and therefore create more acid and digestive enzymes. Dandelion and gentian are examples of bitter herbs.',
    title: 'Achlorhydria',
  },
  {
    id: 5,
    desc: '1. Add 1 tablespoon of minced ginger root to 1half cups of water. Bring the water to a boil, cover and let it soak for 5 to 10 minutes. Strain and drink this tea 2 or 3 times a day. Alternatively, mix together 1 teaspoon each of dried ginger powder, cumin powder, cinnamon powder and honey and have it 2 or 3 times a day. Note: Those suffering from high blood pressure should avoid ginger in high amounts.\n\n2. Add 1 teaspoon each of dried chamomile flower and peppermint leaves to a cup of hot water. Allow it to soak for 5 to 10 minutes. Strain and drink the tea at least 2 or 3 times a day. You can also make chamomile tea using pre-packaged tea bags.',
    title: 'Diarrhoea',
  },
  {
    id: 6,
    desc: '1. Add 5 grams of dried marshmallow root to one cup of boiling water. Soak for five minutes and then strain. Drink this herbal tea three times per day. Another option is to add two tablespoons of dried marshmallow root to one quart of water. Let it sit overnight. The next morning, strain and drink the liquid several times a day. Note: Avoid marshmallow if you have diabetes.\n\n2. Add two to three teaspoons of dried chamomile to a cup of hot water. Cover and steep for five minutes. Strain and mix in one teaspoon of honey. Drink up to three cups of chamomile tea daily.',
    title: 'Diverticulosis',
  },
  {
    id: 7,
    desc: '1. Add one teaspoon of apple cider vinegar to a glass of water. Drink it twice daily. You can increase the dosage of apple cider vinegar up to two tablespoons per glass. If you have fluid retention in your legs, you can soak your feet in a warm foot bath made of equal parts of apple cider and warm water for about 10 minutes. It will also reduce foot odour.\n\n2. Boil a cup of water mixed with one teaspoon of powdered nettle root. Let it soak for about 10 minutes. Drink this tea three times a day until you see improvement.\n\n3. Boil a few raw onions in four cups of water. Add salt to taste and then strain the solution. Drink two or three cups of it a day for a few days.',
    title: 'Water Retention',
  },
];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const stomach = ({ navigation }) => (
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

export default stomach;
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Applying ice for 10-minute increments with a cloth-covered ice pack can also reduce inflammation.',
    title: 'Bunions',
  },
  {
    id: 2,
    desc: 'Maintaining good health and blood sugar control can help a person treat their diabetic neuropathy.',
    title: ' Diabetic Neuropathy',
  },
  {
    id: 3,
    desc: 'Washing the feet with antibacterial soap and keeping them clean and dry,Avoiding cutting the nails in a rounded pattern, as it can increase the risk of inward growth,Wearing shoes that fit well and do not have a pointy tip.',
    title: 'Ingrown Toenails',
  },
  {
    id: 4,
    desc: 'Resting the foot and applying ice can reduce inflammation. Non-steroidal anti-inflammatory drugs (NSAIDs), such as ibuprofen or naproxen sodium, can help with pain management.',
    title: 'Plantar Fasciitis',
  },
  {
    id: 5,
    desc: '1. Grind some mustard seeds and add them to half a bucket of warm water. Soak your feet in the water for 10-15 minutes and then pat dry your feet.\n\n2. Mix four drops each of eucalyptus oil, rosemary oil and two drops of papermint oil in hot water. Soak your feet in it for about 10 minutes.',
    title: 'Foot Pain',
  },
  {
    id: 6,
    desc: '1. Boil two black tea bags in three cups of hot water. Add some more water to lower the temperature of the solution. Soak your feet in it for 15-20 minutes. Do this daily for about a week.\n\n2. Put a few drops of lavender essential oil in warm water.soak your feet in it for 15-20 minutes. Repeat twice daily for a few days.',
    title: 'Smelly Feet',
  },
];


const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};



const feet = ({ navigation }) => (
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

export default feet;
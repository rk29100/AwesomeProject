import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Apply aloe vera gel,Keep your nails short',
    title: 'Nail psoriasis',
  },
  {
    id: 2,
    desc: 'Mix several drops of tea tree oil and 1 teaspoon of coconut oil or olive oil togetherapply the mixture over your infected toenails Wait for about 10 minutes and make use of a toothbrush to scrub the infected nails Follow this routine 2-3 times per day till you get satisfied results',
    title: 'Nail fungal infections',
  },
  {
    id: 3,
    desc: 'Soak in warm, soapy water Soaking the affected foot may help reduce swelling and ease pain. ',
    title: 'Ingrown toenails',
  },
  {
    id: 4,
    desc: 'Massage with coconut oil,Soak in apple cider vinegar',
    title: 'Brittle splitting nails',
  },
  {
    id: 5,
    desc: '1. Take a little bit of extra-virgin coconut oil and rub it gently on the affected toenail.\n\n2. Mix four to five drops of aregano oil in two teaspoons of extra-virgin olive oil. uUse a cotton ball to apply the solution on the infected toenail. Leave it on for 10 minutes. Use a toothbrush to gently scrub away the uppermost layer of the nail. Then rinse it off with lukewarm water. Follow this remedy at least once daily for three weeks.',
    title: 'Toenail Fungus',
  },
  {
    id: 6,
    desc: '1. To strengthen and shine nails, combine 2 teaspoon salt, 2 teaspoon castor oil, and 1 teaspoon wheat germ oil and mix thoroughly. Pour into bottle. Shake before using. To use, rub a small amount into your nails. Leave on 3-5 minutes and tissue off. Follow up with more castor oil, if desired.\n\n2. Slightly warm some coconut oil and apply it on each nail. Massage gently and thoroughly for five minutes. This will improve blood circulation and keep the nails moisturized. Follow this remedy two to three times daily. Another option is to mix one-quarter cup of warm coconut oil and a little lemon juice in a bowl. Soak your nails in this solution for 10 minutes before going to bed. Wear gloves overnight for best results. Follow either of these remedies for several weeks until your nails become healthy and strong. Along with coconut oil, you can also use olive oil to treat brittle nails.',
    title: 'Weak or brittle Nails',
  },
];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const nail = ({ navigation }) => (
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

export default nail;
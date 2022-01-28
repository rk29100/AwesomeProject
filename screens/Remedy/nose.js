import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Add 3 drops of pine or rosemary oil with 3 drops of peppermint, and 2 drops of eucalyptus oil to a steaming hot bowl of water or add 3 drops of rosemary with 1 drop of thyme and peppermint oil. With your face down over the water, drape a towel over the back of your head and inhale the steam, this will help in clearing a blocked nasal passage.',
    title: 'Sinusitis',
  },
  {
    id: 2,
    desc: 'Ginger Tea helps reduce inflammation of the nasal mucosa.',
    title: 'Allergic rhinitis (hay fever) and nasal polyps',
  },
  {
    id: 3,
    desc: 'Holding a cold compress against your nose for a few minutes can help constrict the tiny blood vessels in your nose that are bleeding. The coldness will support the nose’s interior blood vessels to narrow. ',
    title: 'Nosebleeds Rhinitis',
  },
  {
    id: 4,
    desc: 'Put a few drops of the Eucalyptus oil on a damp handkerchief, hold it over your nose and breathe it in deeply for a few seconds. Do this multiple times a day for best results. Before bed and early in the morning are the most beneficial times to do this.',
    title: 'Deviated Septum',
  },
  {
    id: 5,
    desc: '1. Mix 1 teaspoon of sea salt with half cup of water. Pour it into a spray bottle. Lean your head back and breathe the solution a few times into the nasal cavities, then let it drain out.\n\n2. Place half teaspoon of extra-virgin of coconut oil in a small microwave-safe bowl and warm it up for a few seconds. Using cotton swabs, apply the oil generously inside each nostril, so that there is a good thorough coating. Apply it 2 or 3 times a day, especially before going to bed. You can also use extra-virgin olive oil in place of coconut oil to treat nasal passage dryness.\n\n3. Pour hot water into a large bowl. Add a few drops of an essential oil of your choice. Cover your head with a towel and inhale the steam from the bowl for about 10 minutes. Repeat 2 to 4 times a day. Even a hot, steamy shower will allow steam to circulate in your nasal cavity.',
    title: 'Dry Nose'
  }
];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const nose = ({ navigation }) => (
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

export default nose;
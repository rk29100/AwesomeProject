import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: 'Chew Ginger.',
    title: 'Tooth Decay',
  },
  {
    id: 2,
    desc: 'Brushing your teeth twice a day',
    title: 'Gum (Periodontal) Disease',
  },
  {
    id: 3,
    desc: ' eat oranges ',
    title: 'Mouth Sores',
  },
  {
    id: 4,
    desc: 'An apple a day also keeps yellow teeth away!',
    title: 'Yellow teeth',
  },
  {
    id: 5,
    desc: '1. Add 1 teaspoon of salt or refined salt to a glass of lukewarm water. Mix it until the salt dissolves completely. Rinse your mouth with this solution. Do it 2 or 3 times a day to clear the infection and reduce discomfort and pain.\n\n2. Also, extract fresh peppermint juice from the leaves and apply it on the affected tooth.\n\n3. Another option is to mix 1 teaspoon of raw, unfiltered apple cider vinegar with a glass of water and drink it twice daily.',
    title: 'Abscessed Tooth',
  },
  {
    id: 6,
    desc: '1. Add 1/2 to 3/4 teaspoon of salt to a glass of lukewarm water and mix well. Swish the solution in your mouth for up to 30 seconds. Spit out the solution. Repeat two to three times per day.\n\n2. Add up to three drops of tea tree oil to a cup of warm water. Swish the solution in your mouth for up to 30 seconds. Spit out.\n\n3. Boil 1 to 2 cups of water. Add 2 tablespoons of fresh sage or 1 teaspoon of dried sage to the water. Let it simmer 5 to 10 minutes. Strain and let the water cool. Use the solution to rinse two to three times per day.',
    title: 'Gingivitis',
  },
  {
    id: 7,
    desc: '1. At the first sign of a toothache, chew raw onion for a few minutes to relieve the pain. If you are not able to chew it, place a piece of raw onion directly on the bad tooth or gum.\n\n2. Dip a cotton swab in vanilla extract and dab it on the affected area. Do this a few times a day until you get relief.\n\n3. Grind two whole cloves. Mix it in a little olive oil or any vegetable oil and apply on the affected tooth. Another option is to dab a cotton ball in clove oil and rub it directly on the sore tooth. Or, you can mix a few drops of clove oil in half a glass of water and use it as a mouth rinse.  ',
    title: 'Toothache and Mouth Pain',
  },

];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};



const teeth = ({ navigation }) => (
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

export default teeth;
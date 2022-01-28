import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: '1. Drink ginger tea\n\n2. Boil one glass of water with a handful of mint leaves. Allow it to boil until the water is reduced to half the quantity. Strain it, add one teaspoon of honey and drink it while it is still warm. Drink this soothing drink two or three times a day for a few days. You can also gargle with mint flavoured mouthwash several times a day for as long as you have tonsillitis.\n\n3. Boil three dried figs in water and mash them. Eat it with one tablespoon of honey two or three times a day for several days. Alternatively, boil and mash some fresh figs. Mash the figs in the water you have used for boiling them. Apply this paste on the outer part of your throat. Allow it to air dry, and then rinse it off with warm water. Repeat once daily to relieve pain from tonsillitis.\n\n4. Add two tablespoons of fenugreek seeds to two to three cups of water. Allow it to simmer for 30 minutes. Strain and let it cool. Gargle with it for at least 30 seconds, and then spit it out. Repeat twice daily until your tonsillitis goes away.',
    title: 'Tonsillitis',
  },
  {
    id: 2,
    desc: 'Take hot water steam',
    title: ' Croup ',
  },
  {
    id: 3,
    desc: ' Gargle warm salt water ',
    title: 'Laryngitis',
  },
  {
    id: 4,
    desc: '1. Add 1 tablespoon of raw honey to a glass of warm water or milk and drink it slowly. Repeat a few times a day. This drink will have a soothing effect on the throat. Alternatively, mix equal quantities of honey, ginger juice, and pomegranate juice. Consume 1 tablespoon of this mixture 2 or 3 times a day. Before going to bed, consume 1 to 2 teaspoons of raw honey with a little cinnamon powder.\n\n2. Cut fresh ginger into small slices and crush them slightly. Put them in a cup of water and bring it to a boil. Drink it 3 or 4 times a day. Another option is to chew fresh raw ginger on and off throughout the day.',
    title: 'Cough',
  },
  {
    id: 5,
    desc: '1. Add one tablespoon of apple cider vinegar and one teaspoon each of lemon juice and honey to a cup of warm water and drink it slowly. Do it two or three times a day. Soon you will get relief from the pain and inflammation. You can also make a gargle solution with apple cider vinegar. Mix one teaspoon of salt and one tablespoon of apple cider vinegar in one cup of warm water. Gargle with it several times a day.\n\n2. Add one tablespoon of dried marshmallow root to one cup of boiling water and soak it for about half an hour. Strain the solution, add some honey and drink it. You can have three cups of this herbal tea in a day.\n\n3. Add one teaspoon each of cinnamon powder and black pepper powder to a glass of warm water. You may also add cardamom. Strain the solution and gargle with it two to three times a day. Another option is to mix a few drops of cinnamon oil and one teaspoon of pure honey. Eat this two times a day to get relief from the pain and inflammation associated with a sore throat.',
    title: 'Sore Throat (Throat Infection)',
  },

];

const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};


const throat = ({ navigation }) => (
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

export default throat;
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceWidth, deviceHeight } from '../../Dimen';

const DATA = [
  {
    id: 1,
    desc: ' use Teatree oil a scarce amount (1 part for 9 parts water) Dab it with a cotton ball on your scalp and drink lots of water.',
    title: 'Acne',
  },
  {
    id: 2,
    desc: ' add one teaspoon of turmeric to a warm glass of either milk or water. Drink this mixture twice a day until you start to see some obvious results.',
    title: 'Rosacea',
  },
  {
    id: 3,
    desc: 'Apply alovera gel ',
    title: 'Blister',
  },
  {
    id: 4,
    desc: 'Making a paste of baking soda and water and apply on infected place',
    title: 'Hives',
  },
  {
    id: 5,
    desc: 'apply mixture of coconut oil and alovera gel',
    title: 'Scars',
  },
  {
    id: 6,
    desc: '1. Apply neem oil on the affected area once daily for a few days until the infection clears. You can also apply one-half teaspoon of neem oil mixed with one cup of aloe vera gel. Combine equal parts of crushed neem leaves, turmeric powder and sesame oil. Apply this paste on the affected area.\n\n2. Boil one cup of water mixed with five to six teaspoons of liquorice root powder. Let it simmer for 20 minutes. Strain and cool the solution. Soak a cotton ball in the liquid and dab it on the affected area. Do this three times a day until you see improvement.\n\n3. Crush two garlic cloves. Rub them on the ringworm rash several times a day. Do this for four to five days or until the condition improves.',
    title: 'Ring Worms'
  },
  {
    id: 7,
    desc: '1. Extract the gel from an aloe vera leaf. Smear it on the affected skin. Leave it on for 15 to 20 minutes. Wash it off with lukewarm water. Do this once daily.\n\n2. Keep on drinking water at regular intervals. Lemon water, infused water, and fruits and vegetables rich in water content are also good options for hydration.\n\n3. Rub some rose water on the affected skin before going to bed. Another option is to mix 1 cup of rose water with 1 tablespoon each of lemon juice and almond oil. Rub it on the loose skin and massage gently. Do it a few times a week. ',
    title: 'Skin Tightening'
  },
  {
    id: 8,
    desc: '1. Apply extra-virgin coconut oil to the affected areas. Massage for 5 minutes to help the oil penetrate deep into the skin. There is no need to rinse it off. Allow any remaining oil to be naturally absorbed by your skin. Do it 2 or 3 times a day.\n\n2. Apply some pure honey to the affected area. Massage gently to help the honey penetrate deep into the skin. Allow it to sit for 10 to 15 minutes, then rinse it off using cool or lukewarm water. Repeat 2 or 3 times daily.',
    title: 'Vitiligo (White spots on face)'
  },
  {
    id: 9,
    desc: '1. Extract the translucent gel from an Aloe vera leaf. Crush and apply it to the affected area. Leave it on until it is completely absorbed by the skin. Repeat three times daily for several weeks. You can use this Aloe vera remedy to treat eczema, dermatitis and other skin allergies as well.\n\n2. Liberally apply glycerine on the affected area. Leave it on for as long as possible. Use it two or three times daily for a few weeks or until you are satisfied with the results.\n\n3. Mix equal amounts of garlic oil and aloe vera gel. Apply it to the affected area. Leave it on for about 15 minutes before washing it off. Do this daily until you see improvement. You can also eat two or three crushed garlic cloves daily. For best results, let the crushed garlic cloves sit for about 10 minutes before eating them. If you do not like the taste or smell of garlic, you can take it with milk. ',
    title: 'Psoriasis'
  },
  {
    id: 10,
    desc: '1. Cut open an aloe vera leaf and extract the fresh gel. Apply the gel thoroughly on the affected area and gently massage for one or two minutes. Leave it on for 15 to 20 minutes, and then wash it off with lukewarm water. Follow this remedy twice daily for a few weeks.\n\n2. Extract the juice from one fresh lemon. Apply it on the affected areas and gently rub it around for one or two minutes. Leave it on for 20 minutes before rinsing it off with lukewarm water. Follow this remedy twice daily and you should see improvement within three weeks.',
    title: 'Melasma'
  },
  {
    id: 11,
    desc: '1. Add one tablespoon of dried chamomile flowers to one cup of boiling water. Let it soak for at least 15 minutes. Strain and allow the solution to cool. Soak a clean piece of cloth in it and place it on the affected skin for 10 to 15 minutes. Use this treatment three times a day until symptoms subside. Alternatively, you can mix a few drops of chamomile essential oil in one teaspoon of olive oil. Apply it on the affected area and massage gently for five to 10 minutes. Repeat at least twice daily until the problem is solved.\n\n2. Add one to two cups of colloidal oatmeal to a bathtub filled with lukewarm water. Soak in it for at least 15 to 20 minutes. Pat dry your skin gently, and then apply a mild moisturizer. Alternatively, add one tablespoon of cold milk to two tablespoons of colloidal oatmeal to make a thick paste. Apply this paste on the affected area, massaging gently for a minute. Allow the paste to sit for 15 to 20 minutes, and then rinse it off with cool water.',
    title: 'Eczema'
  },
];



const generateColor = () => {
  const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};



const skin = ({ navigation }) => (
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

export default skin;
import React from 'react';
import { View, ScrollView } from 'react-native';
import { List, Title, Card, Paragraph } from 'react-native-paper';
import { deviceHeight, deviceWidth } from '../Dimen';


const DATA = [
    {
        id: 1,
        desc: '\nThe best time to go to sleep is during the kapha time in the evening. Kapha has the quality of heaviness and so it will be easiest to fall asleep before 10pm. If we delay going to bed until after 10pm, we move into pitta time when stimulation wakes us up.\n\nThe best time to wake up is just before sunrise while still in the vata time. It is a time of lightness, and therefore easier to wake with energy. It is also the best time for meditation. If you wake up during the kapha time of the morning, you may feel a heaviness that carries on throughout the day. ',
        title: 'Sleeping and Waking Up',
    },
    {
        id: 2,
        desc: '\nA short walk outside first thing in the morning while appreciating nature is wonderful for our physical and mental state. Taking a walk on the grass in bare feet allows the morning dew to soak into the soles of our feet and lower our body’s pH level.',
        title: 'After Waking Up',
    },
    {
        id: 3,
        desc: '\nIt is best to empty your bladder and colon first thing in the morning. If this is left until later in the day, or if elimination is not possible every day, toxins that should be eliminated will be re-absorbed back into your system. If elimination is not possible, see your ayurvedic vaidya for some natural remedies.',
        title: 'Elimination',
    },
    {
        id: 4,
        desc: '\nDuring the night, toxins build up in our mouth. They must be eliminated in the morning to prevent them from re-entering your system. Soon after waking, brush and floss your teeth and scrape your tongue with a tongue scraper – don’t scrape your tongue with your toothbrush as this may injure your tongue. Oil pulling or gargling with warmed sesame oil is also very effective for removing toxins.',
        title: 'Oral Care',
    },
    {
        id: 5,
        desc: '\nDryness of the skin and tissues is one of the main reasons for premature ageing. Our skin is our largest sense organ and is exposed to all the elements, so it makes sense to protect it. Daily massage with warm sesame oil is wonderful nourishment for our skin and nervous system. Do this each morning or as often as you can, at least once per week, and leave the oil on for 20-30 minutes before having a warm shower.',
        title: 'Oil Massage',
    },

    {
        id: 6,
        desc: '\nExercise is essential for general good health and gives us energy throughout the day. You should choose an exercise regime that is compatible with your body type. To be effective, not all exercise must be vigorous. Yoga or tai-chi and similar gentle exercise can be enormously beneficial.',
        title: 'Exercise',
    },
    {
        id: 7,
        desc: '\nMeditation calms our mind and increases our ability to cope with the daily events that can cause stress to our body and mind. Even a short meditation (ten minutes) every morning and evening can significantly improve your focus and energy during the day, and the quality of our sleep at night.',
        title: 'Meditation',
    },
    {
        id: 8,
        desc: '\nYou should always try and have something for breakfast. Our bodies need the nutrients to start our day and kick-start all the functions that supply our energy. Even if you do not feel hungry, you can have something small and light, followed by a more substantial snack later in the morning. Some good breakfast options include porridge or fresh vegetable juices. Avoid fruit smoothies that combine milk and fruit as they are incompatible!',
        title: 'Breakfast',
    },
    {
        id: 9,
        desc: '\nLunch time is during the pitta time of day. When the sun’s fire is strongest, our digestive fire is strongest. Lunch should be the main meal of the day containing (preferable plant-based) protein, grain (such as rice or quinoa) and vegetables. In summer, it is also the time of day when your body will be best able to digest raw foods like lettuce and sprouts. A short walk (5-10 minutes) after lunch will help the digestive process.',
        title: 'Lunch',
    },
    {
        id: 10,
        desc: '\nThe best time to have dinner is between 6-7pm, around the time of sunset. Eat a light meal in the evening as your digestion has weakened over the afternoon. Try to leave a gap of at least 2 hours between eating dinner and going to bed so digestion is complete before you sleep.',
        title: 'Dinner',
    },
    {
        id: 11,
        desc: 'The evening is a time to relax and spend time with your family and friends, winding down after the day. It is an important time to calm your nervous system before you go to bed. Meditation, listening to music, making light conversation, or taking an evening stroll are excellent ways to relax and unwind. Avoid using electronic devices, working, playing or socialising on the computer, or watching TV as these activities stimulate the nervous system and make sleep more difficult.',
        title: 'Going to Bed',
    },

];

const generateColor = () => {
    const colors = ['#556b2f', '#4d602a', '#445626', '#3b4b21', '#33401c', '#2b3618', '#222b13', '#1a200e', '#111509', '#080b05'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
};


const Daily = () => {
    return (
        <View style={{ height: deviceHeight }}>
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
    )
}

export default Daily;

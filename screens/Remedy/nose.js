import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import { List,Title,Card,Paragraph } from 'react-native-paper';

const DATA=[
    {
        id:1,
        desc:'Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day.',
        title:'Herbal tea',
    },
    {
        id:2,
        desc:'Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorbtionof iron from fruits and vegetables, eat them with a good source of vitamin C.',
        title:'Vitamin C',
    },
    {
        id:3,
        desc:'Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids.',
        title:'Fresh Orange Juice',
    },
    {
        id:4,
        desc:'Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels.It is full of soluble fiber. It reduces the absorbtion of cholesterol and lowers bad cholesterol levels.',
        title:'Oatmeal',
    },
    {
        id:5,
        desc:'Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month.',
        title:'Apple Cider Vinegar',
    },
];

const nose = ({navigation}) => (
    <ScrollView>
        {DATA.map((data,index)=>{
      return(
        <Card
        key={index} 
        style={{
    
          alignItems: 'center',
     
        }}>
          
          <Card.Content>
              {/* <Image source={require('../../assets/icons/ayurveda.png')}/> */}
            <Title style={{marginTop:10}}>{data.title}</Title>
            <Paragraph>{data.desc}</Paragraph>
          </Card.Content>
        </Card>

      );
    })}
    </ScrollView>
   
  );
  
  export default nose;
import * as React from 'react';
import { List , Modal,Card,Title,Avatar} from 'react-native-paper';
import { View,Text,ScrollView, Alert,Image,StyleSheet,LogBox } from 'react-native';



const DATA=[{
  id:1,
  desc:'Blood',
  img:require('./Remedy/icons/blood.png'),
  title:'blood',
  arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:2,
    desc:'Chest',
    img:require('./Remedy/icons/chest.png'),
    title:'chest',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  
  {
    id:3,
    desc:'Diabetes',
    img:require('./Remedy/icons/diabetes.png'),
    title:'diabetes',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'
  },
  {
    id:4,
    desc:'Ear',
    img:require('./Remedy/icons/ear.png'),
    title:'ear',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:5,
    img:require('./Remedy/icons/feet.png'),
    desc:'Feet',
    title:'feet',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:6,
    img:require('./Remedy/icons/Mind.png'),
    desc:'Mind',
    title:'mind',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:7,
    img:require('./Remedy/icons/mouth.png'),
    desc:'Mouth',
    title:'mouth',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:8,
    img:require('./Remedy/icons/nail.png'),
    desc:'Nail',
    title:'nail',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:9,
    img:require('./Remedy/icons/nose.png'),
    desc:'Nose',
    title:'nose',

    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:10,
    img:require('./Remedy/icons/obesity.png'),
    desc:'Obesity',
    title:'obesity',

    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:11,
    img:require('./Remedy/icons/skin.png'),
    desc:'Skin',
    title:'skin',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:12,
    img:require('./Remedy/icons/sleep.png'),
    desc:'Sleep',
    title:'sleep',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:13,
    img:require('./Remedy/icons/stomach.png'),
    desc:'Stomach',
    title:'stomach',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:14,
    img:require('./Remedy/icons/teeth.png'),
    desc:'Teeth',
    title:'teeth',

    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:15,
    img:require('./Remedy/icons/throat.png'),
    desc:'Throat',
    title:'throat',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  {
    id:16,
    img:require('./Remedy/icons/veins.png'),
    desc:'Veins',
    title:'veins',
    arr:'1.	Herbal tea: Drink a cup of herbal tea mixed with 1/4 cup blackstrap molasses each day.This provides 80% of the iron needed in one day. \n \n 2.	Vitamin C: Your body absorbs iron from meats easier than fruits and vegetables.To aid in absorption of iron from fruits and vegetables, eat them with a good source of vitamin C. \n \n 3.	Fresh Orange Juice: Drinking three cups of fresh orange juice daily can help in reducing blood cholesterol levels naturally because it is rich in vitamin C, folate, and flavonoids. \n \n 4.	Oatmeal: Enjoying a bowl of oatmeal is an easy, yet effective way to reduce your cholesterol levels. It is full of soluble fibre. It reduces the absorption of cholesterol and lowers bad cholesterol levels. \n \n 5.	Apple Cider Vinegar: Mix one teaspoon of organic apple cider vinegar in a glass oof water. Drink this two or three times a day for at least a month. \n'

  },
  ];



const findscreen = ({navigation}) => {
  React.useEffect(() =>{
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  },[])
 
return (
  <View style={{height:675,backgroundColor:'white'}}>
    <View style={styles.container1}>
            <Text style={styles.title}>
                Home Remedies
            </Text>
            
        </View>
 <ScrollView style={{backgroundColor:'white'}}>
 
  <View style={{flex: 1, flexDirection: 'row',display:'flex',flexWrap:'wrap',marginTop:30}}>
    
    {DATA.map((data,index)=>{
      return(
        <Card
        key={index} 
        style={{
          height:100,
          width:170,
          alignItems: 'center',
          marginLeft:10,
          marginBottom:20,
          marginRight:10,
          ...styles.shadow
            
        }}

        // onPress={()=>{navigation && navigation.navigate('remedy',{screen:`${data.title}`})}}
        onPress={()=>{Alert.alert(`${data.desc}`,`${data.arr}`)}}

        >
           <Image style={{width:50,height:50,alignSelf:'center'}} source={data.img} />
          <Card.Content>
            <Title style={{marginTop:10}}>{data.desc}</Title>
          </Card.Content>
        </Card>

      );
    })}
 
  
  </View>
  
  </ScrollView>
  </View>
);
}

export default findscreen;

const styles=StyleSheet.create({
  shadow:{
      shadowColor:'#7F5DF0',
      shadowOffset:{
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius:4.5,
      elevation:5,
  },
  container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    container1: {
      height:70,
      backgroundColor:'white'
    },
    title: {
      alignSelf:'center',
      fontSize:45,
      marginBottom:5,
      marginTop:5,
      color:'#3D550C',
      borderColor: '#3D550C',
      borderRadius:5,
      borderWidth:5,
      paddingHorizontal:8
    
    },
});
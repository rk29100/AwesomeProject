import NestedListView, {NestedRow} from 'react-native-nested-listview'
import React from "react";
import {View,Text,StyleSheet, SafeAreaView, ScrollView, Linking} from 'react-native'

const data=[
  {
    name:'Nanded',
    list:[
      {
        name:'Vishwakar Ayurved & Panchakarm Hospital',
        address:'\n Near Sai hospital, Chikhalwadi Rd, near Tahsil Office, Nanded, Maharashtra 431601 \n',
        link:'https://www.google.com/maps/dir/19.1616017,77.320955/Vishwakar+Ayurved+%26Panchakarm+Hospital,+near+Sai+hospital,+Chikhalwadi+Rd,+near+Tahsil+Office,+Nanded,+Maharashtra+431601/@19.1582143,77.3133538,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd1d73ba8e90e2f:0x707bc6c7cfcdbfc5!2m2!1d77.3157501!2d19.153759',
        desc:'For directions click here.\n'
      },
      {
        name:'Government Ayurvedic Hospital ',
        address:'\nMohammed Ali Road, Hyder Bagh, Dashmesh Nagar, Harsh Nagar, Nanded, Maharashtra 431604 \n',
        link:'https://www.google.com/maps/dir/19.1616017,77.320955/Government+Ayurvedic+Hospital,+Mohammed+Ali+Road,+Hyder+Bagh,+Dashmesh+Nagar,+Harsh+Nagar,+Nanded,+Maharashtra+431604/@19.1560943,77.3113482,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd1d637babbd491:0xb3ca32be2d5856d9!2m2!1d77.3232052!2d19.1479356',
        desc:'For directions click here.\n'
      },
      {
        name:'Mundada Ayurved Hospital',
        address:'\nGowardhan Ghat Bridge Rd, opposite to Dr. Kardile Hospital, Borban Factory Area, Vazirabad, Nanded, Maharashtra 431601 \n',
        link:'https://www.google.com/maps/dir/19.1616017,77.320955/Mundada+Ayurved+Hospital,+Gowardhan+Ghat+Bridge+Rd,+opposite+to+Dr.+Kardile+Hospital,+Borban+Factory+Area,+Vazirabad,+Nanded,+Maharashtra+431601/@19.157502,77.3064223,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd1d6402870a461:0xd982efa203cb4657!2m2!1d77.3095548!2d19.1516561',
        desc:'For directions click here.\n'
      },
    ],

  },

  {
    name:'Pune',
    list:[
      {
        name:'Apoorva Ayurvedic Hospital & Panchakarma Center, Pune',
        address:'\nSahakar Nagar, Near Arnyeshwar Park, Maharashtra 411009 \n',
        link:'https://www.google.com/maps/dir/19.1616017,77.320955/Apoorva+Ayurvedic+Hospital+%26+Panchakarma+Center,+Pune,+Sahakar+Nagar,+Near+Arnyeshwar+Park,+Maharashtra+411009/@18.4619466,73.3529187,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2eaa585555569:0x6083affc42888613!2m2!1d73.8519813!2d18.4846696',
        desc:'For directions click here.\n'
      },
      {
        name:'Roopam Ayurveda Hospital & Panchakarma Centre  ',
        address:' \n 13, Sukhasagarnagar Road, Near Hiraman Bankar School,, Katraj, Pune, Maharashtra 411046 \n',
        link:'https://www.google.com/maps/dir/19.1616017,77.320955/Roopam+Ayurveda+Hospital+%26+Panchakarma+Centre,+13,+Sukhasagarnagar+Road,+Near+Hiraman+Bankar+School,,+Katraj,+Pune,+Maharashtra+411046/@18.8178698,73.3457837,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2eaea66cb6475:0x42b1c670df2d6f1c!2m2!1d73.8666455!2d18.4583376',
        desc:'For directions click here.\n'
      },
      {
        name:'Shree Vedvishwa Ayurveda Clinic ',
        address:'\nFR6X+27H, Mohan Nagar, Dhankawadi, Pune, Maharashtra 411043 \n',
        link:'https://www.google.com/maps/dir/19.1616017,77.320955/pune+ayurvedic+hospital/@18.4619466,73.352112,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2ebc7f3c6cc4f:0xcecb2eb52df9b789!2m2!1d73.8482188!2d18.4600574',
        desc:'For directions click here. \n'
      },
    ],

  },

  {
    
    name:'Nashik',
    list:[
      {
        name:'Ayushree Ayurvedic Hospital & Research Centre ',
        address:'\n 18, Sathe Baug, Mahatma Gandhi Road, Nashik, Maharashtra 422001 \n',
        link:'https://www.google.com/maps/dir/19.1616017,77.320955/nashik+ayurvedic+hospital/@19.0815682,73.3066893,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bddeba8e9b302d3:0xd559a5a1a8ff56e6!2m2!1d73.7850997!2d20.0049826',
        desc:'For directions click here.\n'
      },
      {
        name:'Vishvagandha Ayurved Hospital & Research Centre ',
        address:'\n1st Floor, Torna Palace, 7-B, Gangapur Rd, Manik Nagar, Nashik, Maharashtra 42201 \n',
        link:'https://www.google.com/maps/dir//nashik+ayurvedic+hospital/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bddeb90994d5e75:0x2970e81ebfa49038?sa=X&ved=2ahUKEwiLqb2HkPf0AhVb7nMBHfgqAvoQ9Rd6BAgEEAU',
        desc:'For directions click here.\n'
      },
      {
        name:'Sanjivani Ayurveda , Homoeopathy & Yog Research Center Nashik (Hospital)',
        address:'\n3 D.J.House, opposite College Road, Model Colony, Nashik, Maharashtra 422005 \n',
        link:'https://www.google.com/maps/dir//nashik+ayurvedic+hospital/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bddeb86f71977e3:0x34a19f3568740778?sa=X&ved=2ahUKEwjxvrekkPf0AhVs7XMBHQJ1BQ0Q9Rd6BAgQEAQ',
        desc:'For directions click here. \n'
      },
    ],

  },

  
  
]
 
export default App = () => {
  return (
  <View style={{height:675,backgroundColor:'white'}}>
 <View style={styles.container}>
            <Text style={styles.title}>
                Nearby Hospitals
            </Text>
            
        </View>
  <ScrollView style={{backgroundColor:'white'}}>
    
    <NestedListView
  data={data}
  getChildrenName={(node) => 'list'}
  // onNodePressed={(node) => alert('')}
  renderNode={(node, level) => (
    <NestedRow
      level={level}
    >
      <Text style={styles.texthead}>{node.name}</Text>
      <Text style={styles.textadd}>{node.address}</Text>
      <Text style={styles.textlink} onPress={ ()=> Linking.openURL(`${node.link}`)}>{node.desc}</Text>
    </NestedRow>
  )}
/>

</ScrollView>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  texthead:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    backgroundColor:'#4B5320',
   
  },
  textadd:{
    fontSize:15,
    color:'black',
    fontStyle:'italic',
  },
  textlink:{
    fontSize:12,
    color:'#0645AD',
    textDecorationLine:'underline',

  }
});
import NestedListView, { NestedRow } from 'react-native-nested-listview'
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Linking, Image, TouchableOpacity } from 'react-native'
import { Portal } from 'react-native-paper';

const data = [
  {
    name: 'Nanded',
    list: [
      {
        name: 'Vishwakar Ayurved & Panchakarm Hospital',
        address: '\n Near Sai hospital, Chikhalwadi Rd, near Tahsil Office, Nanded, Maharashtra 431601 \n',
        link: 'https://www.google.com/maps/dir/19.1616017,77.320955/Vishwakar+Ayurved+%26Panchakarm+Hospital,+near+Sai+hospital,+Chikhalwadi+Rd,+near+Tahsil+Office,+Nanded,+Maharashtra+431601/@19.1582143,77.3133538,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd1d73ba8e90e2f:0x707bc6c7cfcdbfc5!2m2!1d77.3157501!2d19.153759',
        desc: 'For directions click here.\n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Government Ayurvedic Hospital ',
        address: '\nMohammed Ali Road, Hyder Bagh, Dashmesh Nagar, Harsh Nagar, Nanded, Maharashtra 431604 \n',
        link: 'https://www.google.com/maps/dir/19.1616017,77.320955/Government+Ayurvedic+Hospital,+Mohammed+Ali+Road,+Hyder+Bagh,+Dashmesh+Nagar,+Harsh+Nagar,+Nanded,+Maharashtra+431604/@19.1560943,77.3113482,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd1d637babbd491:0xb3ca32be2d5856d9!2m2!1d77.3232052!2d19.1479356',
        desc: 'For directions click here.\n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Mundada Ayurved Hospital',
        address: '\nGowardhan Ghat Bridge Rd, opposite to Dr. Kardile Hospital, Borban Factory Area, Vazirabad, Nanded, Maharashtra 431601 \n',
        link: 'https://www.google.com/maps/dir/19.1616017,77.320955/Mundada+Ayurved+Hospital,+Gowardhan+Ghat+Bridge+Rd,+opposite+to+Dr.+Kardile+Hospital,+Borban+Factory+Area,+Vazirabad,+Nanded,+Maharashtra+431601/@19.157502,77.3064223,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd1d6402870a461:0xd982efa203cb4657!2m2!1d77.3095548!2d19.1516561',
        desc: 'For directions click here.\n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
    ],

  },

  {
    name: 'Pune',
    list: [
      {
        name: 'Apoorva Ayurvedic Hospital & Panchakarma Center, Pune',
        address: '\nSahakar Nagar, Near Arnyeshwar Park, Maharashtra 411009 \n',
        link: 'https://www.google.com/maps/dir/19.1616017,77.320955/Apoorva+Ayurvedic+Hospital+%26+Panchakarma+Center,+Pune,+Sahakar+Nagar,+Near+Arnyeshwar+Park,+Maharashtra+411009/@18.4619466,73.3529187,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2eaa585555569:0x6083affc42888613!2m2!1d73.8519813!2d18.4846696',
        desc: 'For directions click here.\n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Roopam Ayurveda Hospital & Panchakarma Centre  ',
        address: ' \n 13, Sukhasagarnagar Road, Near Hiraman Bankar School,, Katraj, Pune, Maharashtra 411046 \n',
        link: 'https://www.google.com/maps/dir/19.1616017,77.320955/Roopam+Ayurveda+Hospital+%26+Panchakarma+Centre,+13,+Sukhasagarnagar+Road,+Near+Hiraman+Bankar+School,,+Katraj,+Pune,+Maharashtra+411046/@18.8178698,73.3457837,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2eaea66cb6475:0x42b1c670df2d6f1c!2m2!1d73.8666455!2d18.4583376',
        desc: 'For directions click here.\n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Shree Vedvishwa Ayurveda Clinic ',
        address: '\nFR6X+27H, Mohan Nagar, Dhankawadi, Pune, Maharashtra 411043 \n',
        link: 'https://www.google.com/maps/dir/19.1616017,77.320955/pune+ayurvedic+hospital/@18.4619466,73.352112,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2ebc7f3c6cc4f:0xcecb2eb52df9b789!2m2!1d73.8482188!2d18.4600574',
        desc: 'For directions click here. \n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
    ],

  },

  {

    name: 'Nashik',
    list: [
      {
        name: 'Ayushree Ayurvedic Hospital & Research Centre ',
        address: '\n 18, Sathe Baug, Mahatma Gandhi Road, Nashik, Maharashtra 422001 \n',
        link: 'https://www.google.com/maps/dir/19.1616017,77.320955/nashik+ayurvedic+hospital/@19.0815682,73.3066893,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bddeba8e9b302d3:0xd559a5a1a8ff56e6!2m2!1d73.7850997!2d20.0049826',
        desc: 'For directions click here.\n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Vishvagandha Ayurved Hospital & Research Centre ',
        address: '\n1st Floor, Torna Palace, 7-B, Gangapur Rd, Manik Nagar, Nashik, Maharashtra 42201 \n',
        link: 'https://www.google.com/maps/dir//nashik+ayurvedic+hospital/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bddeb90994d5e75:0x2970e81ebfa49038?sa=X&ved=2ahUKEwiLqb2HkPf0AhVb7nMBHfgqAvoQ9Rd6BAgEEAU',
        desc: 'For directions click here.\n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Sanjivani Ayurveda , Homoeopathy & Yog Research Center Nashik (Hospital)',
        address: '\n3 D.J.House, opposite College Road, Model Colony, Nashik, Maharashtra 422005 \n',
        link: 'https://www.google.com/maps/dir//nashik+ayurvedic+hospital/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bddeb86f71977e3:0x34a19f3568740778?sa=X&ved=2ahUKEwjxvrekkPf0AhVs7XMBHQJ1BQ0Q9Rd6BAgQEAQ',
        desc: 'For directions click here. \n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
    ],

  },

  {
    name: 'Jalna',
    list: [
      {
        name: 'Darshan Ayurvedic Chikitsalaya',
        address: '\n 23, Hrushikesh Plaza, Rathchakra Chowk, Indiranagar \n',
        link: 'https://www.bing.com/maps?osid=4ea7c7d7-db4e-400a-b0ec-9cd14fc9d543&cp=19.971042~73.744485&lvl=14&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t 0253-2322100\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Shree Ayurvedic Specialist',
        address: '\n mate Shop, Near Vasco Chowk Nashik Road, Nashik Road\n',
        link: 'https://www.bing.com/maps?osid=2da7cbb9-c94b-4b11-98ab-03d472b163d1&cp=19.991113~73.7437&lvl=14&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t093250 74694\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Dr.Avhad Dhanvantari Ayurvedic hospital and infertility centre.',
        address: '\nSai Square Building, 3rd Floor, Beside Suyash Hospital, Mumbai Naka, Nasik \n',
        link: 'https://www.bing.com/maps?osid=54271947-65ee-41b9-a980-2c8f090c9d53&cp=20.009071~73.755081&lvl=14&imgid=4f745469-d15c-4c69-b736-e087c3cad6b4&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t080436 94605\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Arogya Shala Hospital',
        address: '\n3, Aayurved Mahavidyalay, Takle Nagar Panchavati\n',
        link: 'https://www.bing.com/maps?osid=f2123f34-7037-4bac-bc8c-fb942f8b5ed0&cp=20.003541~73.75521&lvl=14&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t0253 2516264\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
    ],
  },

  {
    name: 'Akola',
    list: [
      {
        name: 'AyurPrabha Multispeciality Ayurved Hospital',
        address: '\n Ram Nivas Civil Line Chowk Road, Akola  \n',
        link: 'https://www.bing.com/maps?osid=067c7ccf-d7f5-462f-a844-e8b65bcf9c29&cp=20.70661~77.004338&lvl=16&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t 0724 9598264\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Rathi Ayurved and Panchakarma clinic',
        address: '\n1st Floor, opp. RLT Science College Yamuna Sankul, Civil Line Rd, Akola\n',
        link: 'https://www.bing.com/maps?osid=a3346a85-742e-44e8-8e27-d156ed33992b&cp=20.706035~76.99754&lvl=16&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t 087759 95713\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Shree Vishwaswami Ayurvedic Clinic & Panchakarma Centre',
        address: '\nAbhinandan Building, Near Dr. Deepak More Hospital, Ram Nagar, Akola\n',
        link: 'https://www.bing.com/maps?osid=abe3b239-5fab-4abe-8f6d-6b9531fea3cf&cp=20.707434~76.98542&lvl=15&imgid=3e13acd0-3bb0-4c3b-b953-f541f9d4e5ee&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t089759 95711\n\n',
        calldesc: require('../assets/icons/phone.png')
      },

    ],
  },

  {
    name: 'Jalgaon',
    list: [
      {
        name: 'Ojus Ayurved',
        address: '\nPlot NO 1, C S NO 710/1, Lokmanya Housing Society, Near J D C C Bank, Ring, Jalgaon, Maharashtra 425001\n',
        link: 'https://www.bing.com/maps?osid=7d10d327-e413-486f-8ca9-97f92c7c4ec6&cp=21.014825~75.544808&lvl=16&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t0257 2240103\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Atharva Speciality Clinic',
        address: '\n22-B, Tagore Nagar, Beside Shree Classes, Behind Jilha Peth Police Station, Near Bhaskar Market Jalgaon 425001\n',
        link: 'https://www.bing.com/maps?osid=d5a95494-60af-4911-a6df-d61991d08786&cp=21.010337~75.537098&lvl=16&imgid=e0b06ed3-19b8-41cf-a889-fb6fb7882627&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t094203 50753\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Sai Ayurved & Panchkarma Centre',
        address: '\nPlot No.52, Muktainagar, Jalgaon, Maharashtra 425001\n',
        link: 'https://www.bing.com/maps?osid=354ebb9f-cccc-4eb3-95f1-6aa1b5dc4aee&cp=21.017759~75.53867&lvl=16&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t081499 87870\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
    ],
  },

  {
    name: 'Latur',
    list: [
      {
        name: 'Guru Manish - Best Ayurvedic Treatment',
        address: '\nNear Nana Nani Parkbeside Mahadev Temple, House # R3/880, Sawe Wadi, Latur, Maharashtra 413512\n',
        link: 'https://www.bing.com/maps?osid=22d19763-77e8-47a6-9bae-6265afd5c1db&cp=18.400809~76.555191&lvl=15&imgid=69e3b966-2be1-42b1-b7c6-d75a7ae815d5&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t07423 874238\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
    ],
  },

  {
    name: 'Thane',
    list: [
      {
        name: 'Ayurveda And Panchakarma Centre',
        address: '\nSahayog Complex, Tikuji Ni Wadi Road, Manpada, Kokani Pada Marg, Thane (W), Mumbai, Maharashtra 400610\n',
        link: 'https://www.bing.com/maps?osid=2d875428-59bd-4087-b3a9-d121f72abe60&cp=19.246853~72.832726&lvl=12&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t022 25841564\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Shashwat Ayurveda Clinic',
        address: '\nShashwat Ayurveda, Chandrabhaga Darshan CHS, Near Kharegaon Talav, old Mumbai-Pune Road, Kalwa (W.), Thane, Maharashtra 400605\n',
        link: 'https://www.bing.com/maps?osid=665e3033-1125-4636-829f-63b6094dc14b&cp=19.219715~72.876801&lvl=12&imgid=24485c13-7798-40f4-a1c9-d8a61a7f4991&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t099870 38360\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Shree Vishwaswaroop Ayurvedic Chikitsalaya & Panchakarma Centre',
        address: '\nVishnu Nagar, Next to Thane Bharat Sahakari Bank, Thane, Maharashtra 400601\n',
        link: 'https://www.bing.com/maps?osid=8cafbdf3-0a9e-45d3-a1ed-0c31cc95d8e7&cp=19.198694~72.82972&lvl=12&imgid=57233e39-7d17-46af-8e43-1621a9b6fd28&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t097668 79269\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
    ],
  },

  {
    name: 'Solapur',
    list: [
      {
        name: 'Dr Raghavendra Nadargi Ayurveda And Panchakarma Center',
        address: '\n380, Jodbhavi Peth, Kanna Chowk, Solapur, Maharashtra 413002\n',
        link: 'https://www.bing.com/maps?osid=2af15681-ee9a-4998-b77b-2fac4c830818&cp=17.683411~75.846344&lvl=13&imgid=482fd4c2-f086-4dcd-b729-eb0c544bd729&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t093712 88998\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Wellness Ayurveda & Homeopathy Clinic',
        address: '\nJail Rd, Shaniwar Peth, Solapur, Maharashtra\n',
        link: 'https://www.bing.com/maps?osid=8d9b2241-2211-4fd6-b2e0-f6710099eeaa&cp=17.676716~75.844681&lvl=13&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t084464 81675\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Advait – Ayurvedic Clinic and Panchakarma Centre',
        address: '\n2, Sanchi Complex, Near Govindashree Mangal Karyalaya, Jule, Solapur, Maharashtra\n',
        link: 'https://www.bing.com/maps?osid=4cac4d5d-c593-42cb-b069-5825ecc59daf&cp=17.641614~75.83992&lvl=13&v=2&sV=2&form=S00027',
        desc: 'For directions click here.\n',
        call: '\t094210 43004\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
    ],

  },
]


export default portscreen = () => {

  const onPressMobileNumberClick = (number) => {

    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }

    Linking.openURL(phoneNumber);
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Nearby Hospitals
        </Text>
      </View>
      <ScrollView style={{ backgroundColor: 'white' }}>

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
              <Text style={styles.textlink} onPress={() => Linking.openURL(`${node.link}`)}>{node.desc}</Text>
              <TouchableOpacity onPress={() => { onPressMobileNumberClick(`${node.call}`) }} style={{ flexDirection: 'row' }}>
                <Image style={{ width: 20, height: 20 }} source={node.calldesc} />
                <Text style={styles.textcall} >{node.call}</Text>
              </TouchableOpacity>


            </NestedRow>
          )}
        />

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'white'
  },
  title: {
    alignSelf: 'center',
    fontSize: 45,
    marginBottom: 5,
    marginTop: 5,
    color: '#3D550C',
    borderColor: '#3D550C',
    borderRadius: 5,
    borderWidth: 5,
    paddingHorizontal: 8

  },
  texthead: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    borderColor: 'grey',
    borderRadius: 3,
    borderWidth: 3,
    paddingHorizontal: 8

  },
  textadd: {
    fontSize: 15,
    fontStyle: 'italic',
    color: 'white',
    backgroundColor: '#4B5320',
    paddingHorizontal: 8
  },
  textlink: {
    fontSize: 12,
    color: '#0645AD',
    textDecorationLine: 'underline',

  },
  textcall: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',

  }
});


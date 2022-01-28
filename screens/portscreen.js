import NestedListView, { NestedRow } from 'react-native-nested-listview'
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Linking, Image, TouchableOpacity } from 'react-native'
import { Portal } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { deviceHeight } from '../Dimen';

const data = [
  {
    name: 'Nanded',
    list: [
      {
        name: 'Vishwakar Ayurved & Panchakarm Hospital',
        address: '\n Near Sai hospital, Chikhalwadi Rd, near Tahsil Office, Nanded, Maharashtra 431601 \n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.19.15172576904297_77.31649017333984_Near+Sai+Hospital%2c+Chikhalwadi+Rd%2c+Near+Tahsil+Office%2c+Nanded%2c+Maharashtra_Vishwakar+Ayurved+%26Panchakarm+Hospital_098608+52085',
        desc: 'For directions click here.\n',
        call: '\t09860852085\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Government Ayurvedic Hospital ',
        address: '\nMohammed Ali Road, Hyder Bagh, Dashmesh Nagar, Harsh Nagar, Nanded, Maharashtra 431604 \n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.19.156845092773438_77.30840301513672_Vazirabad%2c+Nanded%2c+Maharashtra+431601_Government+Ayurvedic+Medical+College_02462+234026',
        desc: 'For directions click here.\n',
        call: '\t02462234026\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Jinture Ayurved Clinic',
        address: '\nNear Bhagyalaxmi Bank, Samrat Nagar, Hyder Bagh, Dashmesh Nagar, Mahaveer Chowk, Nanded, Maharashtra 431601 \n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.19.16764259338379_77.32377624511719_Near+Bhagyalaxmi+Bank%2c+Samrat+Nagar%2c+Hyder+Bagh%2c+Dashmesh+Nagar%2c+Mahaveer+Chowk%2c+Nanded%2c+Maharashtra_Jinture+Ayurved+Clinic_',
        desc: 'For directions click here.\n',
        call: '\t07620180697\n\n',
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
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.18.47563934326172_73.85440063476562_82%2f1b%2f6%2c+Aranyeshwar%2c+Near+Swami+Samarth+Math%2c+Sahakar+Nagar+No+1%2c+Pune%2c+Maharashtra+411009_Apoorva+Ayurvedic+Hospital+%26+Panchakarma+Center+Pune_098229+14602',
        desc: 'For directions click here.\n',
        call: '\t09822914602\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Roopam Ayurveda Hospital & Panchakarma Centre  ',
        address: ' \n 13, Sukhasagarnagar Road, Near Hiraman Bankar School,, Katraj, Pune, Maharashtra 411046 \n',
        link: 'https://maps.google.com/maps?q=18.441576,73.868369',
        desc: 'For directions click here.\n',
        call: '\t8855986183\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Shree Vedvishwa Ayurveda Clinic ',
        address: '\nFR6X+27H, Mohan Nagar, Dhankawadi, Pune, Maharashtra 411043 \n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.18.474285125732422_73.82235717773438_A-5+paravati+heights+manik+baug%2c+Sinhgad+Road%2c+Above+Om+Medical%2c+-411051%2c+India%2c+Pune+411051_Shree+Vishwayu+Ayurved+Clinic_',
        desc: 'For directions click here. \n',
        call: '\t9404892183\n\n',
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
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.19.972352981567383_73.78601837158203_34+Parab+Nagar%2c+Near+Swami+Samartha+Kendra+Indira+Nagar%2c+Nashik%2c+Maharashtra+422009_Ayushree+Ayurvedic+Hospital+%26+Research+Centere_0253+2322100',
        desc: 'For directions click here.\n',
        call: '\t0253 2322100\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Vishvagandha Ayurved Hospital & Research Centre ',
        address: '\n1st Floor, Torna Palace, 7-B, Gangapur Rd, Manik Nagar, Nashik, Maharashtra 42201 \n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.19.964021682739258_73.75238037109375_At+Principal+Ayurved%2c+Mahavidyalaya%2c+Panchavati%2c+Ganeshwadi%2c+Nashik%2c+Maharashtra+422003_Ayurvedshala+Hsopital+Nst_0253+2517170',
        desc: 'For directions click here.\n',
        call: '\t0253 2517170\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Sanjivani Ayurveda , Homoeopathy & Yog Research Center Nashik (Hospital)',
        address: '\n3 D.J.House, opposite College Road, Model Colony, Nashik, Maharashtra 422005 \n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.20.005725860595703_73.76585388183594_3%2c+D+J+House+Apartment%2c+Model+Colony%2c+College+Road%2c+Nashik%2c+Maharashtra+422005_Sanjivani+Ayurvedalaya%2c+Homoeopathy+Research+Centre_0253+2341972',
        desc: 'For directions click here. \n',
        call: '\t0253 2341972\n\n',
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
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.19.972251892089844_73.7852554321289_23%2c+Hrushikesh+Plaza%2c+Rathchakra+Chowk%2c+Indiranagar%2c+Nashik%2c+Maharashtra_Darshan+Ayurvedic+Chikitsalaya_',
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
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.20.706911087036133_77.0145263671875_Ram+Nivas+Civil+Line+Chowk+Road%2c+Akola%2c+Maharashtra+444001_AyurPrabha+Multispeciality+Ayurved+Hospital_0724+9598264',
        desc: 'For directions click here.\n',
        call: '\t 0724 9598264\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Rathi Ayurved and Panchakarma clinic',
        address: '\n1st Floor, opp. RLT Science College Yamuna Sankul, Civil Line Rd, Akola\n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.20.705415725708008_77.00617218017578_1st+Floor%2c+opp.+RLT+Science+College+Yamuna+Sankul%2c+Civil+Line+Rd%2c+Akola%2c+Maharashtra_Rathi+Ayurved+and+Panchakarma+clinic_',
        desc: 'For directions click here.\n',
        call: '\t 087759 95713\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Shree Vishwaswami Ayurvedic Clinic & Panchakarma Centre',
        address: '\nAbhinandan Building, Near Dr. Deepak More Hospital, Ram Nagar, Akola\n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.20.70616912841797_77.0029296875_Abhinandan+Building%2c+Near+Dr.+Deepak+More+Hospital%2c+Ram+Nagar%2c+Akola%2c+Maharashtra+444005_Shree+Vishwaswami+Ayurvedic+Clinic+%26+Panchakarma+Centre_089759+95711',
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
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.21.015125274658203_75.55500030517578_Plot+NO+1%2c+C+S+NO+710%2f1%2c+Lokmanya+Housing+Society%2c+Near+J+D+C+C+Bank%2c+Ring%2c+Jalgaon%2c+Maharashtra+425001_Ojus+Ayurved_0257+2240103',
        desc: 'For directions click here.\n',
        call: '\t0257 2240103\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Atharva Speciality Clinic',
        address: '\n22-B, Tagore Nagar, Beside Shree Classes, Behind Jilha Peth Police Station, Near Bhaskar Market Jalgaon 425001\n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.21.009706497192383_75.54585266113281_22-B%2c+Tagore+Nagar%2c+Beside+Shree+Classes%2c+Behind+Jilha+Peth+Police+Station%2c+Near+Bhaskar+Market+Jalgaon+425001%2c+Jalgaon%2c+Maharashtra+425001_Atharva+Speciality+Clinic_094203+50753',
        desc: 'For directions click here.\n',
        call: '\t094203 50753\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Sai Ayurved & Panchkarma Centre',
        address: '\nPlot No.52, Muktainagar, Jalgaon, Maharashtra 425001\n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.21.017127990722656_75.54742431640625_Plot+No.52%2c+Muktainagar%2c+Jalgaon%2c+Maharashtra+425001_Sai+Ayurved+%26+Panchkarma+Centre_081499+87870',
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
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.18.399526596069336_76.57270050048828_Near+Nana+Nani+Parkbeside+Mahadev+Temple%2c+House+%23+R3%2f880%2c+Sawe+Wadi%2c+Latur%2c+Maharashtra+413512_Guru+Manish+-+Best+Ayurvedic+Treatment_07423+874238',
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
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.19.18836212158203_72.974365234375_304%2c+Shivneri+Building%2c+3+Rd+Floor%2c+Opposite+Of+Gaondevi+Maidan%2c+Naupada%2c+Naik+Wadi%2c+Ghantali%2c+Thane+West%2c+Mumbai%2c+Maharashtra+400601_Ayuved+Chikitsalaya+And+Panchakarma+Centre_099675+15991',
        desc: 'For directions click here.\n',
        call: '\t022 25841564\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Shashwat Ayurveda Clinic',
        address: '\nShashwat Ayurveda, Chandrabhaga Darshan CHS, Near Kharegaon Talav, old Mumbai-Pune Road, Kalwa (W.), Thane, Maharashtra 400605\n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.19.209503173828125_73.01687622070312_Shashwat+Ayurveda%2c+Chandrabhaga+Darshan+CHS%2c+Near+Kharegaon+Talav%2c+old+Mumbai-Pune+Road%2c+Kalwa+(W.)%2c+Thane%2c+Maharashtra+400605_Shashwat+Ayurveda+Clinic_099870+38360',
        desc: 'For directions click here.\n',
        call: '\t099870 38360\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Shree Vishwaswaroop Ayurvedic Chikitsalaya & Panchakarma Centre',
        address: '\nVishnu Nagar, Next to Thane Bharat Sahakari Bank, Thane, Maharashtra 400601\n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.19.188480377197266_72.96979522705078_Vishnu+Nagar%2c+Next+to+Thane+Bharat+Sahakari+Bank%2c+Thane%2c+Maharashtra+400601_Shree+Vishwaswaroop+Ayurvedic+Chikitsalaya+%26+Panchakarma+Centre_097668+79269',
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
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.17.678091049194336_75.91551971435547_380%2c+Jodbhavi+Peth%2c+Kanna+Chowk%2c+Solapur%2c+Maharashtra+413002_Dr+Raghavendra+Nadargi%27s+Ayurveda+And+Panchakarma+Center_093712+88998',
        desc: 'For directions click here.\n',
        call: '\t093712 88998\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Wellness Ayurveda & Homeopathy Clinic',
        address: '\nJail Rd, Shaniwar Peth, Solapur, Maharashtra\n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.17.67156410217285_75.91471862792969_Jail+Rd%2c+Shaniwar+Peth%2c+Solapur%2c+Maharashtra_Wellness+Ayurveda+%26+Homeopathy+Clinic_084464+81675',
        desc: 'For directions click here.\n',
        call: '\t084464 81675\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
      {
        name: 'Advait – Ayurvedic Clinic and Panchakarma Centre',
        address: '\n2, Sanchi Complex, Near Govindashree Mangal Karyalaya, Jule, Solapur, Maharashtra\n',
        link: 'https://www.bing.com/maps/directions?rtp=adr.~pos.17.636533737182617_75.9100112915039_2%2c+Sanchi+Complex%2c+Near+Govindashree+Mangal+Karyalaya%2c+Jule%2c+Solapur%2c+Maharashtra_Advait+%e2%80%93+Ayurvedic+Clinic+and+Panchakarma+Centre_094210+43004',
        desc: 'For directions click here.\n',
        call: '\t094210 43004\n\n',
        calldesc: require('../assets/icons/phone.png')
      },
    ],

  },
]


export default portscreen = ({ navigation }) => {

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
    <View style={{ height: deviceHeight - 50 }}>
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
              <Text style={styles.textlink} onPress={() => { Linking.openURL(node.link) }}>{node.desc}</Text>
              <TouchableOpacity onPress={() => { onPressMobileNumberClick(`${node.call}`) }} style={{ flexDirection: 'row' }}>
                <Image style={{ width: 20, height: 20 }} source={node.calldesc} />
                <Text style={styles.textcall} >{node.call}</Text>
              </TouchableOpacity>


            </NestedRow>
          )}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: deviceHeight / 11,
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


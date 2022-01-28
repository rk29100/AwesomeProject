import React, { useState, useRef } from 'react';
import { View, Alert, StyleSheet, ScrollView, Image, TouchableOpacity, Text, Linking } from 'react-native';

import { Paragraph, Title } from 'react-native-paper';
import { deviceHeight, deviceWidth } from '../Dimen';



const DATA = [
    {
        id: 1,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/ajwain.jpg',
        desc: 'Ajwain or (Trachyspermum ammi) is the humble carom seed that is used as a spice and is the base of many home remedies. It has a very distinctive aroma and taste. Ajwain is a member of the Apiaceae family and is related to carrot, cumin, coriander, anise, asafoetida, etc. Ancient Egyptian civilizations used it as a medicine as well as a culinary spice. In traditional Ayurvedic medicine, it is known to treat asthma, persistent coughs, flatulence, and indigestion.',
        title: 'Ajwain',
        pros: '\n1. Ajwain consists of active compounds, thymol, and carvacrol, that have powerful antibacterial and antifungal properties.\n\n2. Ayurveda states that this seed ignites the digestive fire Agni.\n\n3. It is used to balance the Kapha and Vata Doshas and increases the Pitta Dosha.\n\n4. It may lower cholesterol and triglyceride levels and prevent heart diseases.\n\n5. It can reduce high blood pressure or hypertension.\n\n6. Ajwain is commonly used as a household remedy for digestive issues and may help fight peptic ulcers.\n\n7. It is known to prevent coughing and improve airflow.\n\n8. It is a strong nerve stimulant and effectively draws out deep-seated toxins from the body',

    },
    {
        id: 2,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/Ashwagandha.jpg',
        desc: 'Ashwagandha is highly regarded in the traditional Ayurvedic medicine system. It is a small and woody shrub of the Solanaceae family that is found in India as well as in Africa and a few parts of the Mediterranean continent. Ashwagandha gets its name from two Sanskrit words – Ashva, meaning horse and Gandha meaning smell. Its roots have a strong aroma that is described as “horse-like” and is also said to bestow upon its user the vitality and strength of a horse. The traditional description of being as strong as a horse relates to the description of this herb and its Ayurvedic medicine benefits. It is commonly used as an adaptogen to help the body cope up with stress and increase its energy and vitality. It also assists the body in preserving and sustaining adequate energy levels throughout the day while promoting restful sleep at night. Traditionally, the roots and berries of the Ashwagandha plant are used for preparing Ayurvedic remedies.',
        title: 'Ashwagandha',
        pros: '\n1. Enhances memory and cognition.\n\n2. Supports healthy weight management.\nn\n3. Helps maintain normal thyroid.\n\n4. Helps enhance cardiorespiratory endurance.\n\n5. Helps maintain healthy testosterone in men.\n\n5. It offers proper nourishment to the tissues, especially muscle and bone as the body ages.\n\n6. It helps to maintain a healthy immune system and promote muscle strength to support the comfortable joint movement.\n\n7. It is considered as the best herb for calming Vata and promoting sexual function in both men and women',

    }, {
        id: 3,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/Brahmi.jpg',
        desc: 'Brahmi also called Bacopa monnieri, herb of grace, thyme-leaved gratiola, is one of the best Ayurvedic herbs that has been in use from ancient times to treat neurological disorders. It can be found in wet and tropical environments and can also be used as an Ayurvedic remedy for improving memory, reducing anxiety and treating epilepsy. Certain researches have pointed out that it may be effective in boosting brain function as well. The leaves of the plant are considered as highly sattvic or pure and were eaten by yogis to assist in meditation in olden times.',
        title: 'Brahmi',
        pros: '\n1. It is a brain tonic that enhances memory, intelligence, and concentration.\n\n2. Supports proper function of the nervous system.\n\n3. It decreases the cortisol levels in the body and reduces stress and anxiety.\n\n4. It is a natural blood purifier and helps support clear, healthy skin, and is good for hair as well.\n\n5. Brahmi supplements are cooling and relaxing in nature and are an excellent tonic for Pitta people with overactive minds.\n\n6. The antioxidants in Brahmi are helpful for general well-being and removing free radicals that can mutate into cancer cells.\n\n7. It calms the Vata in mind and reduces excess Kapha in the body.\n\n8. It is an Ayurvedic neuroprotective and enhances nerve impulse transmission and strengthens immunity.\n\n9. It is one of the top Ayurvedic herbs to help reduce stress.\n\n10. As per the principles of Ayurveda, it regulates the stress hormones and has a beneficial effect on cortisol levels.',

    }, {
        id: 4,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/Cardamom.jpg',
        desc: 'Cardamom is one of the ancient spices of the world. It grows wildly in the Western Ghats of Southern India and in Guatemala, which is the largest producer and exporter of this spice. It has a strong aroma like that of cloves and is used in Indian and Middle Eastern cuisine.',
        title: 'Cardamom',
        pros: '\n1. Cardamom works as a natural tranquilizer.\n\n2. It is commonly used to treat indigestion, asthma, dysuria, and bad breath.\n\n3. Due to its antioxidant and diuretic properties, it assists in lowering blood pressure.\n\n4. It is rich in compounds that protect cells from damage and prevent inflammation.\n\n5. It can also be used to fight fungal infections and food poisoning.\n\n4. Cardamom is known to lower blood sugar levels.\n\n5. It protects the liver by preventing liver enlargement and reducing the risk of fatty liver disease.\n\n6. Cardamom balances Kapha and Vata Doshas',

    },
    {
        id: 5,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/Cumin.jpg',
        desc: 'Native to the Mediterranean and Southwest Asia, cumin is a spice that comes from the Cuminum cyminum plant. It is quite popular in many food cultures and is used as whole dried seeds or ground powder, especially in Indian, Mexican, African and Asian cuisine. In the Middle Ages, when spices were relatively rare, cumin was believed to promote love and fidelity. People would carry it in their pockets and bring it to weddings. Apart from this, cumin has been widely used as a medicine to treat different ailments in many parts of the world for many years.',
        title: 'Cumin',
        pros: '\n1. Cumin is one of the best ayurvedic herbs to calm digestive issues. Cumin is beneficial in assisting people to manage their body weight.\n\n2. Consumption of cumin can increase levels of high-density lipoprotein or good cholesterol.\n\n3. Its antimicrobial properties reduce the risk of certain foodborne infections.\n\n4. Studies have shown that people using cumin oil had improvements in signs of insulin resistance. Therefore, cumin is an excellent Ayurvedic herb for diabetes management.\n\n5. The antioxidants in cumin can stabilize free radicals and prevent inflammation and DNA damage.\n\n6. Cumin seeds may also help in reducing addictive behaviour and withdrawal symptoms.\n\n7. It is one of the most preferred Ayurvedic herbs for digestion and metabolism. It also helps the body with nutrient absorption.\n\n8. Cumin is also a natural anti-inflammatory, antimicrobial, and antioxidant.',

    },
    {
        id: 6,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/Licorice.jpg',
        desc: 'Licorice has been around as a common ingredient in many natural medicines. The ancient Greeks used it for treating cough, and it was also found among the many treasures in the Egyptian pharaoh Tutankhamun’s tomb. Licorice comes from the juice of the roots of the plant Glycyrrhiza Glabra. It is also used as a sweetener in candies and beverages.',
        title: 'Licorice',
        pros: '\n1. Licorice root extract can soothe gastrointestinal problems and provide relief in cases of stomach ulcers, food poisoning, and heartburn.\n\n2. It contains glycyrrhizic acid, which can subdue the functioning of toxic bacteria, H. pylori and prevent it from growing in the gut.\n\n3. It can be taken as an oral supplement to enhance the body’s production of healthy mucus for the proper functioning of the respiratory system.\n\n4. It is found to have a soothing effect on the throat and is used in formulations for a sore or hoarse throat. \n\n5. Licorice supplements can offer relief to the adrenal gland that has been exhausted by constantly producing adrenaline and cortisol.\n\n6. It is a multipurpose ingredient helpful Ayurvedic medicine as an anti-inflammatory, anti-ageing, antioxidant, anti-bacterial, anti-arthritic, analgesic, and antacid. \n\n7. Due to its antibacterial properties, licorice can be used in topical gels to treat eczema.\n\n8. It pacifies the Pitta and Vata Doshas. \n\n9. Its beneficial effect on both testosterone and estrogen makes it useful in the Ayurvedic treatment of prostate troubles as well as menopause issues. ',

    },
    {
        id: 7,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/Haritaki.jpg',
        desc: 'The translation of the word Haritaki is that which removes diseases and makes the body shine. Historically, the use of Haritaki for healing and higher consciousness of mind for thousands of years has been documented in India, Nepal, Thailand, and many other regions of southeast Asia. Due to its potential to increase energy, intelligence, and awareness, it was referred to as the “King of Herbs” in the Ayurvedic and Siddha healing systems of India. It is well known for being one of the Triphala herbs.Haritaki was so popular in the Buddhist culture that it was referred to as “The Supreme Nectar That Illuminates the Mind”.  The dried fruit of the tree is used for medicinal purposes. Haritaki has a bitter taste and is rich in vitamin C and substances with antioxidant and anti-inflammatory properties. Haritaki is used in Ayurveda as a natural anti-viral, anti-fungal, antimicrobial,  hepatoprotective, cardioprotective, anti-bacterial, hypolipidemic, antioxidant, immunomodulator, anti-diabetes, hypolipidemic and wound healer.',
        title: 'Haritaki',
        pros: '\n1. Haritaki supports and enhances the vital functions of the body, such as strong digestive fire, adequate nutrient absorption, healthy waste elimination, etc.\n\n2. Although it is well-known as a quintessential Vata-balancing herb, it is effective in pacifying all the three Doshas.\n\n3. It is useful in Ayurvedic formulations to help improve the complexion, detoxify, ease bowel movement, as a rejuvenative, aid to memory and intelligence, improve digestion, and as a fat scraper. \n\n4. It may help to reduce cholesterol levels in the body.\n\n5. It prevents lung infections in individuals with cystic fibrosis.\n\n6. It is beneficial in neuro-muscular weakness and diminished vision.\n\n7. Haritaki is used in Ayurvedic formulations for eye problems, sore throat, obesity, burns, leucoderma, bleeding gums, caries, cough, tuberculosis, prolapsed uterus, and stomach problems such as dysentery. \n\n8. It bolsters heart health and protects against blood disorders.\n\n9. Haritaki is used in traditional natural hair dyes. \n\n10. It should be avoided during pregnancy.',

    },
    {
        id: 8,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/neem.jpg',
        desc: 'The word “Neem” is derived from the Sanskrit Nimba – which means the bestower of good health. Through the ages, the neem tree has been revered by Indians for its miraculous healing powers. Its medicinal properties are well documented in ancient Sanskrit texts, and it is estimated that it is used in one form or another in almost 75% of Ayurvedic compositions. All the different parts of this tree are used in traditional folk medicine and Ayurveda. ',
        title: 'Neem',
        pros: '\n1. Neem leaves have antiseptic, antibacterial, and antifungal properties. Unlike its synthetic equivalents, neem is gentle and doesn’t produce side effects such as allergies and rashes.\n\n2. It is a potent blood purifier and detoxifier and works well to treat acne, eczema, skin diseases, skin damage, and wounds. It is extremely useful for alleviating Pitta disorders as well.\n\n3. Consumption of neem tea helps to reduce fever, particularly malaria fever.\n\n4. The twigs of the neem tree can be used to maintain proper dental hygiene and care.\n\n5. Neem paste is used as a natural hair conditioner. It strengthens hair roots and promotes healthy hair growth. The bark and leaves of the Neem tree are used as an Ayurvedic blood purifier, to prevent vomiting, nausea, and fever. The leaves have a carminative effect. The neem flowers are used in home remedies for stomach disorders.',

    },
    {
        id: 9,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/Shatavari.jpg',
        desc: 'Shatavari or Asparagus racemosus is an adaptogenic herb that promotes fertility and offers a myriad of health benefits, particularly for the female reproductive system. Shatavari is called the queen of herbs. It is high in saponins, compounds with antioxidant abilities.',
        title: 'Shatavari',
        pros: '\n1. It is useful in Ayurveda as a nutritive tonic, diuretic, laxative, antitumor, aphrodisiac, anti-depressant, adaptogenic, rejuvenative, antacid, antispasmodic, antioxidant, demulcent, galactagogue, anti-microbial, and immunomodulator. \n\n2. Shatavari can reduce inflammation in the body without causing any serious digestive side effects.\n\n3. It helps in enhancing immunity.\n\n4. Shatavari root juice is known to be effective in alleviating cough.\n\n5. It may be suggested as a diuretic to help the body get rid of excess fluid.\n\n6. Helps in the treatment of stomach, intestine or esophagus ulcers.\n\n7. It may help maintain blood sugar.\n\n8. The antioxidants in Shatavari reduce the free radicals that lead to skin damage and wrinkles. It may also help in preventing collagen breakdown and maintaining the skin’s elasticity',

    },
    {
        id: 10,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/turmeric.jpg',
        desc: 'Turmeric is one of the most popular and widely researched Ayurvedic spices in the world. It is native to South Asia, particularly India, but is also cultivated in other warm regions of the world. The Latin name for turmeric is “Curcuma longa”, derived from “Kurkum”, which is the Arabic name of the plant.Turmeric, belonging to the Zingiberaceae family, goes by many names in Sanskrit, such as Kanchani or the Golden Goddess, Haridra, or the yellow one, Gauri, or the one who has a shining face. It is used in Ayurveda for its properties of being an excellent detoxifier, anti-microbial, immunomodulator, liver function regulator, anti-arthritic, antioxidant, and anti-diabetes. It is no wonder then that most Indian savoury recipes call for a pinch of turmeric as a matter of course.',
        title: 'Turmeric',
        pros: '\n1. Turmeric purifies the blood and channels of the body. It enhances the complexion of the skin and circulating blood and nutrients to the skin. It is one of the Indian herbs used extensively in traditional beauty regimens to maintain healthy skin and discourage body hair growth.\n\n2. It consists of compounds that help preserve brain function.\n\n3. As it is anti-inflammatory, it works well to treat acne-prone skin.\n\n4. It balances Pitta because of its blood and liver cleansing properties.\n\n5. It helps to maintain healthy blood sugar levels.\n\n6. Strengthens the immune system.',

    },
    {
        id: 11,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/Guduchi.jpg',
        desc: 'Guduchi or Tinospora cordifolia is one of the highly revered herbs in Ayurveda for its rejuvenating, detoxifying, immune-boosting, and anti-rheumatic properties. The name “Guduchi” means the one who protects. Originating in India, the herb can also be found in Sri Lanka and Burma.According to Ayurveda, guduchi is considered to be one of the three amrit (nectar or ambrosia) plants, the other two being garlic and haritaki. Generally, the roots, stem, and leaves of the guduchi plant are used for medicinal purposes, but the bitter starch of the plant holds the most importance.',
        title: 'Guduchi',
        pros: '\n1. This herb is vital to many important Ayurvedic medicine formulations. It is used in Ayurveda as an adaptogen and for anti-stress. When there is a Dosha or Dhatu that is imbalanced at less than optimum levels this herb restores it. When there is an aggravated or increased level of a Dosha or Dhatu, it brings the level down to normal.\n\n2. It is used in traditional medicine for its properties of being an immunomodulator, rejuvenating, anti-inflammatory, digestive, hypoglycemic, anti-constipation, antacid, analgesic, antioxidant, antimutagenic, gastrointestinal protective, detoxifier and hematogenic.\n\n3. Guduchi is quite effective in the treatment of digestive ailments, such as hyperacidity, colitis, abdominal pain, appetite loss and liver ailments like hepatitis.\n\n4. The starch of the plant can be used as a home remedy for treating chronic fever while enhancing appetite and energy.\n\n5. It can help in reducing the levels of blood urea and get rid of renal calculi.\n\n6. It can be used in combination with sunthi for the treatment of gout and rheumatic ailments. Santhwanam oil by Kerala Ayurveda can be quite effective in the treatment of rheumatic conditions.\n\n7. Diabetes can be managed by the mixture of guduchi, nimba and vasa. You can also try out the Glymin tablet with proper consultation for the management of diabetes, kidney and heart problems in the Ayurvedic way.\n\n8. It promotes a healthy inflammatory response and reduces excess Pitta in the body.'
    },
    {
        id: 12,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/amla.jpg',
        desc: 'Amalaki is considered as a powerful rejuvenating herb in Ayurveda. It is commonly known as Indian gooseberry or amla, and is used as an Ayurvedic herb for hair growth and to boost the immune system of the body. Amalaki is native to tropical Southeastern Asia and can be found in different regions of India, Sri Lanka, Pakistan, Malaysia, and the Mascarene Islands. In Sanskrit, Amalaki means “the sustainer”.',
        title: 'Amla',
        pros: '\n1. Amlaki has rich antioxidant content and promotes detoxification. As one of the three ingredients in Triphala, it nourishes the tissues and eliminates toxins.\n\n2. Its cooling action is helpful to pacify excess Pitta in the gastrointestinal tract, thereby supporting a healthy stomach lining and proper functioning of digestive acids. Moreover, it also cleans the colon and promotes healthy bowel movements.\n\n3. It acts as a brain tonic and is the best Ayurvedic herb for memory and concentration.\n\n4. It stimulates digestive fire without aggravating Pitta.\n\n5. It strengthens the nervous system, enhances the health of sensory organs and supports the liver and uterus.\n\n6. Amalaki is used in Ayurvedic herbal hair oils for healthy hair.\n\n7. It also works wonders to promote healthy eyes, nails, and skin.\n\n8. It builds Ojas to support a healthy immune response and youthfulness.\n\n9. By stimulating microcirculation, Amla builds Ojas to promote healthy blood sugar levels and balance Pitta.'
    },
    {
        id: 13,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/triphala.jpg',
        desc: 'Triphala is an Ayurvedic medicine composed of three medicinal fruits, namely amla (Emblica officinalis), bibhitaki (Terminalia bellirica), and haritaki (Terminalia chebula). It has been an important part of Ayurvedic practice for thousands of years. Its uses have been mentioned in the Sushrut Samhita, which dates back to 1500 BC.',
        title: 'Triphala',
        pros: '\n1. Triphala is an excellent digestive tonic that improves the digestion process and cleanses the digestive tract.\n\n2. It is a natural laxative that helps to reduce constipation, flatulence, abdominal pain while improving the consistency of bowel movements.\n\n3. It may reduce the inflammation caused by arthritis and prevent the growth of certain types of cancer.\n\n4. As Triphala improves metabolism, it is good for weight loss and management.\n\n5. It is known to fight fatigue and lethargy and boost the energy levels of the body.\n\n6. Triphala is rich in antioxidants that help fight free radicals and oxidative stress.\n\n7. Dermatological problems like acne and eczema can also be treated with Triphala.\n\n8. It consists of many nutrients that preserve the health and beauty of hair and skin.\n\n9. Pure Triphala blended with musta, lashuna, yashtimadhu, maricha, and pippali can be found in Alsactil herbal tablets that work naturally to provide relief from hyperacidity, flatulence, gastric ulcer, heartburn, etc.'
    },
    {
        id: 14,
        link: 'https://www.keralaayurveda.biz/media/blogs/NPD/BLOG%2018/Aloe%20Vera.jpg',
        desc: 'Aloe Vera or Ghrita Kumara in Sanskrit was considered as the “plant of immortality” by the Egyptians. Aloe was recognized in ancient Indian, Greek, Chinese and Roman civilizations for its anti-inflammatory and antibacterial properties.',
        title: 'Aloevera',
        pros: '\n1. It is used in Ayurveda as an anti-inflammatory and antibacterial. It supports digestion, heart health, healthy blood sugar levels, normal menstruation, blood purification as well as alleviating hair skin and eye issues. \n\n2. Aloe vera juice helps in digestion and absorption of nutrients.\n\n3. It maintains blood sugar level, increases energy production and promotes cardiovascular health.\n\n4. It supports smooth menstruation.\n\n5. It is a bitter tonic that has a mild laxative effect.\n\n6. It helps to purify the blood.\n\n7. It is used to treat many skin conditions and hair problems.\n\n8. It offers relief from non-cystic acne and bloodshot eyes.'
    }




]


const Herb = ({ navigation }) => {

    return (
        <View >
            <ScrollView>
                {DATA.map((data, index) => {
                    return (

                        <View key={index} style={{ margin: 10, backgroundColor: 'white', borderRadius: 10, elevation: 4, width: deviceWidth - 30, marginVertical: 7, padding: 10 }}>

                            <Title>{data.title}</Title>
                            <Text></Text>

                            <TouchableOpacity onPress={() => { Alert.alert('Benefits', `${data.pros}`) }} >
                                <Image source={{ uri: data.link }} style={{ height: 200, width: 300, alignSelf: 'center', borderRadius: 5 }} />
                            </TouchableOpacity>
                            <Text></Text>
                            <Text onPress={() => { navigation.navigate('WebView2', { url: data.link }) }} style={{ color: 'blue', textDecorationLine: 'underline', textAlign: 'center' }}>Tap to see zoom image</Text>
                            <Text></Text>
                            <Paragraph style={{ textAlign: 'justify' }}>{data.desc}</Paragraph>
                            <Text></Text>

                        </View>

                    );
                })}
            </ScrollView >


        </View >
    );
};


export default Herb;
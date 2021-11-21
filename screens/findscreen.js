import * as React from 'react';
import { List , Modal} from 'react-native-paper';
import { View,Text,ScrollView, Alert } from 'react-native';

const findscreen = () => {
 
return (
  <View style={{height:650}}>
    <View>
            <Text style={{alignSelf:'center',fontSize:45,marginBottom:20}}>
                Home Remedies
            </Text>
            
        </View>
 <ScrollView style={{backgroundColor:'#8fcbbc'}}>
    <List.AccordionGroup >
        

    <List.Accordion title="Adrak(Sonth)" id="1">
      <List.Item title="1. Indigestion" onPress={() => Alert.alert('Direction to Use  ','5 gm crushed rhizome with salt or jaggery twice daily before meal.')} />
      <List.Item title="2. Ear Pain" onPress={() => Alert.alert('Direction to Use  ','2-4 drops of fresh warm juice to be instilled in the ear (do not use when there is discharge).')} />
      <List.Item title="3. Hoarseness of voice" onPress={()=>Alert.alert('Direction to Use  ','1-3 gm powder of dry rhizome with honey in three divided doses.')} />
      <List.Item title="4. Aches and pains"onPress={()=>Alert.alert('Direction to Use  ','10-20 ml decoction prepared from 2 gm.of dry rhizome twice a day.')} />
      <List.Item title="5. Cold / Cough "onPress={()=>Alert.alert('Direction to Use  ','2-5 gm powder of dry rhizome with jaggery thrice a day in divided doses. 10ml. decoction prepared from a piece of ginger every morning prevents recurrent attack of cold.')} />
      <List.Item title="6. Head Ache" onPress={()=>Alert.alert('Direction to Use  ','Warm paste should be applied over forehead upto 3 - 4 times a day.')}/>
      <List.Item title="7. Abdominal Pain"onPress={()=>Alert.alert('Direction to Use  ','5 ml juice in a glass of butter milk with lemon & salt.')} />
    </List.Accordion>

    <List.Accordion title="Ajwain" id="2">
      <List.Item title="1. Piles" onPress={()=>Alert.alert('Direction to Use','1 gm. powder and 1 gm. black-salt with butter-milk twice daily.')} />
      <List.Item title="2. Painful Menses"onPress={()=>Alert.alert('Direction to Use','1-2 gm. powder of seeds with warm milk thrice a day for 2-3 days.')} />
      <List.Item title="3. Urticaria (Skin allergy) "onPress={()=>Alert.alert('Direction to Use','1-2 gm. powder of seeds with water twice daily.')} />
      <List.Item title="4. Abdominal pain " onPress={()=>Alert.alert('Direction to Use','1 gm. powder with lukewarm water twice or thrice.')}/>
      <List.Item title="5. Flatulence (gas) " onPress={()=>Alert.alert('Direction to Use','2 gm. ajvain powder with equal quantity of Saunf powder with warm water.')}/>
      <List.Item title="6. Sinusitis"onPress={()=>Alert.alert('Direction to Use','warm paste should be applied over freehead & little below the eyes in the morning')} />
      <List.Item title="7. Nasal block "onPress={()=>Alert.alert('Direction to Use','1-2 gm powder should be put in steaming water & vapour should be inhaled; 2-3 time a day.')} />
      <List.Item title="8. Loss of Apetite "onPress={()=>Alert.alert('Direction to Use','1 gm. powder with warm water 1/2 hour before meals.')} />
    </List.Accordion>

      <List.Accordion title="Anar" id="3">
        <List.Item title="1. Indigestion " onPress={()=> Alert.alert('Direction to Use','10 ml. juice of fruit, 1 gm. black- salt or fried Jira powder with honey or sugar to hold inside mouth for sometime before food.')} />
        <List.Item title="2. Bleeding Piles " onPress={()=> Alert.alert('Direction to Use','10 ml. juice of fruit with sugar twice a day. or 10 gm. powder of dry fruit rind with equal quantity of sugar twice a day.')} />
        <List.Item title="3. Diahhoria/Dysentery " onPress={()=> Alert.alert('Direction to Use','10 ml. decoction of fruit skin thrice a day. Fruit may be eaten in plenty.')} />
        <List.Item title="4. Hyper-acidity " onPress={()=> Alert.alert('Direction to Use','10 ml. juice of fruit twice a day. Even the fruit may be eaten.')} />
        <List.Item title="5. Bad Breath " onPress={()=> Alert.alert('Direction to Use','Gargling with the warm decoction prepared from fruit skin 3-4 time a day.')} />
        <List.Item title="6. Acne " onPress={()=> Alert.alert('Direction to Use','Paste of seeds should be applied to affected part twice daily.')} />
      </List.Accordion>

      <List.Accordion title="Amla" id="4">
      <List.Item title="1. For General Health " onPress={()=> Alert.alert('Direction to Use','Regular use of Amla provides nutrition and boosts good health.')} />
      <List.Item title="2. Hyper Acidity/ Peptic Ulcer/ Constipation  " onPress={()=> Alert.alert('Direction to Use','3-5 gm. powered fruit rind twice a day with milk. or 10-20 ml. fruit juice twice a day. or 3-5 gm. powered fruit rind twice a day with milk (Even raw Amla can be eaten).')} />
      <List.Item title="3. Stress " onPress={()=> Alert.alert('Direction to Use','External application of 25-50 gm. of fruit rind ground in butter milk on the forehead.')} />
      <List.Item title="4. Diabetes " onPress={()=> Alert.alert('Direction to Use','10-20 ml. Fruit juice with 10-20 ml. juice of fresh rhizome of Haldi twice a day.')} />
      <List.Item title="5. Greying of Hair / Hair fall / Dandruff  " onPress={()=> Alert.alert('Direction to Use','Fruit rind soaked over night in water for application on scalp two hours before bath. or paste prepared from fruit rind should be applied two hours before bath. 1-2 fresh fruits eaten every morning prevents hair fall & early greying.')} />
      <List.Item title="6. Bleeding Gums" onPress={()=> Alert.alert('Direction to Use','Fine powder should be genthy massaged to gums after brushing atleast twice a day regularly.')} />
      </List.Accordion>

      <List.Accordion title="Dalchini" id="5">
      <List.Item title="1. Indigestion " onPress={()=> Alert.alert('Direction to Use','2 gm. powder of bark with water twice a day.')} />
      <List.Item title="2. Loss of Apetite " onPress={()=> Alert.alert('Direction to Use','2 gm. powder of equal parts of Dalchini and Ajvain for chewing in three divided doses before food.')} />
      <List.Item title="3. Vomiting " onPress={()=> Alert.alert('Direction to Use','1-2 gm. powder with honey thrice a day in divided doses.')} />
      <List.Item title="4. Tension Headache " onPress={()=> Alert.alert('Direction to Use','To be rubbed with water on a rough surface & applied to fore head.')} />
      <List.Item title="5. Mental Tension " onPress={()=> Alert.alert('Direction to Use','The aroma has soothing action on mind. Crushed pieces may be kept in hanky or near the pillow.')} />
      <List.Item title="6. Dry Cough " onPress={()=> Alert.alert('Direction to Use','Chewing controls the throat irritation and helps in dry cough.')} />
      </List.Accordion>

      <List.Accordion title="Dhania" id="6">
      <List.Item title="1. Cold / Cough " onPress={()=> Alert.alert('Direction to Use','20 ml. decoction prepared from 5 gm.coarse powder with sugar and turmeric powder thrice a day. or use of dhania powder as herbal tea every morning prevents cold, cough & problems related to digestion.')} />
      <List.Item title="2. Intestinal Worm " onPress={()=> Alert.alert('Direction to Use','3-5 gm. powder with jaggery twice a day for 5 days.')} />
      <List.Item title="3. Sunstroke / Dehydration " onPress={()=> Alert.alert('Direction to Use','20 ml. decoction prepared from coarse powder with sugar and a pinch of salt frequently.')} />
      <List.Item title="4. Indigetion " onPress={()=> Alert.alert('Direction to Use','20 ml. decoction prepared from 5 gm. coarse powder with a pinch of ginger powder thrice a day.')} />
      <List.Item title="5. Fever " onPress={()=> Alert.alert('Direction to Use','20 ml. decoction from 5 gm. powder with sugar 3-4 times a day.')} />
      </List.Accordion>

      <List.Accordion title="Elaichi" id="7">
      <List.Item title="1. Hiccough " onPress={()=> Alert.alert('Direction to Use','1-2 fruits to be chewed frequently (not more than 4 per day.)')} />
      <List.Item title="2. Vomiting " onPress={()=> Alert.alert('Direction to Use','250-500 gm. powder of seeds fried in ghee thrice daily with honey.')} />
      <List.Item title="3. Bad Breath " onPress={()=> Alert.alert('Direction to Use','1-2 seeds to be chewed frequently (not more than 4 per day).')} />
      <List.Item title="4. Diarrhoea " onPress={()=> Alert.alert('Direction to Use','Ash of the Elaichi skin 2 gm. with a little honey 4-5 times a day.')} />
      <List.Item title="5. Cold " onPress={()=> Alert.alert('Direction to Use','20 ml. decoction prepared from. 5 gm. Dhania, 1 gm Methi seeds, little turmeric powder should be taken 2-3 times/day.')} />
      <List.Item title="6. Cough " onPress={()=> Alert.alert('Direction to Use','Little elaichi powder with a tea spoon full of honey 3-4 times day. Even chewing elaichi (Not more than 3 per day) frequently is helpfull in dry as well as productive cough.')} />
      </List.Accordion>

      <List.Accordion title="Ghee" id="8">
      <List.Item title="1. Ulcer/ Wounds/ Burns  " onPress={()=> Alert.alert('Direction to Use','Application over affected part frequently.')} />
      <List.Item title="2. Loss of Appetite  " onPress={()=> Alert.alert('Direction to Use','Ghee With Hing and Jeera powder with food.')} />
      <List.Item title="3. Memory " onPress={()=> Alert.alert('Direction to Use','Use of ghee everyday in children improves memory.')} />
      <List.Item title="4. Constipation " onPress={()=> Alert.alert('Direction to Use','5 ml. ghee put in a cup of warm milk should be taken with sugar at bed time.')} />
      </List.Accordion>

      <List.Accordion title="Haldi" id="9">
      <List.Item title="1. Diabetes  " onPress={()=> Alert.alert('Direction to Use','10 ml. fresh juice with 10 ml. juice of Amla twice daily.')} />
      <List.Item title="2. Acne " onPress={()=> Alert.alert('Direction to Use','- Application of paste to the effected part twice a day. Use of Haldi with water, milk or cream on face gives glow to the skin & removes unwanted hair if used regularly.')} />
      <List.Item title="3. Cold " onPress={()=> Alert.alert('Direction to Use','2 gm. powder with warm milk and sugar twice a day. Decoction of 1 gm. Haldi powder or use of Haldi in herbal tea prevents all allergic problems.')} />
      <List.Item title="4. Wound / Ulcer / Skin Disease " onPress={()=> Alert.alert('Direction to Use','To be washed with decoction of Haldi & paste of haldi should be applied. Paste made by mixing with Ghee /coconut oil should be applied over affected part.')} />
      <List.Item title="5. Skin Allergy " onPress={()=> Alert.alert('Direction to Use','1-3 gm. powder should be taken with jaggery twice a day.')} />
      </List.Accordion>

      <List.Accordion title="Hing" id="10">
      <List.Item title="1. Abdominal Pain " onPress={()=> Alert.alert('Direction to Use','Stir and dissolve in water and apply on & around umbilicus. Specially in children or infants where there is abdominal distention this is very helpful. 1 gm. Hing fried in ghee with butter milk twice a day.')} />
      <List.Item title="2. Tooth Ache " onPress={()=> Alert.alert('Direction to Use','Keep fried Hing in carious tooth.')} />
      <List.Item title="3. Loss of Appetite " onPress={()=> Alert.alert('Direction to Use','A pinch of Hing fried in ghee & a piece of adrak crushed should be taken with butter milk before food.')} />
      </List.Accordion>

      <List.Accordion title="Jayphal" id="11">
      <List.Item title="1. Diarrhoea in Children " onPress={()=> Alert.alert('Direction to Use','A pinch of powder or fruit rubbed on a clean surface with milk or water should be given 3-4 times a day.')} />
      <List.Item title="2. Irritability " onPress={()=> Alert.alert('Direction to Use','If child is restless & irritable 1-2 pinch of powder given with milk acts as mild sedative. This may be used 3-4 times a day.')} />
      <List.Item title="3. Black Pigmentation " onPress={()=> Alert.alert('Direction to Use','Black pigmentation over the face is common complaint in ladies especially around menopausal age. Jayphal rubbed in milk and applied on such areas is helpful.')} />
      <List.Item title="4. Abdominal Pain " onPress={()=> Alert.alert('Direction to Use','If pain is due to diarrhoea 2 gm. powder with warm water should be taken 4-5 time a day. It reduces the motility of intestine thereby reducing pain.')} />
      </List.Accordion>

      <List.Accordion title="Jeera" id="12">
      <List.Item title="1. Indigestion " onPress={()=> Alert.alert('Direction to Use','3-6 gm. powder of fried Jeera and rock-salt with warm water thrice daily.')} />
      <List.Item title="2. Diarrhoea / Dysentery " onPress={()=> Alert.alert('Direction to Use','1-2 gm. powder of fried jeera with 250 ml. butter milk four times daily.')} />
      <List.Item title="3. Hyper-acidity " onPress={()=> Alert.alert('Direction to Use','5-10 gm. ghee boiled with jeera should be taken with rice during meals.')} />
      <List.Item title="4. Skin Disease " onPress={()=> Alert.alert('Direction to Use','1-2 gm. powder of fried jeera with milk twice daily.')} />
      <List.Item title="5. Cold " onPress={()=> Alert.alert('Direction to Use','Warm decoction of 2 gm. jeera, 5 gm. Dhania, 1 gm. Haldi, 1 gm. Methi powder and little pepper should be taken with honey/ sugar with lemon two to three times.')} />
      <List.Item title="6. Cough " onPress={()=> Alert.alert('Direction to Use','Either decoction as mentioned above or chewing few grains frequently helps in dry as well as productive cough.')} />
      </List.Accordion>

  </List.AccordionGroup>
  </ScrollView>
  </View>
);
}

export default findscreen;
import React, { useState, useRef } from 'react';
import { View, Alert, StyleSheet, ScrollView, Image, TouchableOpacity, Text, Linking } from 'react-native';

import { Paragraph, Title } from 'react-native-paper';
import { deviceHeight, deviceWidth } from '../Dimen';



const DATA = [
    {
        id: 1,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Bridge-Pose-1.jpg.webp',
        desc: '\n1. Lie on the back.\n\n2. Bend the knees a little and keep the feet flat on the floor, hip-width apart.\n\n3. The knees and ankles must be in a straight line.\n\n4. Place the arms in a resting position beside the body, with the palms downwards.\n\n5. Take a deep breath and lift the lower, middle, and upper back off the floor.\n\n6. Balance the body in a way that the arms, shoulders, and feet support the body weight.\n\n7. Keep the buttocks tight.\n\n8. Have the fingers interlaced, and hands pushed to the ground to help lift the torso higher.\n\n9. Let your child hold this posture for as long as they are comfortable and breathe slowly while they are in the pose.\n\n10. Exhale and release.',
        title: '1. Bridge Pose (Setu Bandha Sarvangasana)',
        pros: 'Stretches and opens the shoulders, thighs, hips, and chest portion; strengthens the back and hamstrings; increases the flexibility of the spine',
        cons: 'If your kid faces difficulty in making the pelvis lift from the floor, slide a sturdy bolster under their sacrum to rest their pelvis. In case of any neck or shoulder pain, take assistance from a professional to hone the steps.',
        add: 'https://youtu.be/Nm5qwS_Ps_Q'

    },
    {
        id: 2,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Tree-Pose-1.jpg.webp',
        desc: '\n1. Begin the posture with the mountain pose, wherein the legs are straight, hands at the sides, back straight, and thigh muscles firm.\n\n2. Lift the right foot with the knee out.\n\n3. Place the right foot on the left inner thigh in a position where it feels comfortable.\n\n4. Press the hands together above the head.\n5. Gaze at a point about five feet away.\n\n6. Hold the position for 30 seconds to a minute.\n\n7. Return the hands to the chest and then lower the right leg.\n\n8. Repeat it on the left leg.',
        title: '2. Tree Pose (Vrksasana)',
        pros: 'Improves balance and concentration; strengthens the thigh muscles, calves, and ankles while stretching the legs and the chest',
        cons: 'If your kid gets unsteady in the beginning while trying to hold their posture, you may make them stand with their back against a wall.',
        add: 'https://youtu.be/Dic293YNJI8'
    },
    {
        id: 3,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Cobra-Pose-1.jpg.webp',
        desc: '\n1. Lie face down with the tips of the feet flat on the floor and palms on either side of the body.\n\n2. Pull the shoulders slightly back towards the spine.\n\n3. Engage the abdomen throughout the exercise as it keeps the lower back protected.\n\n4. Lift the body into a cobra pose while keeping the chin up. Use the hands for support, but without putting unnecessary pressure.\n\n5. Hold the posture for 15 to 30 seconds, before gently releasing the body to the floor. This is a good, morning yoga pose for kids to practice daily.',
        title: '3. Cobra Pose (Bhujangasana)',
        pros: 'Strengthens the spine; stretches the chest, shoulders, abdomen, and buttocks; stimulates the abdominal organs and releases fatigue and stress; might be good for managing breathing problems like asthma.',
        cons: 'Ask your kid to arch the back as much as the body can take. Every child has different flexibility, so let them take it slow.',
        add: 'https://youtu.be/fOdrW7nf9gw'
    },
    {
        id: 4,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Cat-Pose-1.jpg.webp',
        desc: '\n1. Take a tabletop position using the hands and knees.\n\n2. The knees should be directly below their hips, and toes curled.\n\n3. The wrists, elbows, and shoulders should be straight and perpendicular to the floor.\n\n4. Center the head in a neutral position with eyes looking at the floor.\n\n5. With an exhalation, arch the spine up towards the ceiling.\n\n6. Release the head towards the floor without forcing the chin towards the chest.\n\n7. Come back to the initial tabletop position while inhaling slowly.',
        title: '4. Cat Pose (Marjaryasana)',
        pros: 'Relaxes and stretches the spine, neck, torso, and the organs of the abdomen',
        cons: 'If your kid faces difficulty while rounding their upper back, lay a hand above and between the shoulder blades for support.',
        add: 'https://youtu.be/LGLIyrfTiUc'
    },
    {
        id: 5,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Bow-Pose-1.jpg.webp',
        desc: '\n1. Lie flat on the stomach, keeping the arms stretched along the sides of the body and head resting gently on the mat.\n\n2. Inhale and bend the knees bringing the feet towards the hips.\n\n3. Grasp the ankles using both the hands.\n\n4. Lift the shoulders, torso, legs, and hips off the floor while gazing straight ahead.\n\n5. Hold the posture for four to five breaths, then lower the knees and release the feet.\n\n6. Rest on the stomach.',
        title: '5. Bow Pose (Dhanurasana)',
        pros: 'Stretches and strengthens the back, shoulders, chest, and legs; brings flexibility to hip flexor function, and regulates the digestive system',
        cons: 'The bow pose involves a great deal of stretching, so if your child feels heavy in the lower back, keep the posture lower until it is comfortable to stretch. Help them in holding the ankles in step 3 and lifting the body in step 4.',
        add: 'https://youtu.be/4P2mYcOGxbU'
    },
    {
        id: 6,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Frog-Pose-1-1.jpg.webp',
        desc: '\n1. Start by going on the floor on the hands and knees.\n\n2. Position the knees a few inches apart and place the feet right behind the knees.\n\n3. Place the palms right under the shoulders with the fingers facing forward.\n\n4. Look downwards and focus at a point between your hands.\n\n5. Now, push the tailbone towards the back. This will stretch the spine. This position is known as the table position.\n\n6. Slowly move the knees outwards to the sides. Then align the ankles and feet with the knees in a straight line.\n\n7. Start to slide downwards while keeping the palms flat against the floor.\n\n8. Exhale and keep pushing the hips backwards until a stretch is felt.\n\n9. Now, hold this position for three to five breaths.\n\n10. Come back to the table position again.',
        title: '6. Frog Pose (Mandukasana)',
        pros: 'Stretches the hips, thighs, and spine',
        cons: 'If it hurts your child under the knees or the elbows, place a folded blanket to provide support and strength. Let them not stretch beyond their comfort level.',
        add: 'https://youtu.be/bxO4MK8YDWE'
    },
    {
        id: 7,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Easy-Pose-1.jpg.webp',
        desc: '\n1. Sit upright with legs crossed.\n\n2. Rest the hands on the knees with the palms facing up.\n\n3. Evenly balance the weight across the sit bones.\n\n4. Keep the head, neck, and spine aligned all along.\n\n5. Elongate the spine but without stiffing the neck.\n\n6. The feet and thighs should be relaxed.\n\n7. Retain this posture for a minute.\n\n8. Release and change the cross-legged position.',
        title: '7. Easy Pose (Sukhasana)',
        pros: 'Good for the back, thighs, and hips; gives a stretch to the knees and feet; and helps in negating anxiety and stress.',
        cons: 'If your kid’s hips are tight and they are finding it difficult to sit flat, prop them up with a folded blanket or firm pillow under the hips.',
        add: 'https://youtu.be/ZdggFRtM3V0'

    },
    {
        id: 8,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Butterfly-Pose-1.jpg.webp',
        desc: '\n1. Sit with the spine upright and legs spread out straight.\n\n2. Fold the legs so that the feet are touching each other. Hold them with the hands.\n\n3. While exhaling, gently move the thighs and knees in a downward motion.\n\n4. Then start flapping the legs up and down, like the wings of a butterfly.\n\n5. The flapping should be slow initially and then pick up to speed. Breathing should be at a normal pace.\n\n6. Slow down gradually and then stop.\n\n7. Gently release the posture while exhaling.',
        title: '8. Butterfly Pose (Baddha Konasana)',
        pros: 'Stretches the thighs, knees, and hips; regulates the intestine and bowel movement; for girls, helps in easy and painless menstruation.',
        cons: 'If your kid has a knee or groin injury, keep a blanket under the thighs to prevent pain or ache.',
        add: 'https://youtu.be/E3611YwA51E'
    },
    {
        id: 9,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Corpse-Pose-1.jpg.webp',
        desc: '\n1. Lie on the back with legs straight and arms at the sides. The arms should be at a minimum distance of six inches away from the body.\n\n2. Keep the eyes closed, and palms faced upwards.\n\n3. Keep the feet drop open.\n\n4. Breathe normally while resting the body’s weight on the ground.\n\n5. Slowly exhale while relaxing and de-stressing all the body parts.\n\n6. This is the best relaxing yoga pose for kids.',
        title: '9. Corpse Pose (Savasana)',
        pros: 'Keeps the heart rate and blood pressure low; less tension of muscles; low metabolic rate; helps reduce insomnia, anxiety, and fatigue; improves productivity, memory, and concentration.',
        cons: 'Often, the body cools down, and one may feel relatively cold after holding this posture. Have a sweater or a pair of socks around your kid, in case they feel cold.',

        add: 'https://youtu.be/1VYlOKUdylM'
    },
    {
        id: 10,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Chair-pose-1.jpg.webp',
        desc: '\n1. Inhale and raise the arms above the head.\n\n2. Bend the knees forward while exhaling; the thighs should be parallel to the floor.\n\n3. While performing it, the knees will project slightly ahead.\n\n4. Lift your arms and stretch them straight.\n\n5. Keep the tailbone down and the lower back long.\n\n6. Keep the breath steady and easy throughout.\n\n7. Keep the gaze forward.\n\n8. Retain this posture for as long as comfortable, but not more than a minute.',
        title: '10. Chair pose (Utkatasana)',
        pros: 'Works on the thigh muscles and ankles; tones the shoulders, hips, and the spine; regulates the digestive system and heart functioning.',
        cons: 'If your child is experiencing headaches or insomnia, do not perform this asana.',
        add: 'https://youtu.be/0FxWRAJht6k'
    },
    {
        id: 11,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Hero-Pose-1.jpg.webp',
        desc: '\n1. Sit with the knees together and the feet hip-width apart.\n\n2. Sit on the heels with the heels touching the hips.\n\n3. The hands should rest on the knees with the palms facing up.\n\n4. Straighten the spine and drop the shoulders down and a little towards the back.\n\n5. Relax the core while taking deep breaths.\n\n6. Retain the posture for as long as it is comfortable.',
        title: '11. Hero Pose (Virasana)',
        pros: 'Stretches the spine, quadriceps, and shoulders; improves blood circulation and relieves tiredness of legs; improves digestion and posture.',
        cons: 'If the hips don’t rest comfortably on the yoga mat, use a yoga block in between.',
        add: 'https://youtu.be/n6Up0s98zAE'
    },
    {
        id: 12,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Boat-Pose-1.jpg.webp',
        desc: '\n1. Lie down flat with feet aligned together and arms on the sides.\n\n2. Keep the arms and fingers outstretched in the direction of the toes.\n\n3. Inhale and while exhaling, lift the chest and feet off the ground, to form a ‘V’ shape.\n\n3. This will build tension and stretch in the core.\n\n4. The weight of the body will solely rest on the hips.\n\n5. The eyes, hands, and toes should align straight.\n\n5. Hold the breath and retain the posture for a few seconds.\n\n6. Exhale slowly while bringing the body down to the neutral position. And relax.',
        title: '12. Boat Pose (Naukasana)',
        pros: 'Strengthens the core, arm muscles, shoulders, and thighs; it is great for the liver and kidneys; helps reduce constipation and alleviates digestive problems.',
        cons: 'If your kid suffers from any chronic disease or spinal cord problems, avoid the pose.',
        add: 'https://youtu.be/QVEINjrYUPU'
    },
    {
        id: 13,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Mountain-Pose-1.jpg.webp',
        desc: '\n1. Stand straight and tall.\n\n2. Spread the legs a few inches apart and spread the toes.\n\n3. Keep the arms alongside the body.\n\n4.The shoulders must be relaxed and not stiff.\n\n5. Raise the arms above your head.\n\n6. Hold the posture and breathe slowly.\n\n7. Retain as long as comfortable.',
        title: '13. Mountain Pose (Tadasana)',
        pros: 'Improves posture, strengthens the thighs, legs, and ankles; firms the abdomen and hips; improves sleep',
        cons: 'No cautions to follow up.',
        add: 'https://youtu.be/2HTvZp5rPrg'
    },
    {
        id: 14,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Happy-Baby-Pose-1.jpg.webp',
        desc: '\n1. Lie on the back with the knees drawn in towards the chest.\n\n2. Hold the feet with hands. Ensure that the arms are in front of the torso.\n\n3. Draw the shoulders to the back.\n\n4. Slightly stretch the arms and feet.\n\n5. Draw the knees wide apart, as much as comfortable.\n\n6. Elongate the lower back down to the ground while touching the tip of the tailbone.\n\n7. Retain the position for a minute or less, and then release.',
        title: '14. Happy Baby Pose (Ananda Balasana)',
        pros: 'Stretches and opens the hips, thighs and inner groin; elongates the spine; strengthens the arms and shoulders',
        cons: 'If your kid has any knee or ankle injury, check with a doctor before performing this pose.',
        add: 'https://youtu.be/8itSuC_FGco'
    },
    {
        id: 15,
        link: 'https://cdn2.momjunction.com/wp-content/uploads/2015/10/Lion-Pose-1.jpg.webp',
        desc: '\n1. Sit with the hips on the heels.\n\n2. Rest the palms on the knees.\n\n3. Start inhaling from the nose, and while you’re on it, stick your tongue out.\n\n4. Keep the eyes wide open, exhale through the mouth, and make a sound of a roaring lion (Haaa).\n\n5. Many yoga schools suggest that you either concentrate looking at the tip of the nose or in the middle of the eyebrows.',
        title: '15. Lion Pose (Simhasana)',
        pros: 'A great yoga stretch for the lungs, throat, and the respiratory tract; regulates the functioning of the tonsils and the immune system; reduces stress, anger, and anxiety; suitable for a hyperactive child.',
        cons: 'Do not repeat this for more than five times.',
        add: 'https://youtu.be/RmJJ4T_FG5M'
    }
]


const Yoga = ({ navigation }) => {

    return (
        <View >
            <ScrollView>
                {DATA.map((data, index) => {
                    return (

                        <View key={index} style={{ margin: 10, backgroundColor: 'white', borderRadius: 10, elevation: 4, width: deviceWidth - 30, marginVertical: 7, padding: 10 }}>

                            <Title>{data.title}</Title>
                            <Text></Text>
                            <Text style={{ color: 'red', flexDirection: 'row', textAlign: 'justify', textDecorationLine: 'underline' }}>Caution: {data.cons} </Text>

                            <Text></Text>
                            <TouchableOpacity onPress={() => { Alert.alert('How to do', `${data.desc}`) }} >
                                <Image source={{ uri: data.link }} style={{ height: 200, width: 300, alignSelf: 'center', borderRadius: 5 }} />
                            </TouchableOpacity>
                            <Text></Text>
                            <Text onPress={() => { navigation.navigate('WebView2', { url: data.link }) }} style={{ color: 'blue', textDecorationLine: 'underline', textAlign: 'center' }}>Tap to see zoom image</Text>
                            <Text></Text>
                            <Text style={{ fontSize: 20 }}>Benefits</Text>
                            <Text></Text>
                            <Paragraph style={{ textAlign: 'justify' }}>{data.pros}</Paragraph>
                            <Text></Text>
                            <Text onPress={() => { navigation.navigate('WebView2', { url: data.add }) }} style={{ color: 'blue', textDecorationLine: 'underline' }}>For demonstration click here.</Text>
                            <Text></Text>
                        </View>

                    );
                })}
            </ScrollView >


        </View >
    );
};


export default Yoga;
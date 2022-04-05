import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View,Image } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App(){
      return (
           <ScrollView>
           <View style = {styles.Container}>
           <View style={styles.Rectangle}>
            <Text style={styles.Text}>Limkokwing student portal</Text>
            <Image style={styles.Profile}
            source={require("./tebello.jpg")}/>
            <Text style={styles.Names}>Name: Phomolo           </Text>
                <Text style={styles.Surname}>Surname: Tebello      </Text>
                <Text style={styles.Studid}>ID: 901013627         </Text>
                <Text style={styles.Programme}>BSCSM </Text>
                <Text style={styles.Email}>tebellophomolo@gmail.com</Text>
                
                </View>
                
               <View style={styles.Rectangle1}>
               <Text style={styles.SEM1_2}>Y1 Semester2 results     </Text>
                <Text style={styles. Modules}>Bus com....................................................................A</Text>
                <Text style={styles. Modules}>Fund.of design.......................................................C</Text>
                <Text style={styles. Modules}>Creative studies........................................................C+</Text>
                <Text style={styles. Modules}>Calculus I...................................................................B-</Text>
                <Text style={styles. Modules}>Principles of sw eng...............................................B+</Text>
                <Text style={styles. Modules}>Intro to DB..............................................................B</Text>
             </View> 
                <View style={styles.Rectangle1}>
                <Text style={styles.SEM1}>Y2 Semester1 results     </Text>
                <Text style={styles. Modules}>CalculusII..............................................................B</Text>
                <Text style={styles. Modules}>Data Com..............................................................A</Text>
                <Text style={styles. Modules}>Fundumentals of IT...........................................B</Text>
                <Text style={styles. Modules}>C++.........................................................................C</Text>
                <Text style={styles. Modules}>Multimedia.............................................................C+</Text>
                <Text style={styles. Modules}>Web design.............................................................B+</Text>
                
                </View>
               <View style={styles.Rectangle1}>
               <Text style={styles.SEM2}>Y2 Semester2 results</Text>
                <Text style={styles. Modules2}>Probability and stats..................................B</Text>
                <Text style={styles. Modules2}>C++II.................................................................B+</Text>
                <Text style={styles. Modules2}>Java programming........................................C+</Text>
                <Text style={styles. Modules2}>Software modelling.....................................B-</Text>
                <Text style={styles. Modules2}>Database system..........................................C+</Text>
                <Text style={styles. Modules2}>Mobile device programming....................A-</Text>
                </View>
            
         </View>
         </ScrollView>
      );
   }

const styles = StyleSheet.create({
   Container: {
      flex:1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:2,
      marginBottom:2,
      height:500,
      width:800,
    },
   Rectangle:{
      width:'100%',
      backgroundColor:'grey',
      marginTop:5,
      marginBottom:2,
      alignItems: 'center',
      justifyContent:'center',
     
      
    },
  Text:{
     fontSize:36,
     fontWeight:'bold',
     color:'white',
     alignItems:'center',
     justifyContent:'center',
   
    },
   Names:{
      fontSize:20,
      fontWeight:'bold',
      color: 'black',
      justifyContent:'center',
      alignItems:'center',
    },
   Surname:{
      fontSize:20,
      fontWeight:'bold',
      color: 'black',
      justifyContent:'center',
      alignItems:'center',
      },

   Studid:{
      fontSize:20,
      fontWeight:'bold',
      color: 'black',
      justifyContent:'flex-start',
      alignItems:'center',
       },

       SEM1_2:{
         fontSize:16,
         fontWeight:'bold',
         color: 'blue',
         justifyContent:'center',
         alignItems:'center',
         marginTop:3,
         marginBottom:1,
          },
   SEM1:{
      fontSize:16,
      fontWeight:'bold',
      color: 'blue',
      justifyContent:'center',
      alignItems:'center',
      marginTop:3,
      marginBottom:1,
       },
   
    Modules:{
      fontSize:16,
      fontWeight:'normal',
      color: 'black',
      justifyContent:'center',
      alignItems:'center',
      flex:1,
    },
   SEM2:{
      fontSize:16,
      fontWeight:'bold',
      color: 'blue',
      justifyContent:'center',
      alignItems:'center',
      marginTop:3,
      marginBottom:1,

      
      },
   Modules2:{
      fontSize:16,
      fontWeight:'normal',
      color: 'black',
      justifyContent:'center',
      alignItems:'center',
      flex:1,
       },
   Programme:{
      fontSize:20,
      fontWeight:'normal',
      color: 'black',
      justifyContent:'center',
      alignItems:'center',
      },
      Profile:{
         height:100,
         width:100,
         borderRadius:60,
         borderWidth:1,
         borderColor:'white',
      },
      Rectangle1:{
         width:'90%',
         backgroundColor:'grey',
         alignItems:'center',
         marginBottom:10,
         marginTop:10,
      },
      Email:{
         fontSize:16,
         fontWeight:'normal',
         color: 'blue',
         justifyContent:'center',
         alignItems:'center',
      }
     

});
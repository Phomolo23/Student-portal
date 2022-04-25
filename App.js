import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ImageBackground,Image } from 'react-native';
import { AntDesign,EvilIcons,FontAwesome,Octicons,Feather } from '@expo/vector-icons';


export default function App() {
 const finanz = { URL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgoskillspro.com%2Fshop%2Ffinance%2FP1065-pluralsight-excel-statistics-and-finance-function-playbook.html&psig=AOvVaw3fDR9hu5a_AjCe6qwT3eYX&ust=1650965390464000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCewsTzrvcCFQAAAAAdAAAAABAD"}
 const researc = { uri: "https://www.google.com/search?q=research+pictures&rlz=1C1BNSD_enLS996LS996&sxsrf=APq-WBtDPaVIaD676aC91WnE8MG_uRt_UQ:1650879868323&tbm=isch&source=iu&ictx=1&vet=1&fir=OMBj6kprQHNQMM%252Cu2eNgjB12_vcaM%252C_%253BJA8pw_7BXbyvsM%252Cg4howO0XCSMOfM%252C_%253BMMrGU8AS5n_R9M%252Ct4K6Xt01gxZS_M%252C_%253B627Jg6SWizgMQM%252Cz9056JnCfK0SWM%252C_%253BUzoAoOFunKkvXM%252Cg4howO0XCSMOfM%252C_%253B-Kj7fLDn3HduRM%252C6Qiz0NT9cUP-ZM%252C_%253BqJDUF2CQve2g-M%252CTQjvkF0ptlFI4M%252C_%253BTdODNFj7srQlqM%252CDghbWsZLggsQEM%252C_%253Bz2t7AyQwyPxZpM%252CjLFPCs2VzrvBlM%252C_%253BDbOFvUXN4bEtcM%252CidOIoqF1gT8gOM%252C_%253BilDEgNr2TZvYvM%252CZOUeiWGL9-DtBM%252C_%253BRgAQfMeMPumuGM%252CjxMDdeyrOIJZTM%252C_&usg=AI4_-kRsVjfYOf1rKU_tsTmSe45Y4l3mcw&sa=X&ved=2ahUKEwjj3_jg9q73AhWqQEEAHQyEATsQ9QF6BAgGEAE#imgrc=RgAQfMeMPumuGM"}
 const mark = { uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fstock-photos%2Fmarketing.html&psig=AOvVaw0m1bTyhOwFCCU1qusALkQE&ust=1650982034408000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDM8L-xr_cCFQAAAAAdAAAAABAD"}
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <View style={styles.MainSet}>
         <EvilIcons name="navicon" size={26} color="grey" />
         <Text style={styles.textset}>explore in course</Text>
         <FontAwesome name="question-circle" size={24} color="white" />
        </View>        
        <Text style={styles.header}>Classes</Text>

        <View style={styles.Mainscree}>
          <View style={styles.coreSet}>
            <View style={styles.sbar}> 
              <Text style={styles.all}>3 modules catered for you per course</Text>
              <FontAwesome name="question-circle" size={24} color="black" />
            </View>
            <View style={styles.sbar}>
            
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>  
          <View style={styles.minirec1}>
            <View style={styles.interect}>
             <AntDesign name="exclamationcircleo" size={24} color="#DD2C00"/>
             <View style={styles.module1}>
               <Text style={styles.class}>class</Text>
               <Text style={styles.program}>Marketing</Text>
               <Text>13/07/2022  14:00hrs</Text>
             </View>
            </View>
            <View style={styles.class1}>
              <View style={styles.click}>
               <Text style={styles.gen}>login the classroom</Text>
              </View>
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>
          <View style={styles.minirec1}>
          <View style={styles.interect}>
          <Octicons name="book" size={24} color="black" />
             <View style={styles.module1}>
               <Text style={styles.class}>class</Text>
               <Text style={styles.program}>Research</Text>
               <Text style={styles.date}>01/07/2022  14:00hrs </Text>
             </View>
            </View>
            <View style={styles.class1}>
              <View style={styles.click}>
               <Text style={styles.gen}>login the classroom</Text>
              </View>
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>
          <View style={styles.minirec1}>
           <View style={styles.interect}>
             <Octicons name="book" size={24} color="black" />
             <View style={styles.module1}>
               <Text style={styles.class}>class</Text>
               <Text style={styles.program}>Finance</Text>
               <Text style={styles.date}>07/07/2022  14:00hrs</Text>
             </View>
            </View>
            <View style={styles.class1}>
              <View style={styles.click}>
               <Text style={styles.gen}>enter the classroom</Text>
              </View>
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>
        </View>
        <View style={styles.Combine}>
         <View style={styles.combineitem}>
           <Text style={styles.addition}>find exam date and time</Text>
         </View>
         <View style={styles.circle}>
          <Text style={styles.additionplus}>+</Text>
         </View>
         <Text style={styles.plus}>Course</Text>
        </View>
        <View style={styles. lscree}>
          
          <View style={styles.sbar}> 
          <View style={styles.set2}>
              <Text style={styles.gen}>Course</Text>
              <FontAwesome name="question-circle" size={24} color="black" />
            </View>
            <Octicons name="search" size={24} color="black" />
            <View style={styles.bar1}>
              <Text>Available Courses</Text>
              <EvilIcons name="chevron-right" size={30} color="black" />
            </View>
          </View>
          <View style={styles.Mrect}>
           <ImageBackground source={mark} resizeMode="cover" style={styles.image}>
             <View style={styles.Subcont}>
             <Image style={styles.modulepic}
                source={require('./assets/market.jpg')} />
                <Feather name="more-vertical" size={24} color="white"margin="left" />
             </View>
             <Text style={styles.lecturer}> Mrs.Sebotsa</Text>
             <Text style={styles.programofstudy}> Business management</Text>
             <Text style={styles.text}>Marketing</Text>
             <View style={styles.Ref}>
                <AntDesign name="folder1" size={24} color="black" marginLeft={20} />
              </View>
           </ImageBackground>
          </View>
          <View style={styles.rect1}>
          <ImageBackground source={researc} resizeMode="cover" style={styles.image}>
            <View style={styles.Subcont}>
              <Image style={styles.modulepic}
                 source={require('./assets/research1.jpg')} />
                <Feather name="more-vertical" size={24} color="white"margin="left" />
              </View>
             <Text style={styles.lecturer}> Mr.Tebello</Text>
             <Text style={styles.programofstudy}> Business management</Text>
             <Text style={styles.text}>Research</Text>
             <View style={styles.Ref}>
                <AntDesign name="folder1" size={24} color="black" marginLeft={20} />
              </View>
           </ImageBackground>
          </View>
          <View style={styles.rect2}>
          <Text style={styles.programofstudy}> Business management</Text>
           <ImageBackground source={finanz} resizeMode="cover" style={styles.image}>
             <View style={styles.Subcont}>
             
               <Image style={styles.modulepic}
                 source={require('./assets/finance1.jpg')} />
                <Feather name="more-vertical" size={24} color="white"margin="left" />
             </View>
             <Text style={styles.lecturer}> Mr.Edward</Text>
              <Text style={styles.programofstudy}> Business management</Text>
              <Text style={styles.text}>Finance</Text>
              <View style={styles.storage}>
                <AntDesign name="folder1" size={24} color="black" marginLeft={20} />
              </View>
           </ImageBackground>
          </View>
          </View>
        </View>
        <View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  MainSet:{
    height:35,
    backgroundColor:'grey',
    margin: 15,
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
   marginLeft:5,
  },
  coreSet: {
    height:40,
    width:'100%',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor:'purple',
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
   marginBottom: 3,
},
set2:{
  height:40,
    width:'100%',
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor:'white',
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',
   marginBottom: 1,
},
Combine:{
  height:50,
  width:'96%',
  backgroundColor:'white',
  alignContent:'center',
  flexDirection:'row',
  marginLeft:8,
},
combineitem:{
    height:40,
    width:'69%',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius:10,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginTop:10,

},
circle:{
  height:30,
  width:30,
  borderRadius:40,
  backgroundColor:'blue',
  alignItems:'center',
  justifyContent:'center',
  marginLeft:10,
  marginTop:10,
},
addition:{
  fontSize:15,
  fontWeight:'bold',
  color:'white',
},
additionplus:{
  fontSize:50,
  fontWeight:'bold',
  color:'white',
  marginBottom:15,
},
plus:{
  fontSize:13,
  fontWeight:'bold',
  marginTop:1,
  marginLeft:5,
  color:'blue',
},
  textset:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
 
  rect1:{
    height:60,
    width:'100%',
    borderWidth: 0.1,
    borderColor: 'grey',
    backgroundColor:'green',
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',

  },
  Mainscree:{
    height: 300,
    backgroundColor:'white',
    justifyContent:'center',
    margin: 12,
  },
 lscree:{
    height: 650,
    backgroundColor:'grey',
    alignItems:'center',
    justifyContent:'center',
    margin: 12,
  },
  Mrect: {
    width:'100%',
    height: 300,
    borderWidth: 3,
    borderColor: 'brown',
    borderRightColor:'white',
    borderLeftColor:'white',
    marginTop: 5,
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  
  rect2: {
    width:'100%',
    height: 200,
    borderWidth: 3,
    borderColor: 'white',
    borderRightColor:'white',
    borderLeftColor:'white',
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  header:{
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    marginLeft: 20,
  },
  bar1:{
    flexDirection: 'row',
    marginLeft:15,
    alignItems:'center',
  },
  gen:{
    color:'black',
    fontSize:14,
    fontWeight:'bold',
    margin: 10,
  },
  module1:{
    marginLeft:1,
    alignItems:'center',
    backgroundColor:'brown',
    borderWidth: 6,
    borderColor: 'brown',
    borderRightColor:'brown',
    borderLeftColor:'brown',
    height:40,
  },

  class:{
    color:'black',
    fontSize:11,
    fontWeight:'bold',
  },
  program:{
    color:'black',
    fontSize:14,
    fontWeight:'bold',
  },
  date:{
    fontSize:9,
    fontWeight:'normal',
  },
  class1:{
    flexDirection: 'row',
    marginLeft:15,
    alignItems:'center',
    backgroundColor:'white',
    height:50,
    justifyContent: "space-evenly",
  },
 
  click:{
    alignItems:'center',
    backgroundColor:'blue',
    height:30,
    width:70,
    justifyContent: 'center',
    borderRadius: 5,
  },
  interect:{
    height:90,
    marginLeft:1,
    backgroundColor:'blue',
    alignItems:'center',
    flexDirection:'row',
  },
  minirec1:{
    height:90,
    width:'100%',
    borderWidth: 1,
    borderLeftColor:'red',
    borderTopColor:'white',
    borderColor: 'grey',
    backgroundColor:'green',
    alignItems:'center',
   justifyContent: 'space-between',
   flexDirection: 'row',

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 35,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "blue",
  },
  Ref:{
    backgroundColor:'white',
    height:53,
    width:'100%',
    marginTop:1,
    borderBottomStartRadius:4,
    borderBottomRightRadius:4,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  programofstudy:{
    color: "white",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
  },
  lecturer:{
    color: "black",
    fontSize: 17,
    lineHeight: 16,
    fontWeight: "regular",
  },
  modulepic:{
    width: '100%',
    height: 50,
    borderRadius:80,
    marginRight:10,
    marginTop:5,
    alignItems:'flex-start'
   },
   Subcont:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
   },
  sbar:{
    flexDirection: 'row',
    marginLeft:20,
    alignItems:'center',
   }
});

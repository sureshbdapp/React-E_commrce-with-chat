import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  useColorScheme,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import PagerView from 'react-native-pager-view'
import AlertDialog from './AlertDialog/AlertDialog';



function Dashboard(): JSX.Element {

  const [showAlert, setShowAlert ] = useState(false);

//   const showAlert = () =>{
//     AlertDialog()
//  }
  const isDarkMode = useColorScheme() === 'dark';
 //const alert = new AlertDialog
 //useEffect(() => {setAlert(true)}, [alert])
 
  const data = [
    {
      image: require('../assets/bread.png'),
    },
    {
      image: require('/Users/bd19/Reactcliproject/assets/pie.png'),
    },
    {
      image: require('../assets/pancakes.png'),
    },
    {
      image: require('/Users/bd19/Reactcliproject/assets/calender_icon.png'),
    },
    {
      image: require('../assets/favicon.png'),
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{width: '100%', height: '100%', backgroundColor: '#FFF'}}>
        <View
          style={{
            marginStart: 20,
            marginEnd: 20,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../assets/Back-Navs.png')}
            style={{height: 50, width: 50, marginTop: 10}}
          />
          <View>
            <Text
              style={{
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Breakfast
            </Text>
            {/* {alert ? <AlertDialog /> : ''} */}
          </View>
          
          <Pressable onPress={()=> {setShowAlert(true)}
        }>
          <Image 
            source={require('../assets/Detail_Navs.png')}
            style={{height: 50, width: 50}}
            
          />
      
          </Pressable>
        
        </View>

        <View
          style={{
            marginStart: 20,
            marginEnd: 20,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F7F8F8',
            borderRadius: 20,
            paddingStart: 20,
            alignContent: 'space-between',
            elevation: 2,
          }}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../assets/Search.png')}
          />
          <TextInput
            placeholder="Search Pancake"
            placeholderTextColor={'#000'}
            style={{
              borderRadius: 20,
              fontSize: 16,
              color: '#000',
              paddingEnd: 20,
              marginStart: 10,
              width: '80%',
            }}></TextInput>
          <Image
            style={{height: 25, width: 25, marginEnd: 30}}
            source={require('../assets/Filter.png')}
          />
        </View>
        {/* View pager */}
        <View
          style={{
            marginStart: 20,
            marginEnd: 20,
            flexDirection: 'column',
            width: '100%',
            height: '15%',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: '600',
              marginTop: 20,
              marginStart: 10,
              width: 100,
            }}>
            Category
          </Text>

          <PagerView style={styles.pagerView} initialPage={0}>
            <View
              key="1"
              style={{
                elevation: 5,
                backgroundColor: '#d7efe0',
                height: 120,
                width: '90%',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Image
                style={{height: 50, width: 50}}
                source={require('../assets/favicon.png')}
              />
            </View>

            <View
              style={{
                backgroundColor: '#92A3FD',
                height: 120,
                width: '90%',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Image
                style={{height: 50, width: 50}}
                source={require('../assets/favicon.png')}
              />
            </View>

            <View
              key="2"
              style={{
                backgroundColor: '#92A3FD',
                height: 120,
                width: '80%',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Text>Second page</Text>
            </View>
          </PagerView>
          {/* View pager */}
        </View>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: '600',
            marginStart: 25,
            width: 100,
          }}>
          Items
        </Text>
        <View
          style={{
            backgroundColor: '#C58BF2"',
            borderRadius: 20,
            marginStart: 20,
            marginEnd: 20,
          }}>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: '#d7efe0',
                  height: 110,
                  width: 90,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                  marginEnd: 15,
                  elevation: 1,
                  marginBottom: 5,
                }}>
                {<Image style={{height: 50, width: 70}} source={item.image} />}
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    fontWeight: '600',
                    marginTop: 2,
                  }}>
                  Items
                </Text>
              </View>
            )}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 20,
            marginStart: 25,
            width: '40%',
          }}>
          Recommendation for Diet
        </Text>
        <View
          style={{
            backgroundColor: '#eae5f5"',
            borderRadius: 20,
            marginStart: 20,
            marginEnd: 20,
            marginBottom: 5,
          }}>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: '#eae5f5',
                  height: 200,
                  width: 200,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 15,
                  marginEnd: 15,
                }}>
                {
                  <Image
                    style={{height: '50%', width: '65%'}}
                    source={item.image}
                  />
                }
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    fontWeight: '600',
                    marginTop: 5,
                  }}>
                  Dishes
                </Text>
                <View
                  style={{
                    borderRadius: 20,
                    backgroundColor: '#EEA4CE',
                    width: 100,
                    height: 40,
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                      color: '#000',
                    }}>
                    View
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: '#C58BF2"',
            borderRadius: 20,
            marginStart: 25,
            marginBottom: 25,
            padding: 5,
          }}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'space-between',
                  flex: 1,
                  backgroundColor: '#faf2f8',
                  elevation: 2,
                  height: 100,
                  width: '100%',
                  borderRadius: 20,
                  marginTop: 15,
                }}>
                {
                  <Image
                    style={{
                      height: '50%',
                      width: 65,
                      marginTop: 25,
                      marginStart: 15,
                    }}
                    source={item.image}
                  />
                }
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    fontWeight: '600',
                    marginTop: 25,
                    width: '50%',
                    marginStart: 8,
                  }}>
                  Dishes
                </Text>
                {
                  <Image
                    style={{
                      height: '35%',
                      width: 35,
                      marginTop: 30,
                      marginStart: 40,
                    }}
                    source={require('/Users/bd19/Reactcliproject/assets/Button_right.png')}
                  />
                }
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  pagerView: {
    width: '100%',
    height: '100%',
    marginBottom: 60,
    elevation: 5,
  },
});
export default Dashboard;

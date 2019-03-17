// Importing from React.
import React, {Component} from 'react';
// Importing from React Native.
import {Platform, StyleSheet,Image} from 'react-native';
//Importing from native-base.
import { Card,CardItem, Container, Header, Title, Content, Body,Text,Left
} from 'native-base';

// Import config styles.
import colors from '../config/styles';

class Memories extends Component{
  static navigationOptions = {
    title: 'Memories',
    // swipeEnabled: true
  };

  render() {
    return (
      <Container>
        <Header style={styles['Container']} androidStatusBarColor={colors.MAIN_COLOR}>
          <Body>
            <Title style={styles['Title']}>
              All Memories
            </Title>
          </Body>
        </Header>
        
        <Content style={styles['Content']}>
          {/* should use 'FlatList' when add functionalities */}
          <Card style={styles['Card']}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles['Title']}>Memory Title</Text>
                  <Text style={styles['Text']} note>Place Name</Text>
                  <Text style={styles['Text']} note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image source={{uri: 'Image URL'}} style={{height: 150, width: 150, flex: 1}}/>
                <Text style={styles['Text']}>
                  The day when i promise her..
                </Text>
              </Body>
            </CardItem>

          </Card>
        </Content>
      
      </Container>
    );
  }
}
  
const styles = StyleSheet.create({
  'Container': {
    backgroundColor: colors.MAIN_COLOR,
    height: 40,
  },
  'Title': {
    fontSize: 15,
  },
  'Content':{
    marginHorizontal: 10,
    marginVertical: 5,
  },
  'Card':{
    borderColor: colors.MAIN_COLOR
  },
  'Card-Item':{

  },
  'Text':{
    fontSize: 12
  },
  'Image':{

  }
});
  

export default Memories;
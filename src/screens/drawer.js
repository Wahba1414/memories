//Importing from react.
import React, {Component} from 'react';
//Importing from React-Native.
import {StyleSheet,View} from 'react-native';
//Importing from native-base.
import {Text,Form,Item,DatePicker,Textarea, Input, Button, Icon,Container,Header,Body,Title,Content
} from 'native-base';

// Import config styles.
import colors from '../config/styles';

class Drawer extends Component{
    render(){
        return(
            <Container>
                <Header style={styles['Container']} androidStatusBarColor={colors.MAIN_COLOR}>
                <Body>
                    <Title style={styles['Title']}>
                        Drawer
                    </Title>
                </Body>
                </Header>
                
                <Content style={styles['Content']}>
                    <Text>
                        Content
                    </Text>
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

export default Drawer;

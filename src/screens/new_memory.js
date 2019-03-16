//Importing from react.
import React, {Component} from 'react';
//Importing from React-Native.
import {StyleSheet,ScrollView,View} from 'react-native';
//Importing from native-base.
import { Container, Header, Title, Content,Right, Body,Text,Form,Item,DatePicker,Textarea, Input} from 'native-base';

// Import config styles.
import colors from '../config/styles';

class New_Memory extends Component{
  static navigationOptions = {
    title: 'New Memory',
  };
  
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <Container>
        <Header style={styles['Container']}>
          <Body>
            <Title style={styles['Title']}>
              New Memory
            </Title>
          </Body>
          <Right />
        </Header>
        
        <Content>
          <ScrollView>
            {/* Uploading image */}
            <View>
              <Text>
                Upload an Image.
              </Text>
            </View>

            {/* Memory details */}
            <View>
            <Form>
              <View style={styles['Memory-Details-View']}>
                <Item rounded style={styles['Item']}>
                  <Input placeholderTextColor={colors.MAIN_COLOR} style={styles['Input']} placeholder='Memory Title'/>
                </Item>
                
                <Item rounded style={styles['Item']}>
                  <Input placeholderTextColor={colors.MAIN_COLOR} style={styles['Input']} placeholder='Place Name'/>
                </Item>

                {/* Write how you feel ;) */}
                <Textarea placeholderTextColor={colors.MAIN_COLOR} style={[styles['Item'],styles['Input']]} rowSpan={4} bordered placeholder="How You Feel ;)" />
              </View>

              {/* Date picker */}
              <View style={styles['Date-Picker-View']}>
                <DatePicker
                defaultDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: colors.MAIN_COLOR }}
                placeHolderTextStyle={{ color: colors.MAIN_COLOR }}
                onDateChange={this.setDate}
                disabled={false}
                />
              
              </View>


            </Form>
            </View>

          </ScrollView>
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
  'Memory-Details-View':{
    marginLeft: 5,
    marginRight: 5,
  },
  'Date-Picker-View':{
    marginLeft: 5,
    marginRight: 5,
    flex:1,
    alignItems:'center'
  },
  
  'Item':{
    marginBottom: 10,
    borderColor: colors.MAIN_COLOR
  },

  'Input':{
    // color: MAIN_COLOR, 
  }


});
  

export default New_Memory;
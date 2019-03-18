//Importing from react.
import React, {Component} from 'react';
//Importing from React-Native.
import {StyleSheet,ScrollView,View,Image,Dimensions} from 'react-native';
//Importing from native-base.
import { Container, Header, Title, Content,Right, Body,Text,Form,
  Item,DatePicker,Textarea, Input, Button, Icon
} from 'native-base';

//image picker.
var ImagePicker = require('react-native-image-picker');

// Get in the dimension of the window.
var {height, width} = Dimensions.get('window');

var imageWidth = Math.round(width * 0.8);
var imageHeight= Math.round(imageWidth * 3 / 4);

console.log('imageWidth: ' , imageWidth , ',imageHeight: ' , imageHeight);

// Import config styles.
import colors from '../config/styles';

class New_Memory extends Component{
  static navigationOptions = {
    title: 'New Memory',
  };
  
  constructor(props) {
    super(props);
    
    this.state = { 
      chosenDate: new Date(),
      filePath: {}, 
    };
  
    this.setDate = this.setDate.bind(this);
  }

  updateDiemsnions = () => {
    //NEED_TEST
    console.log('Dimension changed');
    // Get in the dimension of the window.
    height =  Dimensions.get('window').height;
    width =  Dimensions.get('window').width;

    // update the image diemensions.
    imageWidth = Math.round(width * 0.8);
    imageHeight= Math.round(imageWidth * 3 / 4);

    console.log('imageWidth: ' , imageWidth , ',imageHeight: ' , imageHeight);
  }

  // React LifeCycle hooks.
  componentDidMount() {
    //Add an event for dimension changes.
    Dimensions.addEventListener('change', this.updateDiemsnions)
  }

  // avoid the memory leakge which not handled.
  componentWillUnmount() {
    //Unset the Diemension event listener.
    console.log('Inside the unmount function');
    Dimensions.removeEventListener('change',this.updateDiemsnions);
  }


  //Date picker.
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }


  //Pick up an image.
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
         console.log('User cancelled image picker');
      } else if (response.error) {
         console.log('ImagePicker Error: ', response.error);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };


  keepMemory = () => {
    console.log('keep a new memory');
  }

  render() {
    return (
      <Container>
        <Header style={styles['Container']} androidStatusBarColor={colors.MAIN_COLOR}>
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
            <View style={styles['Center-View']}>
              
              {this.state.filePath.data && <View style={styles['Image-View']}>
                <Image
                  source={{
                    uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                  }}
                  style={{width: imageWidth, height: imageHeight }}
                />
              </View>}
              
              <Button onPress={this.chooseFile.bind(this)} style={styles['Pick-Up-Image-Button']} bordered iconLeft>
                <Icon style={{color: colors.MAIN_COLOR}} name='images' />
                <Text placeholderTextColor={colors.MAIN_COLOR} style={styles['Input']}>Select Image</Text>
              </Button>
            </View>

            {/* Memory details */}
            <View>
            <Form>
              <View style={styles['Memory-Details-View']}>
                <Item rounded style={[styles['Item'],{height: 40}]}>
                  <Input placeholderTextColor={colors.MAIN_COLOR} style={styles['Input']} placeholder='Memory Title'/>
                </Item>
                
                <Item rounded style={[styles['Item'],{height: 40}]}>
                  <Input placeholderTextColor={colors.MAIN_COLOR} style={[styles['Input']]} placeholder='Place Name'/>
                </Item>

                {/* Write how you feel ;) */}
                <Textarea placeholderTextColor={colors.MAIN_COLOR} style={[styles['Item']]} rowSpan={4} bordered placeholder="How You Feel ;)" />
              </View>

              {/* Date picker */}
              <View style={styles['Center-View']}>
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
              
              <View style={styles['Center-View']}>
                <Button onPress={this.keepMemory()} style={styles['Keep-Memory-Button']} bordered iconLeft>
                  <Icon style={{color: colors.MAIN_COLOR}} name='bookmark' />
                  <Text placeholderTextColor={colors.MAIN_COLOR} style={styles['Input']}>Keep it</Text>
                </Button>
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
  'Center-View':{
    marginLeft: 20,
    marginRight: 20,
    flex:1,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  'Item':{
    marginBottom: 10,
    borderColor: colors.MAIN_COLOR,
  },
  'Input':{
    color: colors.MAIN_COLOR, 
  },
  'Pick-Up-Image-Button':{
    backgroundColor: 'white',
    width: '60%',
    borderColor: colors.MAIN_COLOR
  },
  'Image-View' :{
    marginBottom: 10,
    flex:1,
    alignSelf: 'center',
  },
  'Keep-Memory-Button':{
    backgroundColor: 'white',
    width: '40%',
    borderColor: colors.MAIN_COLOR
  }
});
  

export default New_Memory;
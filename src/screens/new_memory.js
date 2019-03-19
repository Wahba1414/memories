//Importing from react.
import React, {Component} from 'react';
//Importing from React-Native.
import {StyleSheet,ScrollView} from 'react-native';
//Importing from native-base.
import { Container, Header, Title, Content,Right, Body
} from 'native-base';

//image picker.
var ImagePickerAPI = require('react-native-image-picker');

// Import components.
import ImagePicker from '../components/image_picker'
import MemoryDetails from '../components/memory_details'

// Import config styles.
import colors from '../config/styles';


class NewMemory extends Component{
  static navigationOptions = {
    title: 'New Memory',
  };
  
  constructor(props) {
    super(props);
    
    this.state = { 
      chosenDate: new Date(),
      imagePath: {}, 
    };
  
    this.setDate = this.setDate.bind(this);
  }

  //Date picker.
  setDate(newDate) {
    console.log('Inside setDate function');
    this.setState({ chosenDate: newDate });
  }

  //Pick up an image.
  chooseImage = () => {
    console.log('Inside chooseImage function');
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePickerAPI.showImagePicker(options, response => {
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
          imagePath: source,
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
            <ImagePicker imagePath={this.state.imagePath} chooseImage={this.chooseImage}></ImagePicker>
            {/* Memory details */}
            <MemoryDetails setDate={this.setDate} keepMemory={this.keepMemory}></MemoryDetails>
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
  }
});
  

export default NewMemory;
//Importing from react.
import React, {Component} from 'react';
//Importing from React-Native.
import {StyleSheet,View,Image,Dimensions} from 'react-native';
//Importing from native-base.
import { Text, Button, Icon
} from 'native-base';

// Import config styles.
import colors from '../config/styles';

// Get in the dimension of the window.
var {height, width} = Dimensions.get('window');

var imageWidth = Math.round(width * 0.8);
var imageHeight= Math.round(imageWidth * 3 / 4);

console.log('imageWidth: ' , imageWidth , ',imageHeight: ' , imageHeight);

class ImagePicker extends Component{
    
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

    render(){
        console.log('props: ' , this.props);
        return(
            <View style={styles['Center-View']}>
                    
                {this.props.imagePath.data && <View style={styles['Image-View']}>
                <Image
                    source={{
                    uri: 'data:image/jpeg;base64,' + this.props.imagePath.data,
                    }}
                    style={{width: imageWidth, height: imageHeight }}
                />
                </View>}
                
                <Button onPress={this.props.chooseImage} style={styles['Pick-Up-Image-Button']} bordered iconLeft>
                    <Icon style={{color: colors.MAIN_COLOR}} name='images' />
                    <Text placeholderTextColor={colors.MAIN_COLOR} style={styles['Input']}>Select Image</Text>
                </Button>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    'Center-View':{
      marginLeft: 20,
      marginRight: 20,
      flex:1,
      alignSelf: 'center',
      marginBottom: 10,
      marginTop: 10,
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
    }
  });

export default ImagePicker;
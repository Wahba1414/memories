//Importing from react.
import React, {Component} from 'react';
//Importing from React-Native.
import {StyleSheet,View} from 'react-native';
//Importing from native-base.
import {Text,Form,Item,DatePicker,Textarea, Input, Button, Icon
} from 'native-base';

// Import config styles.
import colors from '../config/styles';

class MemoryDetails extends Component{
    render(){
        console.log('props: ' , this.props);
        return(
            <View>
                <Form>
                    <View style={styles['Memory-Details-View']}>
                        <Item rounded style={[styles['Item'],{height: 40}]}>
                        <Input onChangeText={(value) => this.props.onChangeText('Title', value)} id='Title' placeholderTextColor={colors.MAIN_COLOR} style={styles['Input']} placeholder='Memory Title'/>
                        </Item>
                        
                        <Item rounded style={[styles['Item'],{height: 40}]}>
                        <Input onChangeText={(value) => this.props.onChangeText('Place', value)} id='Place' placeholderTextColor={colors.MAIN_COLOR} style={[styles['Input']]} placeholder='Place Name'/>
                        </Item>

                        {/* Write how you feel ;) */}
                        <Textarea onChangeText={(value) => this.props.onChangeText('Description', value)} id='Description' placeholderTextColor={colors.MAIN_COLOR} style={[styles['Item']]} rowSpan={4} bordered placeholder="How You Feel ;)" />
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
                        onDateChange={this.props.setDate}
                        disabled={false}
                        />
                    
                    </View>
                
                    <View style={styles['Center-View']}>
                        <Button onPress={this.props.keepMemory} style={styles['Keep-Memory-Button']} bordered iconLeft>
                        <Icon style={{color: colors.MAIN_COLOR}} name='bookmark' />
                        <Text placeholderTextColor={colors.MAIN_COLOR} style={styles['Input']}>Keep it</Text>
                        </Button>
                    </View>

                </Form>
            </View>

        );
    }

}

const styles = StyleSheet.create({
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
    'Keep-Memory-Button':{
      backgroundColor: 'white',
      width: '40%',
      borderColor: colors.MAIN_COLOR
    }
});

export default MemoryDetails;
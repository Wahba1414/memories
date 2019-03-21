// Importing from React.
import React, {Component} from 'react';
// Importing from React Native.
import {Platform, StyleSheet,Image,FlatList} from 'react-native';
//Importing from native-base.
import { Card,CardItem, Container, Header, Title, Content, Body,Text,Left,Drawer,Button,Icon,Right
} from 'native-base';
// Import from react-redux.
import {connect} from 'react-redux';

// Import screens.
import SideBar from './drawer';

// Import config styles.
import colors from '../config/styles';

class Memories extends Component{
  static navigationOptions = {
    title: 'Memories',
    // swipeEnabled: true
  };

  // Drawer.
  closeDrawer = () => {
    this._drawer._root.close();
  }
  openDrawer = () => {
      this._drawer._root.open();
  }

  render() {
    // console.log('this.props.memories: ' , this.props.memories[0])
    return (
      <Drawer
      ref={(ref) => { this._drawer = ref; }}
      content={<SideBar />} >
        <Container>
          <Header style={styles['Container']} androidStatusBarColor={colors.MAIN_COLOR}>
            <Left>
              <Button transparent onPress={this.openDrawer.bind(this)}>
                <Icon name='menu'  />
              </Button>
            </Left>
            <Body>
              <Title style={styles['Title']}>
                Memories
              </Title>
            </Body>
            <Right/>
          </Header>
          
          <Content style={styles['Content']}>
            {/* should use 'FlatList' when add functionalities */}
            <FlatList
            data={this.props.memories}
            renderItem={ ({item}) => (
                <Card style={styles['Card']}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text style={styles['Title']}>{item.title}</Text>
                        <Text style={styles['Text']} note>{item.place}</Text>
                        <Text style={styles['Text']} note>{item.date}</Text>
                      </Body>
                    </Left>
                  </CardItem>

                  <CardItem>
                    <Body>
                      <Image
                        source={{
                        uri: 'data:image/jpeg;base64,' + item.image,
                        }}
                        style={{width: 250, height: 150 }}
                      />
                      <Text style={styles['Text']}>
                        {item.description}
                      </Text>
                    </Body>
                  </CardItem>

              </Card>
              )  
            } />
          </Content>
        
        </Container>
      </Drawer>  
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
  

const mapStateToProps = state => {
  return {
    memories: state.memories.memories,
  }
}


const mapDispatchToProps = dispatch => {
  return {
     
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Memories);
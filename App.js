import React ,{Component} from 'react';
import { StyleSheet ,Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from "expo-font";
import { ActivityIndicator } from "react-native";
import { Header, Content, List, ListItem, Icon, Title} from 'native-base';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
     
    });
    this.setState({ loading: false });
  }
  
  render(){
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
  return (
    <View>
      <Header>
        <Title style={styles.cabecario}>Lista</Title>
      </Header>
     
        <List>
          <ListItem>
            <Icon name='book' style={styles.icones}/>
            <Text>Disciplina</Text>
          </ListItem>
          <ListItem>
            <Icon type='FontAwesome' name='globe' style={styles.icones}/>
            <Text>Normas da ABNT</Text>
          </ListItem>
          <ListItem>
            <Icon type='FontAwesome' name='tasks' style={styles.icones}/>
            <Text>Repositorio</Text>
          </ListItem>
          <ListItem>
            <Icon type='FontAwesome' name='cubes' style={styles.icones}/>
            <Text>Ferramentas</Text>
          </ListItem>
          <ListItem>
            <Icon type='FontAwesome' name='mortar-board' style={styles.icones} />
            <Text>Ferramentas</Text>
          </ListItem>
          <ListItem>
            <Icon type='FontAwesome' name='question' style={styles.icones}/>
            <Text>Duvidas</Text>
          </ListItem>
        </List>
   
    </View>
  );
  }
}


const styles = StyleSheet.create({
 icones: {
    fontSize: 20,
     color: 'red',
     marginRight: 20
  },
  cabecario:{
    alignItems:"center",
    marginTop:10 
  }
});
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8880BC",
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  title: {
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 35,
    color: '#fff',
  },
  texto: {
    color: '#fff',
  },
  viewInput: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    borderColor: '#fff',
    borderStyle:"solid",
    borderWidth: 2,
    borderRadius: 9,
  },
  botao:{
    backgroundColor:'#ab3ed8',
    width: 125,
    borderRadius: 20,
    marginTop: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  escolha:{
    width:200, 
    color:"#fff",
  },
  bordaEscolha:{
    borderColor:"#fff",
    borderStyle:"solid",
    borderRadius:8,
  }
});

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Animated,
  View,
  AmbientLight,
  PointLight,
  Model
} from 'react-vr';
import { Easing } from 'react-native';

export default class WebVR extends React.Component {
  constructor(){
    super();
    this.state = {
      animateValue: new Animated.Value(0)
    }
  }

  componentDidMount(){
    this.rotationclock();
  }

  rotationclock(){
    this.changeColor()
    this.state.animateValue.setValue(0);
    Animated.timing(
      this.state.animateValue,
      {
        toValue: 360,
        duration: 2500,
        easing: Easing.linear,
      }
    ).start(()=> this.rotationanticlock());
  }

  rotationanticlock(){
    this.changeColor()
    this.state.animateValue.setValue(360);
    Animated.timing(
      this.state.animateValue,
      {
        toValue: 0,
        duration: 2500,
        easing: Easing.linear,
      }
    ).start(()=> this.rotationclock());
  }

  changeColor(){
    let randomNumber
    randomNumber = Math.floor((Math.random() * 5) + 1)

    if(randomNumber == 1){
      this.setState({
        output: 'green',
      });
    } else if(randomNumber == 2) {
      this.setState({
        output: 'red',
      });
    } else if(randomNumber == 3) {
      this.setState({
        output: 'yellow',
      });
    } else if(randomNumber == 4) {
      this.setState({
        output: 'blue',
      });
    } else {
      this.setState({
        output: 'violet',
      });
    }
  }

  render() {
    const AnimateModel = Animated.createAnimatedComponent(Model);
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <AmbientLight intensity={0.9} style={{color: this.state.output}}/>
        <PointLight style = {{color: 'white', transform: [{translate: [0,0,0]}]}}/>
        <AnimateModel
        source = {{obj: asset('boy.obj'),mtl: asset('boy.mtl')}}
        lit
        style = {{
          layoutOrigin: [0.5,0.5],
          transform:[{translate: [0,-8,-25]},
                     {rotateY: this.state.animateValue}]
        }}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('WebVR', () => WebVR);

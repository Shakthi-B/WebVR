import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Animated,
  View,
  Text,
  VrButton
} from 'react-vr';

export default class WebVR extends React.Component {
  constructor(){
    super();
    this.state = {
      animateValue: new Animated.Value(-1)
    }
  }

  handleStart(){
    Animated.timing(
      this.state.animateValue,
      {
        toValue: 1,
        duration: 1000,
        delay: 0
      }
    ).start();
  }

  handleStop(){
    Animated.decay(
      this.state.animateValue, {
        velocity: 0.01,
        deceleration: 0.98
      }
    ).start();
  }

  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>

        <VrButton billboarding = {'on'}
            style = 
            {
              {
                transform: [{translate: [-0.2, -0.5, -2]}],
                backgroundColor: 'blue'
              }
            }
            onClick = {
              this.handleStart.bind(this)
            }>
            <Text>Start</Text>
          </VrButton>
          <VrButton billboarding = {'on'}
            style = 
            {
              {
                transform: [{translate: [-0.2, -0.6, -2]}],
                backgroundColor: 'red'
              }
            }
            onClick = {
              this.handleStop.bind(this)
            }>
            <Text>Stop</Text>
          </VrButton>

        <Animated.Image
        style = {{
          width: 0.5,
          height: 0.5,
          layoutOrigin: [0.5,0.5],
          transform:[{translateY: 0},
                      {translateX: this.state.animateValue},
                      {translateZ: -2}]
        }}source={asset('car.png')}>
        </Animated.Image>

        <Animated.Image
          style = {{
            width: 0.5,
            height: 0.5,
            layoutOrigin: [0.5,0.5],
            transform:[{translateY: 0.6},
                        {translateX: 1},
                        {translateZ: -2}]
          }}source={asset('finish.png')}>

          </Animated.Image>
      </View>
    );
  }
};

AppRegistry.registerComponent('WebVR', () => WebVR);

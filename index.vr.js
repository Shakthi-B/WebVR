import React from 'react';
import {
  AppRegistry,
  asset,
  Box,
  Cylinder,
  Pano,
  Sphere,
  Text,
  Animated,
  View,
} from 'react-vr';

export default class WebVR extends React.Component {
  constructor(){
    super();
    this.state = {
      animateValue: new Animated.Value(2.1)
    }
  }

  componentDidMount(){
    Animated.timing(
      this.state.animateValue,
      {
        toValue: -0.3,
        duration: 1000,
        delay: 1000
      }
    ).start();
  }

  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        
        <Box
          dimWidth = {0.35}
          dimDepth = {0.35}
          dimHeight = {0.40}
            texture = {asset('env.jpg')}
            style = { {color: 'white',
                        transform: [{translate: [-2,0,0]},
                                    {rotateX: 45},
                                    {rotateY: 45},
                                    {rotateZ: 45}],
                        
            }}
        />

        <Sphere 
          radius = {0.1}
          widthSegments = {100}
          heightSegements = {100}
            texture = {asset('chess-world.jpg')}
            style = { {color: 'white',
                      transform: [{translate: [0,0,2]},
                                  {rotateX: 45},
                                  {rotateY: 45},
                                  {rotateZ: 45}],
          }}
                      
        />

        <Cylinder
          radiusTop = {0.2}
          radiusBottom = {0.2}
          dimHeight = {0.3}
            segments = {100}
            texture = {asset('env.jpg')}
            style = { {color: 'white',
                      transform: [{translate: [2,0,0]},
                                  {rotateX: 45},
                                  {rotateY: 45},
                                  {rotateZ: 45}],
          }}
        />

        <Animated.Text
        style = {{
          backgroundColor: '#00ff00',
          fontsize: 0.8,
          textAlignVertical: 'center',
          layoutOrgin: [0.5,0.5],
          transform:[{translateY: this.state.animateValue},
                      {translateX: 0},
                      {translateZ: -1}]
        }}>
        Timing Animation
        </Animated.Text>

      </View>
    );
  }
};

AppRegistry.registerComponent('WebVR', () => WebVR);

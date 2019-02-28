
import React, { PureComponent } from 'react';
import { Image ,Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window')

const menuIcon = (
  <Image
    source={require('../assets/images/icons/menu.png')}
    style={{ height: 14, width: 18 }}
  />
);

const notificationIcon = (
  <Image
    source={require('../assets/images/icons/notifications.png')}
    style={{ height: 22, width: 21 }}
  />
);

const vehicleIcon = (
  <Image
    source={require('../assets/images/icons/vehicle.png')}
    style={{ height: 50, width: 50 }}
  />
);

const distanceIcon = (
  <Image
    source={require('../assets/images/icon.png')}
    style={{ height: 40, width: 40,    paddingLeft : width * 0.05    }}
  />
);

const optionsIcon = (
  <Image
    source={require('../assets/images/icons/options.png')}
    style={{ height: 16, width: 16 }}
  />
);

export default class Icon extends PureComponent {
  render() {
    const { menu, notification, vehicle, distance, options, children } = this.props;

    if (menu) return menuIcon;
    if (notification) return notificationIcon;
    if (vehicle) return vehicleIcon;
    if (distance) return distanceIcon;
    if (options) return optionsIcon;

    return children || null;
  }
}

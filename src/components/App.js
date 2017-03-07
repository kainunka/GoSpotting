import React, { Component, PropTypes } from 'react';
import {
  View, Text, DrawerLayoutAndroid, Navigator,
  ToolbarAndroid, TouchableOpacity, Image,
  BackAndroid, StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { routes, toolbarActions } from '../data.service';
import DrawerMenu from './DrawerMenu';
import Home from '../views/Home';
import MapView from '../views/MapView';
import FindCards from '../views/FindCards';
import MarKetPlace from '../views/MarKetPlace';
import SeePromotions from '../views/SeePromotions';
import FindActivities from '../views/FindActivities';
import Notifications from '../views/Notifications';
import CreateActivity from '../views/CreateActivity';
import MyCards from '../views/gospotting/MyCards';
import MyItems from '../views/gospotting/MyItems';
import MyInterests from '../views/gospotting/MyInterests';
import MyActivity from '../views/gospotting/MyActivity';
import MyFriends from '../views/gospotting/MyFriends';
import MyAccount from '../views/gospotting/MyAccount';
import Advertise from '../views/gospotting/Advertise';


class App extends Component {

  constructor(props) {
     super(props);
     this.state = {
       routes: [0],
       drawerClosed: true,
     }
     this.toggleDrawer = this.toggleDrawer.bind(this);
    this._onActionSelected = this._onActionSelected.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
    this.handlesBackButton = this.handlesBackButton.bind(this);
  }

  _onActionSelected(position) {
       this.navigateTo(13);
  }

  toggleDrawer() {
    if (this.state.drawerClosed) {
      this.DRAWER.openDrawer();
    } else {
      this.DRAWER.closeDrawer();
    }
  }

  setDrawerState() {
    this.setState({
      drawerClosed: !this.state.drawerClosed
    });
  }

  navigateTo(idx) {
   this.DRAWER.closeDrawer();
   let _routes = this.state.routes.slice();
   let hasRoute = false;
   if (idx === 0) {
     this._navigator.resetTo(routes[0]);
     this.setState({
       routes: [0]
     });
   } else {
     _routes.some((item, index) => {
       if (item === idx) {
         this._navigator.popN(_routes.length -1 - index);
         _routes = this.state.routes.slice(0, index + 1);
         hasRoute = true;
       }
     });
     if (!hasRoute) {
       this._navigator.push(routes[idx]);
     }
     this.setState({
       routes: hasRoute === true ? _routes : [ ...this.state.routes, idx]
     });
   }
 }

 handlesBackButton() {

   if (this._navigator && this._navigator.getCurrentRoutes().length > 1) {
     try {
       this.DRAWER.closeDrawer();
       this._navigator.pop();
       const _routes = this.state.routes.slice();
       _routes.pop();
       this.setState({
         routes: _routes
       });
     } catch(e) {}
     return true;
   }
   return false;
 }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handlesBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handlesBackButton);
  }

  render() {
    return(
      <DrawerLayoutAndroid
        drawerWidth={280}
        ref={(drawerElement) => { this.DRAWER = drawerElement; }}
        drawerPosition={DrawerLayoutAndroid.positions.left}
        onDrawerOpen={this.setDrawerState}
        onDrawerClose={this.setDrawerState}
        renderNavigationView={() => <DrawerMenu navigate={this.navigateTo} />}
      >

      <Icon.ToolbarAndroid
          titleColor='#fff'
          // title='Lighthouses'
            //--> Remove the View child of the Toolbar if you
            // don't need a Icon.
          navIconName='md-menu'
          onIconClicked={this.toggleDrawer}
          actions={toolbarActions}
          onActionSelected={this._onActionSelected}
          style={styles.appBar}
          overflowIconName="md-notifications"

        >
          <View style={styles.appBarLogo}>
            <TouchableOpacity
              onPress={this.navigateTo.bind(this, 0)}
            >

            </TouchableOpacity>

            <Text
              style={styles.appBarTitle}
              numberOfLines={1}
            >
              {routes[this.state.routes[this.state.routes.length - 1]].title}
            </Text>
          </View>
        </Icon.ToolbarAndroid>
        <Navigator
            initialRoute={routes[0]}
            renderScene={(route, navigator) => {
              const idx = route.index - 1;
              switch (route.index) {
                case 0:
                  return <Home navigate={this.navigateTo} />;
                case 1:
                  return <MyCards index={idx} navigate={this.navigateTo} />;
                case 2:
                  return <MyItems index={idx} />;
                case 3:
                  return <MyInterests index={idx} />;
                case 4:
                  return <MyActivity index={idx} navigate={this.navigateTo} />;
                case 5:
                  return <MyFriends index={idx} />;
                case 6:
                  return <MyAccount index={idx} />;
                case 7:
                  return <Advertise index={idx} />;
                case 8:
                  return <MapView index={idx} />;
                case 9:
                  return <FindCards index={idx} navigate={this.navigateTo} />;
                case 10:
                  return <MarKetPlace index={idx} />;
                case 11:
                  return <SeePromotions index={idx} />;
                case 12:
                  return <FindActivities index={idx} navigate={this.navigateTo} />;
                case 13:
                  return <Notifications index={idx} />;
                case 14:
                  return <CreateActivity index={idx} />;
                default:
                  return <Home />;
              }
            }}
            configureScene={(route, routeStack) =>
              Navigator.SceneConfigs.FadeAndroid
            }
            ref={(nav) => { this._navigator = nav; }}
        />
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    height: 53,
    backgroundColor: '#ffba0b',
    elevation: 4,
  },
  appBarLogo: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 100,
    backgroundColor: 'transparent'
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',

    color: '#000',
  },
});

export default App;

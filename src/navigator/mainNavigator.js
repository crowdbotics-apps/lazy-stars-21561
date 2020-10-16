import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial144519Navigator from '../features/Tutorial144519/navigator';
import NotificationList144491Navigator from '../features/NotificationList144491/navigator';
import Settings144490Navigator from '../features/Settings144490/navigator';
import Settings144482Navigator from '../features/Settings144482/navigator';
import UserProfile144480Navigator from '../features/UserProfile144480/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial144519: { screen: Tutorial144519Navigator },
NotificationList144491: { screen: NotificationList144491Navigator },
Settings144490: { screen: Settings144490Navigator },
Settings144482: { screen: Settings144482Navigator },
UserProfile144480: { screen: UserProfile144480Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

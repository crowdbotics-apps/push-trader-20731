import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings112017Navigator from '../features/Settings112017/navigator';
import BlankScreen17112014Navigator from '../features/BlankScreen17112014/navigator';
import Settings111982Navigator from '../features/Settings111982/navigator';
import Settings111965Navigator from '../features/Settings111965/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings112017: { screen: Settings112017Navigator },
BlankScreen17112014: { screen: BlankScreen17112014Navigator },
Settings111982: { screen: Settings111982Navigator },
Settings111965: { screen: Settings111965Navigator },

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

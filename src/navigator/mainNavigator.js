import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings112036Navigator from '../features/Settings112036/navigator';
import BlankScreen19112033Navigator from '../features/BlankScreen19112033/navigator';
import BlankScreen18112032Navigator from '../features/BlankScreen18112032/navigator';
import Settings112017Navigator from '../features/Settings112017/navigator';
import BlankScreen17112014Navigator from '../features/BlankScreen17112014/navigator';
import Settings111982Navigator from '../features/Settings111982/navigator';
import Settings111965Navigator from '../features/Settings111965/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings112036: { screen: Settings112036Navigator },
BlankScreen19112033: { screen: BlankScreen19112033Navigator },
BlankScreen18112032: { screen: BlankScreen18112032Navigator },
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

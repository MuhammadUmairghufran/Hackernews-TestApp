/**
 * AppName: hacknewsApp
 * Purpose: Navigation stack
 * Author: Muhammad Umair
 * @Testassignmen
 * @format
 * @typescript
 */



import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../Screens/HomeScreen/HomeScreen";



const Root = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'steelblue',
            },
            title: 'Hacker News',
            headerTintColor: '#FFF'

        }
    }
}, {
        initialRouteName: 'Home',
    }
 );




export const HackernewsAppnavigations = createAppContainer(Root);











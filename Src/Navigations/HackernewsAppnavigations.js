"use strict";
/**
 * AppName: hacknewsApp
 * Purpose: Navigation stack
 * Author: Muhammad Umair
 * @Testassignmen
 * @format
 * @typescript
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var react_navigation_stack_1 = require("react-navigation-stack");
var HomeScreen_1 = __importDefault(require("../Screens/HomeScreen/HomeScreen"));
var Root = react_navigation_stack_1.createStackNavigator({
    Home: {
        screen: HomeScreen_1.default,
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
});
exports.HackernewsAppnavigations = react_navigation_1.createAppContainer(Root);

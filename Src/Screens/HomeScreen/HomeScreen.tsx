/**
 * AppName: hacknewsApp
 * Screen:  HomeScreen
 * Author: Muhammad Umair
 * @Testassignmen
 * @format
 * @typescript
 */
import React from 'react'
import {View, Text, StatusBar,SafeAreaView} from 'react-native'
import {HomeScreenStyle} from "./HomeScreenStyles";
const axios = require('axios');

import {HN_NEW_STORIES_ENDPOINT,HN_SHOW_STORIES_ENDPOINT} from '../../Services/api'
import HackerNewAPI from '../../Services/HackerNewAPI'
import {array} from "prop-types";
export interface Props {}

interface State {
    stories: Array<string>
}


// declare var results: any;



export default class HomeScreen extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            stories: []
        }


    }





    componentDidMount(): void {



        async function getTopStories() {
            const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
            try {
                const response = await fetch(url);
                if (response.ok === false) {
                    throw new Error("Response Error:" + response.text);
                }
                const json = await response.json();
                const promises = json
                    .slice(0, 10)
                    .map((id: number) =>
                        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
                            response => response.json()
                        )
                    );
                 const result = await Promise.all(promises);



            } catch (err) {
                console.error(err);
            }
        }



    }


    render(){


        return(
            <SafeAreaView>
                <StatusBar  backgroundColor="steelblue" barStyle={"light-content"}/>
                <View style={HomeScreenStyle.wrapContainer}>


                </View>
            </SafeAreaView>
        );
    }



}

import React, { Component } from 'react';
import InfoAgr from '../components/InfoAgr';
import Comment from '../components/Comment';
import MainInfo from '../components/MainInfo';

class Main extends Component {
    render() {
        return (
            <div>
                <MainInfo />
                <Comment />
                <InfoAgr />
            </div>
        );
    }
}

export default Main;
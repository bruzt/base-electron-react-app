import React from 'react';
import { Provider } from 'react-redux';

import '../dependencies/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-blue.min.css';

import store from '../redux/store';

import GlobalStyle from './GlobalStyle';

import Home from '../components/Home';
import Toast from '../components/common/Toast';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>

                <GlobalStyle />
                
                <Toast />

                <Home />

            </Provider>
        );
    }
}
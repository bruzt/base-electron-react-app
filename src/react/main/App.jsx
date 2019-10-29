import React from 'react';
import { Provider } from 'react-redux';

import '../dependencies/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/js/all';

import store from '../redux/store';

import GlobalStyle from './GlobalStyle';

import Routes from './Routes';
import Toast from '../components/common/Toast';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>

                <GlobalStyle />
                
                <Toast />

                <Routes />

            </Provider>
        );
    }
}
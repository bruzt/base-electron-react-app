import React from 'react';

import Routes from '../main/Routes';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import Footer from './footer/Footer';
import SidebarControl from './sidebar/SidebarControl';

export default class Home extends React.Component {

    render() {
        return (
            <div className='hold-transition skin-blue sidebar-mini'>
                <div className="wrapper">

                    <Header />

                    <Sidebar />

                    <Content>
                        <Routes />
                    </Content>

                    <Footer />

                    <SidebarControl />

                </div>
            </div>
        );
    }
}
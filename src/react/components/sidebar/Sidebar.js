import React, { useEffect } from 'react';

import userImg from '../../assets/img/logo-200x100.jpg';

export default function content() {

    return (
        <aside className="main-sidebar">

            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">

                {/* Sidebar user panel (optional) */}
                <div className="user-panel" style={{ height: 50 }}>
                    <div className="pull-left image">
                        <img src={userImg} className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                        <p>Alexander Pierce</p>
                        {/* Status */}
                        <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>

                {/* search form (Optional) */}
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
                {/* /.search form */}

                {/* Sidebar Menu */}
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">HEADER</li>
                    {/* Optionally, you can add icons to the links */}
                    <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Link</span></a></li>
                    <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
                    <li className="treeview">
                        <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="#">Link in level 2</a></li>
                            <li><a href="#">Link in level 2</a></li>
                        </ul>
                    </li>
                </ul>
                {/* /.sidebar-menu */}
            </section>
            {/* /.sidebar */}
        </aside>
    );
}

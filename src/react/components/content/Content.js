import React from 'react';

export default function content(props) {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <h1>
                    Page Header
                    <small>Optional description</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
                    <li className="active">Here</li>
                </ol>
            </section>

            {/* Main content */}
            <section className="content container-fluid">

                {props.children}

            </section>
            {/* /.content */}
        </div>
    );
}
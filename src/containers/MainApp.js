import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/actions';

import LayoutComponent from '../components/LayoutComponent';
@connect(state => ({
    myListData: state.data.myListData,
}))
export default class MainApp extends Component {
    static propTypes = {
        myListData: PropTypes.array,
        dispatch: PropTypes.func.isRequired
    }
    render() {
        const actions = bindActionCreators(action, this.props.dispatch);
        return (
            <div>
                <div className="container-fluid">
                    {this.props.myListData.map((obj, i) => {
                       return (
                                <div className="container border" key={i}>
                                <h1 className="heading"></h1>
                                <h4 className="recomendation">Recommendations List</h4>
                                <LayoutComponent data={obj.recommendations} actions={actions} type={"recommendations"}  butonTitle="Add"/>
                                    <h4 className="recomendation">My List</h4>
                                <LayoutComponent data={obj.mylist} actions={actions} type={"mylist"} butonTitle="Remove"/>

                                </div>
                         );
                    })}
                    <div>
                        {this.props.myListData.map((obj, i) => {
                            return (
                                <div className="container border_bottom" key={i}>
                                    <h4 className="recomendation">My List Titles</h4>
                                <ul className="list-items">
                                {obj.mylist.map((val, j) => {
                                   return(<li key={j}>{val.title}</li>)
                                })}
                                </ul>
                                </div>)
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

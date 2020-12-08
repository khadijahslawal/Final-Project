import React, { Component } from 'react';
import factory from "../../ethereum/factory";
import HomeNav from "../../components/hometopnav";
import MidNav from "../../components/homemidnav";


export class HomeIndex extends Component {
    static async getInitialProps() {
        const properties = await factory.methods.getDeployedProperties().call();
        return { properties };
    }
    render() {
        return (
            <div>
                <HomeNav />
                <MidNav />
                <div>
                    {this.props.properties[0]}
                </div>
            </div>
        )
    }
}

export default HomeIndex

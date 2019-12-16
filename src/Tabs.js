import React, { Component } from 'react'

export class Tabs extends Component {
    render() {
        console.log(this.props.countryData)
        return (
            <div>
                {/* <h1>{this.props.countryData.name}</h1> */}
                {/* <h1>{ this.props.countryData[112].name }</h1> */}
            </div>
        )
    }
}

export default Tabs

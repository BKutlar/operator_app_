import React, { Component } from 'react';



class Api extends Component {
    state = {
        get: {}
    }

    componentDidMount() {
        fetch('https://api.electricitymap.org/v3/zones')
            .then((response) => { 
                return response.json()
            })
            .then((result) => {
                this.setState({get: result})
                
            })
    }

    render() {
        return (
            <div>
                {this.state.get}
            </div>
        );
    }
    
}

export default Api;
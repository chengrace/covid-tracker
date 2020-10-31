import React, { Component } from 'react';
import axios from "axios";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            USState: "NJ",
            currentCases: 0,
            message: ""
        }

        this.getCovidCases = this.getCovidCases.bind(this);
    }
    
    getCovidCases(e) {
        const data = {
            state: this.state.USState
        }
        axios.post("http://localhost:5000/get-current-cases", data).then(res => {
            console.log(res.data)
            this.setState({message: res.data.currentCases});
        })
    }

    render() {
        return (
            <>
                <h1>Title</h1>
                <button onClick={this.getCovidCases}>Get Covid Cases</button>
                <h1>{this.state.message}</h1>
            </>
        )
    }
}

export default Dashboard;
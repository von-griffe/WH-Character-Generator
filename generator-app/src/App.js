import React from 'react';
import Characteristics from './Characteristics.jsx'

import './App.css';



const data = {
    elf: [{
        race: "Elf",
        ws: "20",
        bs: "20",
        s: "10",
        t: "10",
        i: "30",
        agi: "10",
        dex: "20",
        int: "20",
        wp: "20",
        fel: "10",
    }],
    human: [{
        race: "Human",
        ws: "10",
        bs: "10",
        s: "10",
        t: "10",
        i: "10",
        agi: "10",
        dex: "10",
        int: "10",
        wp: "10",
        fel: "10",
    }],

    dwarf: [{
        race: "Dwarf",
        ws: "20",
        bs: "20",
        s: "10",
        t: "10",
        i: "10",
        agi: "10",
        dex: "20",
        int: "20",
        wp: "20",
        fel: "10",
    }],
};


class Race extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            props: props.propsData,
            characteristics: [{
                race: "choose race:",
                ws: "10",
                bs: "10",
                s: "10",
                t: "10",
                i: "10",
                agi: "10",
                dex: "10",
                int: "10",
                wp: "10",
                fel: "10",
            }],
        }
    }


    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({value: event.target.value});
    };

    getBaseNumbers = () => {

        return this.state.characteristics.map((quotes) => {
            console.log(quotes);
            return Object.keys(quotes).map((key, index) => {
                if (index > 0) {
                    return <div key={index}>
                        <p>{key.toUpperCase()}, {parseInt(quotes[key])}</p>
                    </div>;
                }
                if (index === 0) {
                    return <div key={index}>
                        <p>{(quotes[key])}</p>
                    </div>
                }
            })
        })
    };

    handleClick = (event) => {

        if (this.state.value  === "Elf") {
            this.setState(() => ({
                characteristics: [{
                    race: "Elf",
                    ws: parseInt("30") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    bs: parseInt("30") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    s: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    t: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    i: parseInt("40") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    agi: parseInt("30") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    dex: parseInt("30") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    int: parseInt("30") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    wp: parseInt("30") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    fel:parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                }]
            }));
        }
        if (this.state.value === "Dwarf") {
            this.setState(() => ({
                characteristics: [{
                    race: "Dwarf",
                    ws: parseInt("30") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    bs: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    s: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    t: parseInt("30") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    i: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    agi: parseInt("10") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    dex: parseInt("30") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    int: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    wp: parseInt("40") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    fel:parseInt("10") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                }]
            }));
        }
        if (this.state.value === "Human") {
            this.setState(() => ({
                characteristics: [{
                    race: "Human",
                    ws: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    bs: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    s: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    t: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    i: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    agi: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    dex: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    int: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    wp: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                    fel:parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                }]
            }));
        }
    };

    render() {

        return <div>
            <select id={"race"} onChange={this.handleChange}>
                <option value={this.state.props.human[0].race}>{this.state.props.human[0].race}</option>
                <option value={this.state.props.elf[0].race}>{this.state.props.elf[0].race}</option>
                <option value={this.state.props.dwarf[0].race}>{this.state.props.dwarf[0].race}</option>
            </select>
            <button onClick={this.handleClick}> Roll!</button>
            <div>
                <div> {this.getBaseNumbers()} </div>
            </div>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <div className="App">
            <Race propsData={data} />
            <Characteristics />
        </div>
    }
}

export default App;



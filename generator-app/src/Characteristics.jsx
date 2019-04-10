import React from 'react';

import Careers from "./Careers";
import * as data from "./data/careers";

class Characteristics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            elf: "Elf",
            human: "Human",
            dwarf: "Dwarf",
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

    handleClick = () => {
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
            <select multiple={true} id={"race"} onChange={this.handleChange}>
                <option value="" disabled selected>wybierz rasę</option>
                <option value={this.state.human}> {this.state.human} </option>
                <option value={this.state.elf}> {this.state.elf} </option>
                <option value={this.state.dwarf}> {this.state.dwarf} </option>
            </select>

            <div>
                <button onClick={this.handleClick}>Wylosuj cechy</button>
            </div>

            <div>
                <div> {this.getBaseNumbers()} </div>
            </div>
            <div>
                <Careers propsData={data}/>
            </div>

        </div>
    }
}
export default Characteristics


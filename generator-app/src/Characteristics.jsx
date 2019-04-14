import React from 'react';
import Careers from "./Careers";
import Select from "./shared/Select";

// const data = require("./data/careers.json")

class Characteristics extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            human: "Human",
            elf: "Elf",
            dwarf: "Dwarf",
            value: false,
            event: false,
            checkRace:"Wybierz rase",
            characteristics: [{
                race: "choose your race",
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

    getRace = () => {
        return Object.keys(this.state).map((key, index) => {
            if (index < 3) {
                return <option key={index} value={this.state.key}>{this.state[key]}</option>
            } else {
                return null
            }
        })
    };

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
                        <p>{key.toUpperCase()} | {parseInt(quotes[key])} | </p>
                    </div>;
                }
                else if (index === 0) {
                    return <div key={index}>
                        <span> rasa: </span>
                        <p>{(quotes[key])}</p>
                    </div>
                }
            })
        })
    };

    handleClick = () => {
        if (this.state.value === this.state.elf) {
            this.setState(() => ({
                event:true,
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
                    fel: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                }]
            }));
        }
        if (this.state.value === this.state.dwarf) {
            this.setState(() => ({
                event:true,
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
                    fel: parseInt("10") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                }]
            }));
        }
        if (this.state.value === this.state.human) {
            this.setState(() => ({
                event:true,
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
                    fel: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                }]
            }));
        }
    };

    render() {

        console.log(this.state);
        if (this.state.value === false ) {
            return <div>
                <Select
                    onChange={this.handleChange}
                    render={this.getRace()}
                    title={this.state.checkRace}
                />
            </div>
        } else if (this.state.event === false) {
            return <div>
                <Select
                    onChange={this.handleChange}
                    render={this.getRace()}
                    title={this.state.checkRace}
                />

                <div>
                    <button onClick={this.handleClick}>Wylosuj cechy</button>
                </div>

            </div>
        } else {
            return <div>
                <Select
                    onChange={this.handleChange}
                    render={this.getRace()}
                    title={this.state.checkRace}
                />
                <div>
                    <button onClick={this.handleClick}>Wylosuj cechy</button>
                </div>
                <Careers
                    propsData={this.props.propsData}
                />

                <div>
                    <div> {this.getBaseNumbers()} </div>
                </div>
            </div>

        }
    }
}

export default Characteristics


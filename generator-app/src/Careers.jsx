import React from 'react';

class Careers extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            value: [],
            warrior: "Warrior",
            ranger: "Ranger",
            academics: "Academics",
            rouges: "Rouges",
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

    getClass = () => {
        return Object.keys(this.state.props.default).map((quotes, key) => {
            console.log(quotes);
            return <option key={key} value={quotes}>{quotes}</option>
        })
    };

    getCareers = (value) => {
        const career = (this.state.props.default[value])[0];
        console.log(career);

        return Object.keys(career).map((items, key) => {
            return <option key={key} value={items}>{items}</option>
        })
    };

    getCareersPath = (value, value2) => {
        const path = (this.state.props.default[value])[0];
        console.log(path[value2][0]);
        return Object.keys(path[value2][0]).map((quotes, key) => {
            return <option key={key} value={quotes}>{quotes}</option>
        })
    };


    handleChange = (event) => {
       return this.setState({
            value: event.target.value
        });
    };


    render() {
        console.log((this.state.props.default));

        if( this.state.value === "Academics" ||
            this.state.value === "Ranger" ||
            this.state.value === "Rouges" ||
            this.state.value === "Warrior") {
             return <div>
                    <select onChange={this.handleChange}>
                        <option value="" disabled selected>Wybierz klasę</option>
                        {this.getClass()}
                    </select>

                    <select onChange={this.handleChange}>
                        <option value="" disabled selected>Wybierz profesję</option>
                        {this.getCareers(this.state.value)}
                    </select>
                </div>
        } else if( this.state.value === "Apothecar" ||
            this.state.value === "Engineer" ||
            this.state.value === "Wizard" ||
            this.state.value === "Physician"||
            this.state.value === "Bunty Hunter") {
            console.log(this.state.value);

            return <div>
                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz klasę</option>
                    {this.getClass()}
                </select>

                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz profesję</option>
                    {this.getCareers("Academics")}
                </select>

                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz poziom profesji</option>
                    {this.getCareersPath("Academics", this.state.value)}
                </select>
            </div>
        } else if(this.state.value === "Wizard’s Apprentice" ||
            this.state.value === "Wizard’s Apprentice"

        ) {
            console.log(this.state.value);

            return <div>
                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz klasę</option>
                    {this.getClass()}
                </select>

                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz profesję</option>
                    {this.getCareers("Academics")}
                </select>

                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz poziom profesji</option>
                    {this.getCareersPath("Academics", "Wizard")}
                </select>
                <div>{this.state.value}</div>

            </div>
        }
        return <div>
            <select onChange={this.handleChange}>
                <option value="" disabled selected>Wybierz klasę</option>
                {this.getClass()}
            </select>
        </div>
    }
}
export default Careers


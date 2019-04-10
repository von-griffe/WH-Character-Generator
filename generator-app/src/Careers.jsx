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
        return Object.keys(this.state.props.default).map((quotes, index) => {
            return <option value={quotes}>{quotes}</option>
        })
    };

    getCareers = (value) => {
        const career = (this.state.props.default[value])[0];
        return Object.keys(career).map((items, index) => {
            console.log(items);
            return <option value={items}>{items}</option>
        })
    };


    getCareersPath = () => {
        return null
    };


    handleChange = (event) => {
       return this.setState({
            value: event.target.value

        });
    };


    render() {


        if( this.state.value === "academics" ) {
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
        }
        if( this.state.value === "Wizard") {
            return <div>
                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz klasę</option>
                    {this.getClass()}
                </select>

                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz profesję</option>
                    {this.getCareersPath()}

                </select>

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


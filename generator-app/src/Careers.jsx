import React from 'react';

class Careers extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            value: "",
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
        };
    }

    handleChange = (event) => {
        return this.setState({
            value: (event.target.value)
        });
    };

    renderClass = () => {
        return Object.keys(this.state.props.default).map((key,  index) => {
            return <option key={index} value={key}>{key}</option>
        })
    };

    renderCareers = (value) => {

        if (value === undefined) {

            if ((this.getKeyCareer()[0]).hasOwnProperty(this.state.value)){

                return Object.keys(this.state.props.default["Academics"][0]).map((key, i) => {
                    return <option key={i} value={key}>{key}</option>
                });
            } else if ((this.getKeyCareer()[1]).hasOwnProperty(this.state.value)){

                return Object.keys(this.state.props.default["Ranger"][0]).map((key, i) => {
                    return <option key={i} value={key}>{key}</option>
                });
            } else if ((this.getKeyCareer()[2]).hasOwnProperty(this.state.value)){

                return Object.keys(this.state.props.default["Rouges"][0]).map((key, i) => {
                    return <option key={i} value={key}>{key}</option>
                });
            } else if ((this.getKeyCareer()[3]).hasOwnProperty(this.state.value)) {

                return Object.keys(this.state.props.default["Warrior"][0]).map((key, i) => {
                    return <option key={i} value={key}>{key}</option>
                });
            }

        } else {
            return Object.keys(this.state.props.default[value][0]).map((key, i) => {
                return <option key={i} value={key}>{key}</option>
            });
        }
    };

    getKeyCareer = () => {
        return Object.keys(this.state.props.default).map((key, index) => {
            let objCareers = this.state.props.default[key][0];
            return objCareers;
        });
    };

    getCareerLevel = () => {

        if ((this.getKeyCareer()[0]).hasOwnProperty(this.state.value)){

            return Object.keys((this.state.props.default["Academics"][0])[this.state.value][0]).map((key, index) => {
                return <div key={index} value={key} > <span>{index + 1}</span> {key }</div>
            });

        } else if ((this.getKeyCareer()[1]).hasOwnProperty(this.state.value)){

            return Object.keys((this.state.props.default["Ranger"][0])[this.state.value][0]).map((key, index) => {
                return <div key={index} value={key} > <span>{index + 1}</span> {key}</div>
            });

        } else if ((this.getKeyCareer()[2]).hasOwnProperty(this.state.value)){

            return Object.keys((this.state.props.default["Rouges"][0])[this.state.value][0]).map((key, index) => {
                return <div key={index} value={key} > <span>{index + 1}</span> {key }</div>
            });

        } else if ((this.getKeyCareer()[3]).hasOwnProperty(this.state.value)) {

            return Object.keys((this.state.props.default["Warrior"][0])[this.state.value][0]).map((key, index) => {
                return <div key={index} value={key} > <span>{index + 1}</span> {key }</div>
            });
        }
    };


    renderAllCareers = () => {

        return Object.keys(this.state.props.default).map((key, i) => {
            return Object.keys(this.state.props.default[key][0]).map((key, i) => {
                return <option key={i} value={key}>{key}</option>
            });
        });
    };

    render() {

        console.log(this.getKeyCareer());

        if (this.state.props.default.hasOwnProperty(this.state.value)) {
            return <div>
                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz klasę</option>
                    {this.renderClass()}
                </select>
                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz profesję</option>
                    {this.renderCareers(this.state.value)}
                </select>

            </div>

        } else if ((this.getKeyCareer()[0]).hasOwnProperty(this.state.value) ||
            (this.getKeyCareer()[1]).hasOwnProperty(this.state.value) ||
            (this.getKeyCareer()[2]).hasOwnProperty(this.state.value) ||
            (this.getKeyCareer()[3]).hasOwnProperty(this.state.value)
        ) {

            return <div>
                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz klasę</option>
                    {this.renderClass()}
                </select>

                <select onChange={this.handleChange}>
                    <option value="" disabled selected>Wybierz profesję</option>
                    {this.renderCareers()}
                </select>

                <div>{"wybrana profesja: "} {this.state.value}</div>
                <div>{"poziom postaci: "}  {this.getCareerLevel()}</div>

            </div>
        }

        return <div>
            <select onChange={this.handleChange}>
                <option value="" disabled selected>Wybierz klase</option>
                {this.renderClass()}
            </select>
        </div>
    }
}
export default Careers
import React from 'react';
import Careers from "./Careers";
import {withStyles} from "@material-ui/core";
import NativeSelect from "./shared/MultiSelect.jsx";
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import TextFields from "./shared/Inputs";
import Radio from "@material-ui/core/Radio";



const races = ["choose your race","Human", "Elf", "Dwarf"];

const styles = theme => ({
    root: {
        width: '50%',
        margin: "auto",
        borderRadius: "5px",
        boxShadow: "0 2px 2px 1px rgba(0, 0, 0, 0.15)"
    },

    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
});


class Characteristics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            value: false,
            event: false,
            checked: false,
            checkRace: "Wybierz rase",
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

    handleClick = () => {
        if (this.state.value === "Elf") {
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
                    fel: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                }]
            }));
        } else if (this.state.value === "Dwarf") {
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
                    fel: parseInt("10") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                }]
            }));
        } else if (this.state.value === "Human") {
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
                    fel: parseInt("20") + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
                }]
            }));
        }
    };


    handleChange = name => (event) => {
        this.setState({[name]: event.target.value});
    };

    handleInputChange = (event) => {
        return null
        // this.setState({checked: event.target.checked});
    };

    getBaseNumbers = () => {
        return this.state.characteristics.map((quotes) => {
            return Object.keys(quotes).map((key, index) => {
                return (index > 0) ?
                    <div key={index}>
                        <div>{key.toUpperCase()} | {parseInt(quotes[key])} |</div>
                    </div>
                    :
                    <div key={index}>
                        <span> rasa: </span>
                        <p>{(quotes[key])}</p>
                    </div>
            })
        })
    };

    rollPlayerStats = () => {
        const selectRaceDisabledButton = <div>
            <NativeSelect
                placeholder={"choose your race"}
                onChange={this.handleChange('value')}
                data = {races}

            />
            <Button
                onClick={this.handleClick}
                variant={"contained"}
                disabled
                color={"secondary"}>
                Roll stats
            </Button>
        </div>;

        const selectRace = <div>
            <NativeSelect
                placeholder={"choose your race"}
                onChange={this.handleChange('value')}
                data = {races}
            />
            <Button
                onClick={this.handleClick}
                variant={"contained"}
                color={"secondary"}>

                Roll stats
            </Button>
        </div>;

        return this.state.value ==="choose your race" ||
        this.state.value === false? selectRaceDisabledButton : selectRace
    };

    render() {
        const {classes} = this.props;

        return <div className={classes.root}>
            <div className={classes.resetContainer}>
                {this.rollPlayerStats()}
                <Careers
                    // onChange={this.handleInputChange('checked')}
                    propsData={this.props.propsData}
                />
                <div> {this.getBaseNumbers()} </div>
            </div>
        </div>
    }
}


Characteristics.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Characteristics)


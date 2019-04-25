import React from 'react';
import Careers from './Careers';
import {withStyles} from '@material-ui/core';
import NativeSelect from './shared/MultiSelect.jsx';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


const races = ['choose your race', 'Human', 'Elf', 'Dwarf', 'Halfling'];

const styles = theme => ({
    root: {
        width: '50%',
        margin: 'auto',
        borderRadius: '5px',
        boxShadow: '0 2px 2px 1px rgba(0, 0, 0, 0.15)'
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
            checked: false,
            checkRace: 'Wybierz rase',
            characteristics: [{
                race: 'choose your race',
                ws: '10',
                bs: '10',
                s: '10',
                t: '10',
                i: '10',
                agi: '10',
                dex: '10',
                int: '10',
                wp: '10',
                fel: '10',
            }],
            counter: 0

        }
    }

    handleClick = () => {


        const characterElfProps = {
            race: 'Elf',
            ws: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            bs: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            s: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            t: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            i: parseInt('40') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            agi: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            dex: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            int: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            wp: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            fel: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
        };
        const characterDwarfProps = {
            race: 'Dwarf',
            ws: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            bs: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            s: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            t: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            i: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            agi: parseInt('10') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            dex: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            int: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            wp: parseInt('40') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            fel: parseInt('10') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
        };
        const characterHumanfProps = {
            race: 'Human',
            ws: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            bs: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            s: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            t: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            i: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            agi: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            dex: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            int: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            wp: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            fel: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
        };
        const characterHalflingProps = {
            race: 'Halfling',
            ws: parseInt('10') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            bs: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            s: parseInt('10') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            t: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            i: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            agi: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            dex: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            int: parseInt('20') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            wp: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
            fel: parseInt('30') + Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1),
        };


        switch (this.state.value) {
            case  'Elf':
                return this.setState(() => ({
                    characteristics: [{...characterElfProps}]
                }));
            case 'Dwarf':
                return this.setState(() => ({
                    characteristics: [{...characterDwarfProps}]
                }));
            case 'Human':
                return this.setState(() => ({
                    characteristics: [{...characterHumanfProps}]
                }));
            case 'Halfling':
                return this.setState(() => ({
                    characteristics: [{...characterHalflingProps}]
                }));
            default:
                return 'UFO';
        }
    };

    handleChange = name => (event) => {
        this.setState({[name]: event.target.value});
    };

    getBaseNumbers = () => {
        const button = <button
        >+1</button>;

        return this.state.characteristics.map((item) => {
            return Object.keys(item).map((key, index) => {
               return index > 0 ?
                    <div key={index + key}>
                        <div>{key.toUpperCase()} | {parseInt(item[key])} | {button} </div>
                    </div>
                    :
                    <div key={index}>
                        <div> rasa: {(item[key])}</div>
                    </div>
            })
        })
    };

    render() {
        const {classes} = this.props;

        const btnRollProps = {
            onClick: this.handleClick,
            variant: 'contained',
            color: 'secondary',
        };

        return <div className={classes.root}>
            <div className={classes.resetContainer}>
                {this.state.value === 'choose your race' ||
                this.state.value === false ?
                    <div>
                        <NativeSelect
                            onChange={this.handleChange('value')}
                            data={races}
                        />
                        <Button
                            {...btnRollProps}
                            disabled>
                            {'Roll stat'}
                        </Button>
                    </div>

                    :

                    <div>
                        <NativeSelect
                            onChange={this.handleChange('value')}
                            data={races}
                        />
                        <Button
                            {...btnRollProps}
                        >
                            {'Roll stat'}
                        </Button>
                    </div>
                }
                <Careers
                    careerPath={this.props.careerPath}
                    data={races}
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


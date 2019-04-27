import React from 'react';
import Careers from './Careers';
import {withStyles} from '@material-ui/core';
import NativeSelect from './shared/MultiSelect.jsx';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AdvanceStats from './AdvanceStats.jsx';
import StatsTable from './shared/StatsTable.jsx';
import TableCell from '@material-ui/core/TableCell';


const races = ['choose your race', 'Human', 'Elf', 'Dwarf', 'Halfling'];
const reset = {
    race: 'if you choose your race button "Roll stats"',
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
};

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        padding: '4px 4px 4px 4px',
    },
    body: {
        fontSize: 14,
        padding: '4px 4px 4px 4px',

    },}))(TableCell);

const styles = theme => ({
    root: {
        width: '80%',
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
            name: '',
            value: false,
            checked: false,
            checkRace: 'Wybierz rase',
            experience: 0,
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
                    characteristics: [{...characterElfProps}],
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

        this.state.characteristics = [{...reset}];
        this.setState({[name]: event.target.value});
    };

    getBaseNumbersKey = () => {

        return this.state.characteristics.map((item) => {
            return Object.keys(item).map((key, index) => {
                return key.toUpperCase()
            })
        })
    };

    getBaseNumbersValue = () => {

        return this.state.characteristics.map((item) => {
            return Object.keys(item).map((key, index) => {
                return index === 0? item[key] :  parseInt(item[key])
            })
        })
    };

    getBaseNumbersAdvance = () => {

        return this.state.characteristics.map((item) => {
            return Object.keys(item).map((key, index) => {

                return index === 0? <CustomTableCell> {'skill improvement'} </CustomTableCell>
                    :
                    <CustomTableCell>
                        <AdvanceStats
                        data={parseInt(item[key])}
                        experience={this.state.experience}
                        />
                    </CustomTableCell>
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
                            onChange={this.handleChange('characteristics')}
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
                <div>
                    <span>{'Experience = ' + this.state.experience}</span>

                    <StatsTable
                        keys={this.getBaseNumbersKey}
                        values = {this.getBaseNumbersValue}
                        advance = {this.getBaseNumbersAdvance}
                        experience={this.state.experience}
                    />

                </div>
                <Careers
                    careerPath={this.props.careerPath}
                    data={races}
                />
            </div>
        </div>
    }
}

Characteristics.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Characteristics)


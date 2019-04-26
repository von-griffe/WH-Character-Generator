import React from 'react';
import NativeSelect from './shared/MultiSelect';
import Checkbox from './shared/Checkbox';
import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
    list: {
        listStyle: 'none',

    },
    professions:{
        marginTop: '20px'
    },
    result: {
        color: '#3f51b5',
        fontWeight:'600'
    }
});

class Careers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            checked: false,
            level: [],
            professions:"",
            characteristics: [{
                race: 'choose race:',
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
        }
    }

    handleCheckbox = name => event => {

        let resultLevels = this.state.level;
        let targetValue = event.target.value;

        if(event.target.checked === true) {
            resultLevels.push(targetValue);

            this.setState({
                resultLevels: this.state.level
            });

        } else {
            let indexValue = resultLevels.indexOf(event.target.value);

            resultLevels.splice(indexValue,1);

                this.setState({
                resultLevels: this.state.level
            });
        }
        this.getBoolean()
    };

    getBoolean = () => {
        console.log('index of array', this.getLevelsBoolean());
       return this.getLevelsBoolean()

    };

     //function return index of JSON value === true
    getLevelsBoolean = () => {
        const result = [];
        (this.getClassProfessionsObj()).forEach((el, index) => {
            if (this.getClassProfessionsVal().indexOf(el.name) > -1) {
                (el.careers).forEach((item, index) => {
                    if (item.name === this.state.professions) {
                        item.levels.forEach((item, index) => {
                            result.push((Object.values(item)).indexOf('true'));
                        })
                    }
                });
            }
        });
        return result
    };


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
            level: []
            })
    };

    getClassProfessionsObj = () => {
        return this.props.careerPath.map((itemClass, index) => {
                return itemClass;
            }
        )
    };

    getClassProfessionsVal = () => {
        return this.props.careerPath.map((itemClass, index) => {
                return itemClass.name;
            }
        )
    };

    getProfessionsName = () => {
        const result = [];

        (this.getClassProfessionsObj()).forEach((el, index) => {
            if (el.name === this.state.value) {
                (el.careers).forEach((item, index) => {
                    result.push(item.name);
                });
            }
        });
        return result
    };


    // ### Add all professions to array (do usunięcia ? )
    // getAllProfessions = () => {
    //     const result = [];
    //     (this.getClassProfessionsObj()).forEach((el, index) => {
    //         el.careers.forEach((el, index) => {
    //             result.push(el.name)
    //         })
    //     });
    //     return result
    // };


    getProfessionsLevels = () => {
        const result = [];
        (this.getClassProfessionsObj()).forEach((el, index) => {
            if (this.getClassProfessionsVal().indexOf(el.name) > -1) {
                (el.careers).forEach((item, index) => {
                    if (item.name === this.state.professions) {
                        item.levels.forEach((item, index) => {
                            result.push(item.name)
                        })
                    }
                });
            }
        });
        return result
    };


    propsDataToArray = () => {
        const result = [];
        this.props.careerPath.forEach((el) => {
            result.push(el.name)
        });
        return result
    };


    render() {

        const {classes} = this.props;

        const selectPlayerClass = (
            <div>
                <NativeSelect
                    onChange={this.handleChange('value')}
                    data={this.propsDataToArray()}
                    value={this.state.value}
                    disabled={false}
                />
            </div>
        );

        const selectPlayerProfession = (
            <div>
                <NativeSelect
                    onChange={this.handleChange('professions')}
                    data={this.getProfessionsName()}
                    value={this.state.professions}
                    disabled={false}
                />
            </div>
        );


        const selectProfessionLevel = (
            <div>
                <ul className={classes.list}>

                    {this.getProfessionsLevels().map((item, index) => {
                    return (
                        <li key={item + index}>

                            <Checkbox
                                name={item}
                                type={'checkbox'}
                                onChange={this.handleCheckbox('checked')}
                                value={item}
                                key={item + index}
                            />
                        </li>
                    );
                })}
                </ul>
            </div>
        );


        return this.state.value === false ? selectPlayerClass
            :
            this.getClassProfessionsVal().indexOf(this.state.value) > -1?
                <div className={classes.professions}>

                    <div>  {'Class :'} <span className={classes.result}> {this.state.value}</span> </div>
                    <div> {'Profession :'} <span className={classes.result}> {this.state.professions} </span> </div>
                    <div> {'Level :'} <span className={classes.result}> {this.state.level.toString()} </span> </div>

                    {selectPlayerClass}
                    {selectPlayerProfession}
                    {selectProfessionLevel}

                </div>
                : null
    }

}

Careers.propTypes = {
    classes: PropTypes.object,
};
export default withStyles(styles)(Careers)
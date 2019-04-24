import React from 'react';
import careerData from '../data/careers';
import PropTypes from 'prop-types';
import StepLabel from '@material-ui/core/StepLabel';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Characteristics from '../Characteristics';
import {getStepContent} from '../apiUtilities/helpers.jsx';
import TextFields from '../shared/Inputs.jsx';
import RadioButtons from './RadioButtons.jsx';

const careerPath = careerData;

const styles = theme => ({
    root: {
        width: '50%',
        margin: 'auto',
        marginTop: '20px',
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
    h1: {
        padding: theme.spacing.unit * 3,
        fontWeight:'600',
        color: 'lightGray'
    },
    info: {
        color: '#3f51b5',
        fontWeight:'400',
        fontSize: '15px'
    },
});

const getSteps = () => {
    return ['Select Gender:', 'Choose name: ', 'Age: ', 'Choose type of Character: '];
};


class VerticalLinearStepper extends React.Component {

    state = {
        activeStep: 0,
        label: 'Choose hero name',
        labelAge: 'Past age',
        holderName: 'Name of Hero',
        holderAge: 'Age of Hero',
        value: false,
        name: '',
        age: '',
        gender: ['Male', 'Female'],
        race: '',
        player: ['Player', 'NPC'],
        playerResult: false,
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };


    //#### add event for enter key
    // onKeyPress = (e) => {
    //     if(e.key === 13){
    //         console.log('something');
    //     }
    // };


    handleNext = () => {
            this.setState(state => ({
                activeStep: state.activeStep + 1,
                value: this.state.value,
            }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {

        this.setState({
            activeStep: 0,
            name: "",
            value: false,
            race: "",
            age: "",
            playerResult: ""
        });
    };

    render() {
        const radioBtnGender = <div>
            <RadioButtons
                onChange={this.handleChange('value')}
                data={this.state.gender}
                value={this.state.value}
            />
        </div>;

        const radioBtnPlayer = <div>
            <RadioButtons
                onChange={this.handleChange('playerResult')}
                data={this.state.player}
                value={this.state.playerResult}
            />
        </div>;

        const inputName = <div>
            <TextFields
                type='text'
                onChange={this.handleChange('name')}
                value={this.state.name}
                label={this.state.label}
                placeholder={this.state.holderName}
            />
        </div>;

        const inputAge = <div>

            <TextFields
                type='number'
                onChange={this.handleChange('age')}
                value={this.state.age}
                label={this.state.labelAge}
                placeholder={this.state.holderAge}

            />
        </div>;

        const {classes} = this.props;

        const steps = getSteps();
        const {activeStep} = this.state;
        const stepperElements = (
            <div className={classes.root}>
                <div className={classes.h1}> {'Character Generator Warhammer: 4th Edition'} </div>

                <Stepper activeStep={activeStep} orientation='vertical'>
                    {steps.map((label, index) => (

                        <Step key={label}>
                            <StepLabel>{label} {
                                index === 0 ? this.state.value :
                                    index === 1 ? this.state.name :
                                        index === 2 ? this.state.age :
                                            index === 3 ? this.state.playerResult : null
                            }
                            </StepLabel>

                            <StepContent>
                                <div> {getStepContent(index, radioBtnGender, inputName, inputAge, radioBtnPlayer)}</div>

                                <div className={classes.actionsContainer}>
                                    <div>

                                        <Button
                                            disabled={activeStep === 0 }
                                            onClick={this.handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            disabled={ activeStep === 0  && this.state.value === false ||
                                            activeStep === 1 && this.state.name === "" ||
                                            activeStep === 3 && this.state.playerResult === false
                                            }

                                            variant='contained'
                                            color='primary'
                                            onClick={this.handleNext}
                                            className={classes.button}
                                            // onKeyPress={this.onKeyPress}

                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <div>
                            <p className={classes.info}>First steps completed, prepare to roll your stats</p>
                        </div>

                        <Button
                            disabled={activeStep === 0}
                            onClick={this.handleBack}
                            className={classes.button}
                        >
                            Back
                        </Button>

                        <Button onClick={this.handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </Paper>

                )}
            </div>);


        return (
            this.state.activeStep === steps.length ? <div> {stepperElements}
                <Characteristics careerPath={careerPath}/>
            </div> : stepperElements
        );
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};
export default withStyles(styles)(VerticalLinearStepper);

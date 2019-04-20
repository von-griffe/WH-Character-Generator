import React from "react";
import careerData from "../data/careers";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Characteristics from "../Characteristics";
import { getStepContent } from "../apiUtilities/helpers.jsx";
import TextFields from "../shared/Inputs.jsx";
import RadioButtons from "./RadioButtons.jsx";


const careerPath = careerData;

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

const getSteps = () => {
    return ["Select Gender:", "Choose name: ", "Age: ", "Choose type of Character: "];
};



class VerticalLinearStepper extends React.Component {

    state = {
        activeStep: 0,
        label: "Choose hero name",
        labelAge: "Past age",
        femaleLabel: "Female",
        maleLabel: "Male",
        holderName: "Name of Hero",
        holderAge: "Age of Hero",
        value: true,
        number: "number",
        text: "text",
        name:"",
        genderResult:"",
        gender: ["Male", "Female"],
        age: "",
        race: "",
        player: ["Player", "NPC"],
        playerResult:true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

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
            value: "",
            race:"",
            age:"",
            genderResult:"",
            playerResult:""
        });
    };

    render() {
        const gender = <div>
            <RadioButtons
                onChange={this.handleChange('value')}
                data = {this.state.gender}
                value={this.state.value}
            />
        </div>;

        const playerCharacter = <div>
            <RadioButtons
                onChange={this.handleChange('playerResult')}
                data = {this.state.player}
                value={this.state.playerResult}
            />
        </div>;

        const inputName = <div>
            <TextFields
                onChange={this.handleChange('name')}
                value={this.state.name}
                label = {this.state.label}
                placeholder={this.state.holderName}
                type={this.state.text}
            />
        </div>;

        const inputAge = <div>

            <TextFields
                onChange={this.handleChange('age')}
                value={this.state.age}
                label = {this.state.labelAge}
                placeholder={this.state.holderAge}
                type={this.state.number}

            />
        </div>;

        const {classes} = this.props;

        const steps = getSteps();
        const {activeStep} = this.state;
        const stepperElements = <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label} >
                        <StepLabel>{label} {
                            index===0? this.state.value:
                                index === 1? this.state.name:
                                    index===2? this.state.age:
                                        index===3? this.state.playerResult:null
                        }
                        </StepLabel>
                        <StepContent>
                            <div> {getStepContent(index, gender, inputName, inputAge, playerCharacter )}</div>

                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
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
                    <Typography>First steps completed, prepare to roll your stats</Typography>
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
        </div>;

        return (
            this.state.activeStep === steps.length ? <div> {stepperElements}
            <Characteristics careerPath={careerPath} />
        </div> : stepperElements
        );
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};
export default withStyles(styles)(VerticalLinearStepper);

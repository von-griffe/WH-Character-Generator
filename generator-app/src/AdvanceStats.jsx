import React from 'react';
import ImprovementButtons from'./shared/ImprovmentButtons.jsx'
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    subText: {
        fontSize: '10px',
        color: 'LightGray',
        padding : '5px 0 5px 0'
    }
});


class AdvanceStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            expPoint: props.experience,
            expPointSum: 0
        }
    }

    increment = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1
            }
        });
    };

    decrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1
            }
        });
    };

    experiences = () => {
        this.setState(prevState => {

            return {
                expPoint:  prevState.value >= 0 && prevState.value <= 5? (prevState.value * 25)
                    : prevState.value > 5 && prevState.value <= 10? (prevState.value * 30)
                        :  prevState.value > 10 && prevState.value <= 15? (prevState.value * 40)
                            : prevState.value > 15 && prevState.value <= 20? (prevState.value * 50)
                                : prevState.value > 20 && prevState.value <= 25? (prevState.value * 70)
                                    : prevState.value > 25 && prevState.value <= 30?  (prevState.value * 90)
                                        : prevState.value > 30 && prevState.value <= 35? (prevState.value * 120)
                                            : null

            }
        });
    };

    experiencesSum = () => {
        this.setState(prevState => {

            return {
                expPointSum:  prevState.expPoint + this.state.expPoint
            }
        });
    };


    render() {

        const {classes} = this.props;

        return (
            <div    >
                <ImprovementButtons
                    data = {this.props.data}
                    onIncrement={this.increment}
                    onDecrement={this.decrement}
                    onExperience={this.experiences}
                    onExperiencesSum={this.experiencesSum}
                />
                <div className={classes.subText} >
                    {' Advances:' + this.state.value}
                </div>
                <div className={classes.subText} >
                    {' Cost : ' +  this.state.expPoint}
                </div>
            </div>


        )
    }
}


AdvanceStats.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvanceStats)




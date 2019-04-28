import React from 'react';
import ImprovementButtons from './shared/ImprovmentButtons.jsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  subText: {
    fontSize: '10px',
    color: 'LightGray',
    padding: '5px 0 5px 0',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

class AdvanceStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      expPoint: 0,
      experience: 0,
      expTab: [],
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  experiences = (value) => {
    this.setState((prevState) => {
      return {
        expPoint:
          prevState.value >= 0 && prevState.value <= 5
            ? prevState.value * 25
            : prevState.value > 5 && prevState.value <= 10
            ? prevState.value * 30
            : prevState.value > 10 && prevState.value <= 15
            ? prevState.value * 40
            : prevState.value > 15 && prevState.value <= 20
            ? prevState.value * 50
            : prevState.value > 20 && prevState.value <= 25
            ? prevState.value * 70
            : prevState.value > 25 && prevState.value <= 30
            ? prevState.value * 90
            : prevState.value > 30 && prevState.value <= 35
            ? prevState.value * 120
            : null,
      };
    });

    this.props.onExperience();
    this.props.onGlobalExperience(value);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ImprovementButtons
          data={this.props.data}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onExperiences={this.experiences}
          stateValue={this.state.expPoint}
        />
        <div className={classes.subText}>{' Advances:' + this.state.value}</div>
        <div className={classes.subText}>
          {' Cost : ' + this.state.expPoint}
        </div>
      </div>
    );
  }
}

AdvanceStats.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvanceStats);

import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} onSubmit={this.onSubmit}>
          <TextField
            id="standard-with-placeholder"
            type={this.props.type}
            onChange={this.props.onChange}
            value={this.props.value}
            label={this.props.label}
            placeholder={this.props.placeholder}
            className={classes.textField}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}
TextFields.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);

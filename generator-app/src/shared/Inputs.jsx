import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
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
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        const {classes} = this.props;

        return (
            <div>
                <form className={classes.container} noValidate autoComplete='off'>

                    <TextField
                        id='standard-with-placeholder'
                        label={this.props.label}
                        placeholder={this.props.placeholder}
                        className={classes.textField}
                        onChange={this.props.onChange}
                        value={this.props.value}
                        margin='normal'
                        type={this.props.type}
                    />

                </form>
            </div>
        );
    }
}
TextFields.propTypes = {
    classes: PropTypes.object,
};
export default withStyles(styles)(TextFields);
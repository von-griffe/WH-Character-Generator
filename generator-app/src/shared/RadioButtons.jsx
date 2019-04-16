import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit} px 0`,
    },
});


class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            gender:""
        }
    }

    // handleChange= (event) => {
    //     setValue(event.target.value);
    // };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={this.props.value}
                        onChange={this.props.onChange}
                    >
                        <FormControlLabel
                            value="Female"
                            control={<Radio/>}
                            label={"Female"}
                        />
                        <FormControlLabel
                            value="Male"
                            control={<Radio/>}
                            label={"Male"}

                        />
                        {/*<FormControlLabel value="male" control={<Radio />} label="Male" />*/}
                        {/*<FormControlLabel value="other" control={<Radio />} label="Other" />*/}

                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}
export default withStyles(styles)(RadioButtons);
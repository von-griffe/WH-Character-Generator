import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const races = ["choose your race","Human", "Elf", "Dwarf"];


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class NativeSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            name:"",
            mode: undefined
        }
    }

    componentWillMount() {
        let mode;
            mode = this.props.data;
        this.setState({ mode });
    }





    render() {
        console.log(this.state.mode);

        return (
            <div>
                <FormControl>
                    <InputLabel htmlFor="age-native-required">
                    </InputLabel>
                    <Select
                        native
                        onChange={this.props.onChange}
                        inputProps={{
                            id: 'age-native-required',
                        }}
                    >
                        {races.map((label, index) => {
                            return<option key={index} value={label}>{label}</option>
                            })
                        }
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

NativeSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelect);
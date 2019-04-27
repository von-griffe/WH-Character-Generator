import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
            data: [],
            pathCareers: []
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data,
            pathCareers: this.props.pathCareers
        })
    }

    render() {

        return (
            this.props.data ?
                <div>
                    <FormControl>
                        <InputLabel htmlFor='age-native-required'>
                        </InputLabel>
                        <Select
                            native
                            data={this.props.data}
                            onChange={this.props.onChange}
                            value={this.props.value}
                        >

                            {this.props.data.map((label, index) => {
                                return <option
                                    key={index}
                                    value={label}
                                    onChange={this.props.onChange}
                                >
                                    {label}
                                </option>
                            })
                            }
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>
                : null

        );
    }
}

NativeSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelect);
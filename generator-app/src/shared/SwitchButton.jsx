import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

function SwitchesGroup() {
    const [state, setState] = React.useState({
        player: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Choose character player</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={state.player} onChange={handleChange('jason')} value="jason" />}
                    label="Jason Killian"
                />

            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
        </FormControl>
    );
}

export default SwitchesGroup;
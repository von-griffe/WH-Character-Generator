import React from 'react';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        name="level"
                        type="checkbox"
                        checked={this.props.checked}
                        onChange={this.props.onChange} />
                    {this.props.value}
                </label>
            </div>
        )
    }
}
export default Checkbox

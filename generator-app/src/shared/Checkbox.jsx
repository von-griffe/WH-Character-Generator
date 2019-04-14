import React from 'react';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            check: false
        }

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    render() {

        return (
            <div>
                <label>
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.check}
                        onChange={this.handleInputChange} />
                    />
                </label>
            </div>
        )
    }
}
export default Checkbox

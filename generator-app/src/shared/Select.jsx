import React from 'react';

class Select extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <select onChange={this.props.onChange}>
                    <option value="" disabled selected>{this.props.title}</option>
                    {this.props.render}
                </select>
            </div>
        )
    }
}
export default Select

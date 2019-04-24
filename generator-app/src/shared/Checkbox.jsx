import React from 'react';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        name={this.props.name}
                        type= {this.props.type}
                        onChange={this.props.onChange}
                        value={this.props.value}
                        key={this.props.key}
                    />

                    {this.props.value}
                </label>
            </div>
        )
    }
}
export default Checkbox

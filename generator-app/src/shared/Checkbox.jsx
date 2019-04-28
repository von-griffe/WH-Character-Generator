import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    return (
      <div>
        <label>
          <input
            type={this.props.type}
            onChange={this.props.onChange}
            name={this.props.name}
            value={this.props.value}
            key={this.props.key}
          />
          {this.props.value}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};
export default Checkbox;

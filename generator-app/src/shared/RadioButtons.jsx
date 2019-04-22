import React from 'react';
import Radio from '@material-ui/core/Radio';

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const propsLabel = this.props.data;

        return<div>
            { propsLabel.map((item, index)=> {
                    return <div  key={item + index + item } >
                        <Radio
                            color='default'
                            onChange={this.props.onChange}
                            label = {item}
                            value={item}
                            key={index + item}
                            checked = {this.props.value === item}
                        />
                        <span key={item + index }>{item}</span>
                    </div>
                })}
            </div>
    }
}
export default (RadioButtons);

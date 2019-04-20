import React from 'react';
import Radio from '@material-ui/core/Radio';

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            name:"",
            checked:"",
            onChange:""
        }
    }



    render() {

        const propsLabel = this.props.label;

        return<div>
            { propsLabel.map((item, index)=> {
                    return <div  key={item + index + item } >
                        <Radio
                            color="default"
                            checked={this.state.value === this.props.value}
                            onChange={this.props.onChange}
                            value={item}
                            key={index + item}
                        />
                        <span key={item + index }>{item}</span>
                    </div>
                })}
            </div>
    }
}
export default (RadioButtons);

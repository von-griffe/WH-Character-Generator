import React from 'react';
import Radio from '@material-ui/core/Radio';

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            name:"",
            checked:""
        }
    }



    render() {

        const propsLabel = this.props.label;

        return<div>
            { propsLabel.map((item, index)=> {
                    return <div>
                        <Radio
                            color="default"
                            checked={this.state.value === this.props.value}
                            onChange={this.props.onChange}
                            value={item}
                            key={index}
                        />
                        <span key={index+item} >{item}</span>
                    </div>
                })}
            </div>
    }
}
export default (RadioButtons);

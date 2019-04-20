import React from 'react';
import NativeSelect from "./shared/MultiSelect";
import Checkbox from "./shared/Checkbox";


class Careers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
            checked: false,
            propsArray: [],
            characteristics: [{
                race: "choose race:",
                ws: "10",
                bs: "10",
                s: "10",
                t: "10",
                i: "10",
                agi: "10",
                dex: "10",
                int: "10",
                wp: "10",
                fel: "10",
            }],
            titleType: "Wybierz typ postaci",
            titleProfession: "Wybierz profesje",
        }
    }

    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    getClassProfessionsObj = () => {
        return this.props.careerPath.map((itemClass,index)=> {
                return itemClass;
            }
        )};
    getClassProfessionsVal = () => {
        return this.props.careerPath.map((itemClass,index)=> {
                return itemClass.name;
            }
        )};

    getProfessionsName = () => {
        const result = [];

        (this.getClassProfessionsObj()).forEach( (el, index) => {
            if(el.name === this.state.value) {
                (el.careers).forEach( (item,  index) => {
                    result.push(item.name);
                });
            }
        });
        return result
    };

    getProfessionsLevels = () => {
        const result = [];
        (this.getClassProfessionsObj()).forEach( (el, index) => {
            if(this.getClassProfessionsVal().indexOf(el.name) > -1) {
                (el.careers).forEach( (item,  index) => {
                    if(item.name === this.state.value) {
                        item.levels.forEach((item, index) => {
                            result.push(item.name)
                        })
                    }
                });
            }
        });
        return result
    };


    render() {

        const selectPlayerClass = <div>
                <NativeSelect
                    onChange={this.handleChange('value')}
                    pathCareers={this.props.careerPath}
                    value = {this.state.value}
                />
            </div>;

        const selectPlayerProfession = <div>
                <NativeSelect
                    onChange={this.handleChange('value')}
                    data={this.getProfessionsName()}
                    value = {this.state.value}
                />
            </div>;

        return this.state.value === false ? selectPlayerClass
            :
            this.getClassProfessionsVal().indexOf(this.state.value) > -1 ?
                <div>
                    {selectPlayerClass}
                    {selectPlayerProfession}
                </div>
                :
                <div>
                    {selectPlayerClass}
                    {selectPlayerProfession}
                    <ul>{this.getProfessionsLevels().map( (item,  index) => {
                        return <li key={item+index}>
                            
                            <Checkbox
                                id={index}
                                title={index+item}
                                checked={this.state.checked}
                                onChange={this.handleCheckboxChange}
                                value={item}
                                key={item+"-"+index}
                            />
                        </li>
                    })}
                    </ul>
                </div>
    }
}
export default Careers

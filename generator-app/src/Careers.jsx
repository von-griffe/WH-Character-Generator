import React from 'react';
import NativeSelect from "./shared/MultiSelect";


class Careers extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            value: false,
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
        };

    }




    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    getClassProfessions = () => {
        return this.props.careerPath.map((itemClass,index)=> {
                return itemClass;
            }
        )};

    getProfessionsName = () => {
        const result = [];

        (this.getClassProfessions()).forEach( (el, index) => {
            if(el.name === this.state.value) {
                (el.careers).forEach( (item,  index) => {
                    result.push(item.name);
                });
            }
        });
        return result
    };
    // getProfessionsLevels = () => {
    //     const result = [];
    //
    //     (this.getClassProfessions()).forEach( (el, index) => {
    //         if(el.name === this.state.value) {
    //             (el.careers).forEach( (item,  index) => {
    //                 console.log(item);
    //                 // result.push(item.name);
    //             });
    //         }
    //     });
    //     return result
    // };





    render() {

        console.log(this.state.value);
        console.log(this.state.propsArray);
        console.log(this.getProfessionsName());


        const selectPlayerClass =
            <div>
                <NativeSelect
                    onChange={this.handleChange('value')}
                    pathCareers={this.props.careerPath}
                    value = {this.state.value}
                />
            </div>;

        return this.state.value === false ? selectPlayerClass:  (
            <div>
                <NativeSelect
                onChange={this.handleChange('value')}
                pathCareers={this.props.careerPath}
                value = {this.state.value}
            />
                <NativeSelect
                    onChange={this.handleChange('value')}
                    data={this.getProfessionsName()}
                    value = {this.state.value}

                />
            </div>


        )
    }
}
export default Careers

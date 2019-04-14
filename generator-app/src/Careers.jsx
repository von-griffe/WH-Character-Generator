import React from 'react';
import Select from './shared/Select.jsx'
import Checkbox from './shared/Checkbox.jsx'
import CheckBox from "@material-ui/core/es/internal/svg-icons/CheckBox";

class Careers extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            value: [],
            warrior: "Warrior",
            ranger: "Ranger",
            academics: "Academics",
            rouges: "Rouges",
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


    handleChange = (event) => {
        return this.setState({
            value: (event.target.value)

        });
    };


    getClassName = () => {
        return Object.keys(this.props.propsData).map((key, index) => {
            let objCareers = this.props.propsData[key];
            return objCareers.name;
        });
    };


    getCareerName = () => {
        return Object.keys(this.props.propsData).map((key, index) => {
            return this.props.propsData[key].careers
        });
    };

    renderCareersClass = () => {
        return this.getClassName().map((key, index) => {
            return <option key={index} value={key}>{key}</option>
        });
    };

    renderCareer = () => {
        return this.getClassName().map((key, index) => {
            if (this.state.value === key) {
                return (this.props.propsData[index].careers).map((key, index) => {
                    return <option key={index} value={key.name}>{key.name}</option>
                })
            }
        })
    };

    getAllCareersNames = () => {
        return this.getCareerName().map((key, index) => {
            return key.map((keys, index) => {
                return keys.name
            })
        })
    };

    getCareersTab = () => {
        return this.getAllCareersNames().map((key, index) => {
            return key
        })
    };


    getProfessionStats = () => {
        return this.getCareerName().map((el, index) => {
            el.map((item,index) => {
                return
                if (item.name === this.state.value) {
                    return item.levels.map((el, index) => {
                        console.log(el.name);
                        return <div> { el.name } </div>
                    })
                }
            })
        })
    };

    // renderProfessionState = () => {
    //     return this.getProfessionStats().map((el, i) => {
    //         console.log(el);
    //     })
    // };


    render() {

        if (this.getClassName().indexOf(this.state.value) > -1) {
            return <div>

                <Select
                    onChange={this.handleChange}
                    render={this.renderCareersClass()}
                    title={this.state.titleType}
                />

                <Select
                    onChange={this.handleChange}
                    render={this.renderCareer()}
                    title={this.state.titleProfession}
                />
            </div>

        } else if (this.getCareersTab()[0].indexOf(this.state.value) > -1 ||
            this.getCareersTab()[1].indexOf(this.state.value) > -1 ||
            this.getCareersTab()[2].indexOf(this.state.value) > -1 ||
            this.getCareersTab()[3].indexOf(this.state.value) > -1) {

            return <div>
                <Select
                    onChange={this.handleChange}
                    render={this.renderCareersClass()}
                    title={this.state.titleType}
                />
                <Select
                    onChange={this.handleChange}
                    render={this.renderCareer()}
                    title={this.state.titleProfession}
                />

                <div>
                    {"wybrana profesja:"}
                    {this.state.value}
                </div>
                <div>
                    <CheckBox
                        type="checkbox"
                        onChange={this.handleInputChange}
                    />
                    {this.getProfessionStats()}
                </div>

            </div>
        }
        return <div>
            <Select
                onChange={this.handleChange}
                render={this.renderCareersClass()}
                title={this.state.titleType}
            />
        </div>
    }
}

export default Careers


// renderCareersClass = () => {
//     const keyCareers = this.getClassName();
//     const { value } = this.state;
//
//     const foundCareer = keyCareers.find((keyCareer) => {
//
//         console.log(keyCareer.hasOwnProperty(value));
//         return keyCareer.hasOwnProperty(value);
//     });
// };


//
// getCareerLevel = () => {

//     if ((this.getClassName()[0]).hasOwnProperty(this.state.value)){
//
//         return Object.keys((this.props.propsData["Academics"][0])[this.state.value][0]).map((key, index) => {
//             return <div key={index} value={key} >  <span>{index + 1}</span> {this.createCheckbox()} {key}</div>
//         });
//
//     } else if ((this.getClassName()[1]).hasOwnProperty(this.state.value)){
//
//         return Object.keys((this.props.propsData["Ranger"][0])[this.state.value][0]).map((key, index) => {
//             return <div key={index} value={key} > <span>{index + 1}</span> {this.createCheckbox()} {key} </div>
//         });
//
//     } else if ((this.getClassName()[2]).hasOwnProperty(this.state.value)){
//
//         return Object.keys((this.props.propsData["Rouges"][0])[this.state.value][0]).map((key, index) => {
//             return <div key={index} value={key} > <span>{index + 1}</span> {this.createCheckbox()} {key}</div>
//         });
//
//     } else if ((this.getClassName()[3]).hasOwnProperty(this.state.value)) {
//
//         return Object.keys((this.props.propsData["Warrior"][0])[this.state.value][0]).map((key, index) => {
//             return <div key={index} value={key} > <span>{index + 1}</span> {this.createCheckbox()} {key} </div>
//         });
//     }
// };
//


//
//
// renderAllCareers = () => {
//
//     return Object.keys(this.props.propsData).map((key, i) => {
//         return Object.keys(this.props.propsData[key][0]).map((key, i) => {
//             return <option key={i} value={key}>{key}</option>
//         });
//     });
// };
//
//
// createCheckbox = (label) => {
//     return <Checkbox
//         label={"label"}
//         handleCheckboxChange={this.toggleCheckbox}
//         key={label}
//     />
// }
//
//
// compareKeyCareer= () => {
//     return Object.keys(this.props.propsData).map((key, index) => {
//         console.log(key);
//         console.log("klucze", Object.keys(this.props.propsData));
//     });
// };
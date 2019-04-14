import React from 'react';

class SectionContainer extends React.Component {

    constructor(props) {
        console.log("to jest props", props);
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className = {"container"}>

            </div>
        )
    }
}
export default SectionContainer

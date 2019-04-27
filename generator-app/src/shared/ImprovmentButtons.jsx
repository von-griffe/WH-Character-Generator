import React from "react";
import {withStyles} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import PropTypes from "prop-types";


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        padding: '4px 4px 4px 4px',
    },
    body: {
        fontSize: 14,
        padding: '4px 4px 4px 4px',
        width: '30px'
    },

}))(TableCell);

const styles = theme => ({

    buttonContainer: {
        display: 'flex'
},
    button: {
        marginTop: theme.spacing.unit,
        padding:'0px 0px 0px 0px',
        width: '25px',
        height: '25px',
        borderRadius: '5px',
        border: 'none',
        background: '#3f51b5',
        color: 'white',
        outline: 'none',
        lineHeight: '5px',
        marginLeft: '2px'

},
    skillImprovement: {
        color:  '#3f51b5',
        fontWeight: 600,
        height: '35px',
        lineHeight: '30px',

    }



});

class ImprovementButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        });

        this.props.onIncrement();
        this.props.onExperience();
        this.props.onExperiencesSum()
    };

    decrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }
        });
        this.props.onDecrement()
        this.props.onExperience();

    };

    render() {

        const {classes} = this.props;

        return (

            <div>
                <CustomTableCell>
                <div className={classes.skillImprovement }>{this.props.data + this.state.counter}</div>
                    <div className={classes.buttonContainer}>

                        <button
                            className={classes.button}
                            onClick={this.increment}> +
                        </button>

                        <button
                            className={classes.button}
                            onClick={this.decrement}> -
                        </button>

                    </div>
                </CustomTableCell>
            </div>

        )
    }
}

ImprovementButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImprovementButtons)
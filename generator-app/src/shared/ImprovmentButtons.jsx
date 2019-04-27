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
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        padding:'0px 0px 0px 0px',
        width: '10px'
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
    };

    render() {

        const {classes} = this.props;

        return (

            <div>
                <CustomTableCell>
                <div>{this.props.data + this.state.counter}</div>
                    <div>

                        <button
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
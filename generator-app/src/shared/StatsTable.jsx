import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        padding: '4px 4px 4px 4px',
    },
    body: {
        fontSize: 14,
        padding: '4px 4px 4px 4px',
        width: '65px'

    },
}))(TableCell);


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 200,

    },
    cols:{
        height: '80px',
        width: '10px',

    },
    cell:{
        width: '10px',
        padding: '0px'

    }

});


class StatsTable extends React.Component {

    createData = (value) => {
        return value.map((item, index) => {
           return <CustomTableCell>{item}</CustomTableCell>
        })
    };


    render() {

        const {classes} = this.props;

        const rows = [
            this.createData(...this.props.keys()),
            this.createData(...this.props.values()),
            this.props.advance
        ];

        return (

            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.cols}>
                            {rows[0]}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className={classes.cols}>
                            {rows[1]}
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow className={classes.cols}>
                            {(rows[2])()}
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

StatsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsTable);
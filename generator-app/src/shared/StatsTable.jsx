import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';


const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    padding: '4px 4px 4px 4px',
  },
  body: {
    fontSize: 14,
    padding: '4px 4px 4px 4px',
    width: '65px',
  },
}))(TableCell);

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
  cols: {
    height: '80px',
    width: '10px',
  },
  cell: {
    width: '10px',
    padding: '0px',
  },
  toolTip: {
    backgroundColor: 'red',
  },
});

class StatsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  createData = (value) => {
    const characteristicsTooltips = [
      'Race of your hero',
      'Weapon Skill',
      'Ballistic Skill',
      'Strength',
      'Toughness',
      'Initiative',
      'Agility',
      'Dexterity',
      'Intelligence',
      'Willpower',
      'Fellowship',
    ].map((item, index) => {
      return item;
    });

    return value.map((item, index) => {
      return (
        <Tooltip
          key={index + item}
          title={characteristicsTooltips[index] + ': ' + item}
        >
          <CustomTableCell>{item}</CustomTableCell>
        </Tooltip>
      );
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.cols}>
              {this.createData(...this.props.getKeys())}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.cols} >
              {this.props.getAdvance(0)}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

StatsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsTable);

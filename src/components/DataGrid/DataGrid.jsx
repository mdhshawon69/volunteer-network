import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect } from 'react';
import { useState } from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function DataGrid() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('https://volunteer-network69.herokuapp.com/addedUser')
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

  const handleDelete = (_id) => {
    fetch(`https://volunteer-network69.herokuapp.com/removeByEmail/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) =>
        data
          ? console.log('User removed successfully')
          : console.log('Unable to remove')
      );
    const newRow = rows.filter((item) => item._id !== _id);
    setRows(newRow);
  };

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead style={{ background: '#f4f4f4' }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Email ID</TableCell>
            <TableCell align='right'>Registration Date</TableCell>
            <TableCell align='right'>Volunteer List</TableCell>
            <TableCell align='right'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.email}</TableCell>
              <TableCell align='right'>
                {row.events.map((event) =>
                  event ? (
                    <ul style={{ listStyle: 'none' }}>
                      <li>{event.date}</li>
                    </ul>
                  ) : (
                    'No name'
                  )
                )}
              </TableCell>
              <TableCell align='right'>
                {row.events.map((event) =>
                  event ? (
                    <ul style={{ listStyle: 'none' }}>
                      <li>{event.taskName}</li>
                    </ul>
                  ) : (
                    'No name'
                  )
                )}
              </TableCell>
              <TableCell align='right'>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(row._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

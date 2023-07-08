import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from '@material-ui/core'
import axios from 'axios';
import Item from './item'

export default function App() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('https://api.gyanibooks.com/library/get_dummy_notes')
            .then((response) => {
                setList(response.data);
                console.log("Successfully Fetched data!")
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    return (
        <React.Fragment>
            <Typography variant='h3' style={{ textAlign: 'center' }}>
                Notes Library
            </Typography>
            <TableContainer component={Paper} style={{ width: '90%', margin: 'auto', maxWidth: 1200 }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#999' }}>
                            <TableCell />
                            <TableCell>ID</TableCell>
                            <TableCell align="right">User</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((row, i) => (
                            <Item key={i} row={row} idx={i} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment >
    );
}

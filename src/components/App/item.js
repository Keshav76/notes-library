import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
    Box,
    Collapse,
    IconButton,
    TableCell,
    TableRow,
    Typography,
} from '@material-ui/core';


export default function Item(props) {
    const { row } = props;
    const { idx } = props;
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow style={idx % 2 ? { backgroundColor: '#999' } : { backgroundColor: '#DDD' }}
                sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.user}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Notes
                            </Typography>
                            <Typography variant="body1">{row.notes}</Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

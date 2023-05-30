import React from 'react'
import { Typography } from '@mui/material'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts'
import { Grid } from '@mui/material';

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core';

const Table_data = (props) => {
    console.log(props.filteredData);
    const rowsPerPageOptions = [5, 10, 25];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);
    const totalRows = props.filteredData.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    // Calculate the starting and ending indices of the current page
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    // Slice the filteredData array to get the rows for the current page
    const paginatedData = props.filteredData.slice(startIndex, endIndex);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset the page to the first page when changing the rows per page
    };
    return (
        <TableContainer
            sx={{
                height: 'fit-content',
                width: '100%',
                marginTop: '2%',
                background: 'white',
            }}
        >
            <Table
                sx={{
                    minWidth: '100%',
                    tableLayout: 'fixed',
                    borderCollapse: 'collapse', // Add border collapse
                }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow style={{ backgroundColor: 'lightgrey' }} sx={{ backgroundColor: 'lightgrey' }}> {/* Set header background color */}
                    {
                        props.headers.map((header, index) => (
                            <TableCell
                                key={index}
                            sx={{
                                fontWeight: 600,
                                fontSize: '14px',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                color: '#B3B3B3',
                                width: '10%',
                                border: '1px solid black', // Add border
                            }}
                        >
                            {header.value}
                        </TableCell>
                        ))
                    }
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedData.map((row, index) => (
                        <TableRow
                            key={index}
                            style={{ backgroundColor: index % 2 === 0 ? '#EDF4FA' : 'white' }}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                backgroundColor: index % 2 === 0 ? '#EDF4FA' : 'white', // Set alternating row background color
                                border: '1px solid black', // Add border
                            }}
                        >
                            {
                                props.headers.map((header, index) => (
                                    <TableCell
                                        key={index}
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            color: '#414042',
                                            width: '10%',
                                            border: '1px solid black', // Add border
                                        }}
                                    >
                                        {row[header.value]}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={totalRows}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    )
}

export default Table_data;
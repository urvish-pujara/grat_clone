import { ThemeContext } from '@emotion/react';
import { Grid, Paper, Stack, Box, Typography } from '@mui/material';
import React from 'react';
import data from './Data/user_data.json';
import { InputBase, IconButton } from '@material-ui/core';
import { Filter, Search as SearchIcon } from '@material-ui/icons';

import { Button, Menu, MenuItem } from '@material-ui/core';
import { FilterList as FilterListIcon } from '@material-ui/icons';
import { ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core';
import Table_data from './components/Table_data';
const UserManagement = () => {

    const jobRoles = data.user_data.map(person => person['Job Role']);
    const uniqueJobRoles = [...new Set(jobRoles)];
    let job_roles_count = [];
    for (let i = 0; i < uniqueJobRoles.length; i++) {
        job_roles_count.push(
            {
                name: uniqueJobRoles[i],
                value: data.user_data.filter(person => person['Job Role'] === uniqueJobRoles[i]).length
            }
        )
    }
    const [searchText, setSearchText] = React.useState('');
    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchButtonClick = () => {
        // Perform search or any other logic here
        console.log('Search button clicked. Text:', searchText);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedFilter, setSelectedFilter] = React.useState('Select Status');

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
        handleMenuClose();
        // Perform filter logic here
        console.log('Selected filter:', filter);
    };
    const filteredData = data.user_data.filter((row) => {
        const nameMatch = row.Name.toLowerCase().includes(searchText.toLowerCase());
        if (selectedFilter === 'Select Status') {
            return nameMatch;
        }
        const statusMatch = row.Status === selectedFilter;
        return nameMatch && statusMatch;
    });

    return (
        <>
            <Grid container spacing={3} sx={{
                backgroundColor: '#EDF4FA',
                paddingTop: 15,
                paddingBottom: 10
            }}>
                <Grid container spacing={2} sx={{
                    backgroundColor: '#EDF4FA',
                    margin: 10,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                    {
                        job_roles_count.map((job_role, index) => (
                            <Grid item xs={3} sx={{ backgroundColor: '#EDF4FA' }} key={index}>
                                <Box
                                    sx={{ width: 'fit-content', height: 'fit-content', margin: '2%', }}
                                    
                                >
                                    <Paper elevation={3}
                                        style={{ padding: '1rem', border: '1px solid blue', }}
                                        sx={{ width: 'fit-content', height: 'fit-content', padding: '2%', borderRadius: '10px' }}
                                    >
                                        <Typography
                                            variant="p" sx={{ fontWeight: 400, fontSize: '20px', fontFamily: 'Poppins', fontStyle: 'normal', lineHeight: '30px', color: '#414042' }}
                                        >
                                            {job_role.value + " "}
                                        </Typography>
                                        <Typography
                                            variant="p" sx={{ fontWeight: 200, fontSize: '20px', fontFamily: 'Poppins', fontStyle: 'normal', lineHeight: '30px', color: '#414042' }}
                                        >
                                            {job_role.name}
                                        </Typography>
                                    </Paper>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>

            <Stack
                direction="column"
                spacing={0}
                sx={{
                    height: 'fit-content',
                    marginTop: '2%',
                    background: 'white',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                <Box
                    sx={{
                        height: '70px',
                        width: '100%',
                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant="p"
                            sx={{
                                fontWeight: 400,
                                fontSize: '20px',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                lineHeight: '30px',
                                color: '#414042',
                            }}
                        >
                            User Management ({filteredData.length})
                        </Typography>
                        <Paper
                            style={{
                                backgroundColor: '#EDF4FA',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '4px',
                                borderRadius: '20px',
                            }}
                            elevation={0}
                        >
                            <IconButton onClick={handleSearchButtonClick} style={{ padding: '8px' }}>
                                <SearchIcon style={{ color: 'blue' }} />
                            </IconButton>
                            <InputBase
                                style={{ marginLeft: '8px', flex: 1, height: '24px' }} // Reduce the height
                                placeholder="Search..."
                                value={searchText}
                                onChange={handleSearchInputChange}
                                onClick={() => setSearchText('')}
                            />
                        </Paper>

                            {/* <SearchBox filteredData={filteredData} setFilteredData={setFilteredData} /> */}

                        <Box border={1} borderRadius={3} borderColor="black" display="inline-flex">
                            <Button
                                endIcon={<ArrowDropDownIcon />}
                                aria-controls="filter-menu"
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                                style={{
                                    textTransform: 'none',
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                    height: 'auto',
                                }}
                            >
                                {selectedFilter}
                            </Button>
                            <Menu
                                id="filter-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem
                                    onClick={() => handleFilterSelect('Select Status')}
                                    style={{ backgroundColor: 'inherit' }}
                                    onMouseEnter={(event) => (event.target.style.backgroundColor = '#EDF4FA')}
                                    onMouseLeave={(event) => (event.target.style.backgroundColor = 'inherit')}
                                >
                                    Select Status
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleFilterSelect('Active')}
                                    style={{ backgroundColor: 'inherit' }}
                                    onMouseEnter={(event) => (event.target.style.backgroundColor = '#EDF4FA')}
                                    onMouseLeave={(event) => (event.target.style.backgroundColor = 'inherit')}
                                >
                                    Active
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleFilterSelect('Inactive')}
                                    style={{ backgroundColor: 'inherit' }}
                                    onMouseEnter={(event) => (event.target.style.backgroundColor = '#EDF4FA')}
                                    onMouseLeave={(event) => (event.target.style.backgroundColor = 'inherit')}
                                >
                                    Inactive
                                </MenuItem>
                            </Menu>
                            {/* <Filter filteredData={filteredData} setFilteredData={setFilteredData} /> */}
                        </Box>
                    </Box>

                </Box>
                <Table_data headers={[{id:"1",value:"Name"},{id:"2",value:"Mobile No."},{id:"3",value:"Job Role"},{id:"4",value:"Status"}]} filteredData={filteredData}/>
            </Stack>
        </>
    );
}

export default UserManagement;
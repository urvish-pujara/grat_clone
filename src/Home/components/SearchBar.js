
import React from 'react';
import { InputBase, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import { Grid, Paper, Stack, Box, Typography } from '@mui/material';
const SearchBar = (props) => {

    // const [searchText, setSearchText] = React.useState('');
    // const handleSearchInputChange = (event) => {

    //     setSearchText(event.target.value);
    //     props.setFilteredData(filterData);
    // };

    // const handleSearchButtonClick = () => {
    //     // Perform search or any other logic here
    //     console.log('Search button clicked. Text:', searchText);
    // };

    // const filterData = props.filteredData.filter((row) => {
    //     const nameMatch = row.Name.toLowerCase().includes(searchText.toLowerCase());
        
    //     return nameMatch;
    // });

    // return (
    //     <>
    //         <Paper
    //             style={{
    //                 backgroundColor: '#EDF4FA',
    //                 display: 'flex',
    //                 alignItems: 'center',
    //                 padding: '4px',
    //                 borderRadius: '20px',
    //             }}
    //             elevation={0}
    //         >
    //             <IconButton onClick={handleSearchButtonClick} style={{ padding: '8px' }}>
    //                 <SearchIcon style={{ color: 'blue' }} />
    //             </IconButton>
    //             <InputBase
    //                 style={{ marginLeft: '8px', flex: 1, height: '24px' }} // Reduce the height
    //                 placeholder="Search..."
    //                 value={searchText}
    //                 onChange={handleSearchInputChange}
    //                 onClick={() => setSearchText('')}
    //             />
    //         </Paper>
    //     </>
    // )
}
export default SearchBar;
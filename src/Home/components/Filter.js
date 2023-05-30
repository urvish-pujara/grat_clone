
import { Button, Menu, MenuItem } from '@material-ui/core';
import { FilterList as FilterListIcon } from '@material-ui/icons';
import { ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons';
import React from 'react';
const Filter = (props) => {
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const [selectedFilter, setSelectedFilter] = React.useState('Select Status');

    // const handleMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    // };

    // const handleFilterSelect = (filter) => {
    //     setSelectedFilter(filter);
    //     handleMenuClose();
    //     // Perform filter logic here
    //     console.log('Selected filter:', filter);
    // };
    // const filteredData = props.filteredData.filter((row) => {
    //     if (selectedFilter === 'Select Status') {
    //         return props.filteredData;
    //     }
    //     const statusMatch = row.Status === selectedFilter;
    //     return statusMatch;
    // });

    // props.setFilteredData(filteredData);

    // return (
    //     <>
    //         <Button
    //             endIcon={<ArrowDropDownIcon />}
    //             aria-controls="filter-menu"
    //             aria-haspopup="true"
    //             onClick={handleMenuOpen}
    //             style={{
    //                 textTransform: 'none',
    //                 paddingLeft: 8,
    //                 paddingRight: 8,
    //                 height: 'auto',
    //             }}
    //         >
    //             {selectedFilter}
    //         </Button>
    //         <Menu
    //             id="filter-menu"
    //             anchorEl={anchorEl}
    //             keepMounted
    //             open={Boolean(anchorEl)}
    //             onClose={handleMenuClose}
    //         >
    //             <MenuItem
    //                 onClick={() => handleFilterSelect('Select Status')}
    //                 style={{ backgroundColor: 'inherit' }}
    //                 onMouseEnter={(event) => (event.target.style.backgroundColor = '#EDF4FA')}
    //                 onMouseLeave={(event) => (event.target.style.backgroundColor = 'inherit')}
    //             >
    //                 Select Status
    //             </MenuItem>
    //             <MenuItem
    //                 onClick={() => handleFilterSelect('Active')}
    //                 style={{ backgroundColor: 'inherit' }}
    //                 onMouseEnter={(event) => (event.target.style.backgroundColor = '#EDF4FA')}
    //                 onMouseLeave={(event) => (event.target.style.backgroundColor = 'inherit')}
    //             >
    //                 Active
    //             </MenuItem>
    //             <MenuItem
    //                 onClick={() => handleFilterSelect('Inactive')}
    //                 style={{ backgroundColor: 'inherit' }}
    //                 onMouseEnter={(event) => (event.target.style.backgroundColor = '#EDF4FA')}
    //                 onMouseLeave={(event) => (event.target.style.backgroundColor = 'inherit')}
    //             >
    //                 Inactive
    //             </MenuItem>
    //         </Menu>
    //     </>
    // )
}

export default Filter;
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SelectorComponent = ({ label, options, value, onChange }) => {
    return (
        <div
            className='fields'
            style={{ fontWeight: 'bold' }}>
            <FormControl
                fullWidth
                sx={{ border: 'none' }}>
                <InputLabel
                    id={`${label}-label`}
                    sx={{ color: 'var(--fields-input-border-color)' }}>
                    {label}
                </InputLabel>
                <Select
                    sx={{
                        width: '200px',
                        height: '35px',
                        backgroundColor: 'var(--fields-input-background-color)',
                        borderRadius: '0',
                        border: 'none',
                        color: 'var(--fields-input-text-color)',
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--fields-input-text-color)',
                            borderWidth: '1px'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--fields-input-border-color)',
                            borderWidth: '1px'
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: 'var(--fields-input-border-color)',
                            borderWidth: '1px'
                        }
                    }}
                    labelId={`${label}-label`}
                    id={label}
                    value={value}
                    onChange={onChange}
                    label={label}>
                    {options.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectorComponent;

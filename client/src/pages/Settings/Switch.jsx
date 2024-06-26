import Switch from '@mui/material/Switch';

const CustomSwitch = ({ label, checked, onChange }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label>{label}</label>
            <Switch
                checked={checked}
                onChange={onChange}
                inputProps={{ 'aria-label': `${label} switch` }}
                sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#A89467' // Thumb color when checked
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#A89490' // Track color when checked
                    },
                    '& .MuiSwitch-switchBase': {
                        color: '#FFFFFF' // Thumb color when unchecked
                    },
                    '& .MuiSwitch-track': {
                        backgroundColor: '#D7D5CE' // Track color when unchecked
                    }
                }}
            />
        </div>
    );
};

export default CustomSwitch;

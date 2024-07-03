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
                        color: '#A89467' 
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#A89490' 
                    },
                    '& .MuiSwitch-switchBase': {
                        color: '#FFFFFF' 
                    },
                    '& .MuiSwitch-track': {
                        backgroundColor: '#D7D5CE' 
                    }
                }}
            />
        </div>
    );
};

export default CustomSwitch;

import Switch from '@mui/material/Switch';

const CustomSwitch = ({ label, checked, onChange }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <label>{label}</label>
            <Switch 
            checked={checked}
            onChange={onChange}
            inputProps={{ 'aria-label': `${label} switch`}}
            // sx={{
            //     '& .MuiSwitch-track': {
            //         backgroundColor: checked ? '#A89467': '#D7D5CE',
            //     },
            //     '& .MuiSwitch-thumb': {
            //         backgroundColor: checked ? '#A89467': '#FFFFFF',
            //     },
            //     '&.Mui-checked .MuiSwitch-track': {
            //         backgroundColor: '#A89490',
            //     },
            //     '&.Mui-checked .MuiSwitch-thumb': {
            //         backgroundColor: '#A89467',
            //     }
            // }}
            />
        </div>
    );
};

export default CustomSwitch;
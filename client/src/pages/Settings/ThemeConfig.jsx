import FallHeader from '../../assets/Fall_Header.jpg';
import MoodyHeader from '../../assets/Moody_Header.jpg';
import TarotHeader from '../../assets/TarotHeader1.png';
import PastelHeader from '../../assets/Pastel_Header.jpg';
import MoodyLogo from '../../assets/Logos/Large/MoodyLogo.png';
import FallLogo from '../../assets/Logos/Large/FallLogo.png';
import MainLogo from '../../assets/Logos/Large/MainLogo.png';
import PastelLogo from '../../assets/Logos/Large/PastelLogo.png';

const themes = {
    // label: Fall Moods
    fall: {
        headerImage: FallHeader,
        panelColor: '#8C3D00',
        logo: FallLogo,
        borderLeftColor: '#DAA520',
        avatarSettingsBorder: '#372B4F',
        bodyColor: '#fcfbfb',
        backgroundColor: '#141414',
        h2Color: '#00565E',
        h2TextShadow: '#121212',
        h3Color: '#D7D5CE',
        hrBorderColor: '#121212',
        universalImageBorder: '#00565e',
        textColor: '#DAA520',
        userTextColor: '#D7D5CE',
        disabled: '#DAA520',
        avatarSettingsBorder: '#00565E',
        panelColor: '#8C3D00',
        buttonColor: '#8C3D00',
        iconColor: '#D7D5CE',
        trashCanHoverColor: '#DAA520',
        fieldsInputBackgroundColor: '#D7D5CE',
        fieldsInputBorderColor: '#8C3D00',
        fieldsInputTextColor: '#561E1E',
        editableBackgroundColor: '#D7D5CE',
        editableBorderColor: '#00565E',
        editableTextColor: '#372B4F'
    },
    // label: Scarlet Shadows - Christi's theme
    moody: {
        headerImage: MoodyHeader,
        logo: MoodyLogo,
        panelColor: '#121212',
        avatarSettingsBorder: '#7B2C2C',
        bodyColor: '#fcfbfb',
        borderLeftColor: '#7b2c2c',
        backgroundColor: '#F7F7F7',
        h2Color: '#7B2C2C',
        h2TextShadow: '#121212',
        h3Color: '#561E1E',
        hrBorderColor: '#121212',
        universalImageBorder: '#7b2c2c',
        textColor: '#7B2C2C',
        userTextColor: '#D7D5CE',
        disabled: '#7B2C2C',
        avatarSettingsBorder: '#7B2C2C',
        panelColor: '#121212',
        buttonColor: '#7B2C2C',
        iconColor: '#561E1E',
        trashCanHoverColor: '#7B2C2C',
        fieldsInputBackgroundColor: '#D0C9C0',
        fieldsInputBorderColor: '#A89467',
        fieldsInputTextColor: '#561E1E',
        editableBackgroundColor: '#D0C9C0',
        editableBorderColor: '#A89467',
        editableTextColor: '#561E1E'
    },
    // label: Pastel Haunt - Andrea's theme
    pastel: {
        headerImage: PastelHeader,
        logo: PastelLogo,
        panelColor: '#C8C9C1',
        avatarSettingsBorder: '#cc8f8f',
        bodyColor: '#00565e',
        borderLeftColor: '#CDB167',
        backgroundColor: '#468874',
        h2Color: '#AB8383',
        h2TextShadow: '#121212',
        h3Color: '#CDB167',
        hrBorderColor: '#00565e',
        textColor: '#C8C9C1',
        userTextColor: '#00565e',
        universalImageBorder: '#cc8f8f',
        disabled: '#7B2C2C',
        panelColor: '#C8C9C1',
        buttonColor: '#AB8383',
        iconColor: '#CD8167',
        trashCanColor: '#CDB167',
        trashCanHoverColor: '#C8C9C1',
        fieldsInputBackgroundColor: '#C8C9C1',
        fieldsInputBorderColor: '#AB8383',
        fieldsInputTextColor: '#3A5256',
        editableBackgroundColor: '#C8C9C1',
        editableBorderColor: '#AB8383',
        editableTextColor: '#3A5256'
    },
    // label: Noble Charoite - Main theme
    main: {
        headerImage: TarotHeader,
        logo: MainLogo,
        avatarSettingsBorder: '#7B2C2C',
        backgroundImage: 'radial-gradient(circle, #331834 50%, #040311 99%)',
        h2Color: '#A89467',
        h2TextShadow: '#121212',
        h3Color: '#A89467',
        bodyColor: '#A89467',
        hrBorderColor: '#A89467',
        borderLeftColor: '#A89467',
        textColor: '#FAFAF7',
        universalImageBorder: '#A89467',
        userTextColor: '#D7D5CE',
        avatarSettingsBorder: '#808080',
        panelColor: '#4F334A',
        buttonColor: '#A89467',
        iconColor: '#A89467',
        fieldsInputBackgroundColor: '#4f3052',
        fieldsInputBorderColor: '#A89467',
        fieldsInputTextColor: '#FAFAF7',
        editableBackgroundColor: '#FAFAF7',
        editableBorderColor: '#A89467',
        editableTextColor: '#121212'
    }
};

export default themes;

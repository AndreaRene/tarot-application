import { useTheme } from '../../pages/Settings/ThemeContext';

const AppUpdates = () => {
    const { theme } = useTheme();

    return (
        <div style={{ margin: '.2rem 1.5rem', color: theme.userTextColor }}>
            <h3
                style={{
                    color: theme.bodyColor, // Use the theme's h2Color
                    textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Use theme's h2TextShadow or default
                }}>
                TarotDeck News
            </h3>
            <p>New Tarot decks are currently in the works.</p>
            <p>We're creating a variety of spreads for specific inquiries.</p>
            <p>Stay tuned for updates!</p>
        </div>
    );
};

export default AppUpdates;

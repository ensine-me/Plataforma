import React from 'react';
import { useTheme } from '../functions/ThemeContext';

const BotaoDarkMode = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
        </button>
    );
}

export default BotaoDarkMode;

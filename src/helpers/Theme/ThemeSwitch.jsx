import React, { useState } from 'react';
import { useTheme } from 'hooks/use-theme';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';
import { SwitchContainer } from './ThemeSwitch.styled';

export const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('app-theme') === 'light' ? false : true
  );

  const { setTheme } = useTheme();

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      setTheme('light');
    } else {
      setIsDarkMode(true);
      setTheme('dark');
    }
  };

  return (
    <SwitchContainer>
      <DarkModeToggle
        onChange={toggleDarkMode}
        checked={isDarkMode}
        isDarkMode={isDarkMode}
        size="50px"
        speed='1.5'
      />
    </SwitchContainer>
  );
};

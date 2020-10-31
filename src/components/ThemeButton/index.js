import React, { useState, useEffect } from 'react';
import { Bulb as LightOff } from '@styled-icons/boxicons-regular/Bulb';
import { Bulb as LightOn } from '@styled-icons/boxicons-solid/Bulb';

import * as S from './styled';

const ThemeButton = () => {
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.ThemeButtonWrapper>
      <S.ThemeButtonLabel>Tema:</S.ThemeButtonLabel>
      <S.ThemeButtonButton
        title="Mudar o tema"
        onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');

          if (window.DISQUS) {
            const pageUrl = document.location.href;
  
            window.DISQUS.reset({
              reload: true,
              config: function () {
                this.page.identifier = pageUrl;
                this.page.url = pageUrl;
              }
            });
          }
        }}
        className={theme}
      >
        { isDarkMode ? 'Dark' : 'Light' }
        <S.ThemeButtonIconWrapper>
          { isDarkMode ? <LightOff /> : <LightOn /> }
        </S.ThemeButtonIconWrapper>
      </S.ThemeButtonButton>
    </S.ThemeButtonWrapper>
  );
};

export default ThemeButton;

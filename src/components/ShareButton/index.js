import React from 'react';
import { ShareAlt as Share } from '@styled-icons/boxicons-solid/ShareAlt';

import * as S from './styled';

const ShareButton = () => {
  return (
      <S.ShareButtonButton
        title="Mudar o tema"
        onClick={() => {
        }}
        // className={theme}
      >
        Compartilhar
        <S.ShareButtonIconWrapper>
          <Share />
        </S.ShareButtonIconWrapper>
      </S.ShareButtonButton>
  );
};

export default ShareButton;

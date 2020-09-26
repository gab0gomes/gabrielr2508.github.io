import React from 'react';
import { ShareAlt as Share } from '@styled-icons/boxicons-solid/ShareAlt';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import * as S from './styled';

const ShareButton = ({value}) => {
  return (
    <>
      <CopyToClipboard 
        text={value}
        onCopy={() => {
          toast('Link copiado para área de transferência');
        }}
      >
        <S.ShareButtonButton
          title="Mudar o tema"
        >
          Compartilhar
          <S.ShareButtonIconWrapper>
            <Share />
          </S.ShareButtonIconWrapper>
        </S.ShareButtonButton>
      </CopyToClipboard>
    </>
  );
};

ShareButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ShareButton;

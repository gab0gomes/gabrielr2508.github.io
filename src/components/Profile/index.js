import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

import * as S from './styled';
import getThemeColors from '../../utils/getThemeColors';

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        title,
        position,
        description
      }
    }
  } = useStaticQuery(
    graphql`
        query MySiteMetadata {
          site {
            siteMetadata {
              title,
              description,
              position,
            }
          }
        }
      `
  );

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColors()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          { title }
          <S.ProfilePosition>{ position }</S.ProfilePosition>
        </S.ProfileAuthor>
        <S.ProfileDescription>{ description }</S.ProfileDescription>
      </S.ProfileLink>
    </S.ProfileWrapper>
  );
}

export default Profile;

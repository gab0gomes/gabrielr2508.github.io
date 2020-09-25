import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(
          relativePath: {
            eq: "profile-photo.png"
          }
        ) {
          childImageSharp {
            fluid(
              maxWidth: 60,
            ) {
              ...GatsbyImageSharpFluid,
            }
          }
        }
      }
    `
  );

  return (
    <S.AvatarFilter>
      <S.AvatarImage fluid={ avatarImage.childImageSharp.fluid } />
    </S.AvatarFilter>
  );
};

export default Avatar;

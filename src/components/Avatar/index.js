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
              maxWidth: 128,
            ) {
              ...GatsbyImageSharpFluid,
            }
          }
        }
      }
    `
  );
  return (
    <S.AvatarImage fluid={ avatarImage.childImageSharp.fluid } />
  );
};

export default Avatar;

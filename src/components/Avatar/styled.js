import styled from 'styled-components';
import media from  'styled-media-query';
import Img from 'gatsby-image';

export const AvatarImage = styled(Img)`
  width: 8rem;

  ${media.lessThan('small')`
    width: 4rem;
  `};
`;

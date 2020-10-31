import styled from 'styled-components';
import media from  'styled-media-query';
import Img from 'gatsby-image';

export const AvatarImage = styled(Img)`
  width: 8rem;

  /* ${media.lessThan('large')`
    height: 1.875rem;
    width: 1.875rem;
  `}; */
`;

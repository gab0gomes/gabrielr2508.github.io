import styled from 'styled-components';
import media from  'styled-media-query';
import Img from 'gatsby-image';

export const AvatarFilter = styled.div`
  background: #283149;
  width: 8rem;
`;

export const AvatarImage = styled(Img)`
  mix-blend-mode: screen;
  filter: saturate(0%) contrast(150%);
  opacity: 1;

  /* ${media.lessThan('large')`
    height: 1.875rem;
    width: 1.875rem;
  `}; */
`;

import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;


  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.5rem;
  margin: 1rem 0 0;
  font-weight: 700;

  /* ${media.lessThan('large')`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}; */
`;

export const ProfilePosition = styled.small`
  font-size: 1rem;
  display: block;
  font-weight: 400;
  margin: .5rem 0 1rem;
/*
  ${media.lessThan('large')`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}; */
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;

  /* ${media.lessThan('large')`
    display: none;
  `}; */
`;


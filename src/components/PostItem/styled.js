import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const PostItemLink = styled(AniLink)`
  display: flex;
  text-decoration: none;
`;

export const PostItemWrapper = styled.section`
  color: var(--texts);
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 1rem 2rem;
  width: 100%;
  transition: 0.5s;
  background-color: ${props => props.active ? 'var(--gray)' : ''};
  color: ${props => props.active ? 'var(--dark-plus)' : ''};

  &:hover {
    background-color: var(--gray);
    color: var(--highlight);
  }
  /* ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `} */
`;

export const PostItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  position: relative;
`;

export const PostItemTag = styled.div`
  align-items: center;
  background-color: var(--highlight);
  color: var(--white);
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  justify-content: center;
  height: 1.5rem;
  text-transform: uppercase;
  padding: 0 .5rem;
  position: absolute;
  right: -2rem;

  /* ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `} */
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  /* ${media.lessThan('large')`
    margin: 0;
  `} */
`;

export const PostItemDate = styled.time`
  font-size: .8rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: .5rem;
  width: 24rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.lessThan('large')`
    width: auto;
    white-space: normal;
  `}
`;

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
`;

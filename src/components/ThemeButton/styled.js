import styled from 'styled-components';

export const ThemeButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ThemeButtonButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  height: 2rem;
  background-color: var(--dark);
  border: 0;
  color: var(--white);
  transition: .5s;
  padding: .25rem .25rem .25rem .5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--guava-pink);
  }
`;

export const ThemeButtonIconWrapper = styled.div`
  margin-left: .5rem;
  width: 1.5rem;
  height: 1.5rem;
`;

export const ThemeButtonLabel = styled.label`
  font-size: 1rem;
  color: var(--texts);
`;

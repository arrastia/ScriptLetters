import styled from 'styled-components';

const Layout = styled('div')`
  align-items: center;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  width: 100vw;
`;

export const Styles = { Layout };

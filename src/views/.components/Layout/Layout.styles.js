import styled from 'styled-components';

const Layout = styled('div')`
  /* justify-content: center; */
  /* width: 100vw; */
  align-items: center;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  height: 100%;
  min-height: 100vh;
  text-align: center;
`;

const Main = styled('div')`
  height: 100%;
  padding: 1rem;
  position: relative;
  width: calc(100% - 2rem);
  /* justify-content: center;
  display: flex; */
`;

export const Styles = { Layout, Main };

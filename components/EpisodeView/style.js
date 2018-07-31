// @flow
import styled from 'styled-components'

export const Grid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 280px minmax(min-content, max-content);
  grid-gap: 64px;
  grid-template-rows: auto;
  grid-template-areas: "sidebar content";
  max-width: 968px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr; 
    grid-template-areas: "content" "sidebar";
    margin-top: 32px;
  }
`

export const Sidebar = styled.div`
  grid-area: sidebar;
`

export const Content = styled.div`
  grid-area: content;

  audio {
    margin-bottom: 32px;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${props => props.theme.text.default};
  letter-spacing: 0.8px;
  line-height: 1.2;

  @media (max-width: 968px) {
    font-size: 32px;
    line-height: 1.1;
  }
`

export const Description = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${props => props.theme.text.tertiary};
  line-height: 1.4;
  margin-bottom: 4px;
  margin-top: 24px;

  @media (max-width: 968px) {
    font-size: 18px; 
    margin-bottom: 16px;
  }

  a:hover {
    color: ${props => props.theme.text.default};
  }
`

export const Divider = styled.div`
  position: relative;
  height: 1px;
  border-bottom: 1px solid ${props => props.theme.border.default};
  width: 100%;
  margin-top: 48px;
`

export const Label = styled.span`
  position: relative;
  top: -13px;
  background: ${props => props.theme.bg.wash};
  padding: 2px 16px 2px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text.secondary};
`
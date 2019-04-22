import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import styled from 'styled-components';

import Navigation from './Navigation';
import TopBar from './TopBar';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Heebo Regular';
  background-color: #f4f4f4;
  min-width: 1140px;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1050px;
  min-width: 1050px;
`

const muiTheme = getMuiTheme({
  fontFamily: 'Heebo Medium',
  palette: {
    primary1Color: '#8a2159',
    secondary1Color: '#e6cdd9'
  },
})

const PageWrapper = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Wrapper>
      <Navigation />
      <TopBar title={props.topBarTitle} onFilter={props.topBarOnFilter} filterable={props.filterable} />
      <MainWrapper>
        <ContentWrapper>
            { props.children }
        </ContentWrapper>
      </MainWrapper>
    </Wrapper>
  </MuiThemeProvider>
);

export default PageWrapper
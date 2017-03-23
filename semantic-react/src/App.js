import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';
import MyMenu from './Menu';
import SubMenu from './Submenu';
import FileListHeader from './FilesHeader';
import FileListing from './FilesListing';





class App extends Component {
  render() {
    return (
      <Grid container>
        <MyMenu />
        <SubMenu />
        <FileListHeader />
        <FileListing />


      </Grid>
    );
  }
}

export default App;

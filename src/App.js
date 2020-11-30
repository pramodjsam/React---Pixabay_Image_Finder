import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'

export class App extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
        <React.Fragment>
          <Navbar />
          <Search />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default App;

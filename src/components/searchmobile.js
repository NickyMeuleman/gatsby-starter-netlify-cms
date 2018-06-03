import React, { Component } from 'react';
import { SearchStyle } from './styles';

class SearchMobile extends Component{
  render(){
    return(
    <React.Fragment>
      {this.props.open ? <SearchStyle>
        <input type='text' placeholder='Search Techvax...' className='search' />
      </SearchStyle> : null }
    </React.Fragment>
    );
  }
}
export default SearchMobile;

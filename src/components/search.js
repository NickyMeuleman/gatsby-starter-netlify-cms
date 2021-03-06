import React, { Component, Fragment } from 'react';
import { SearchStyle } from './styles';
import Link from 'gatsby-link';
import Card from './card';
import { InstantSearch } from 'react-instantsearch/dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';
import { connectSearchBox, connectHits } from 'react-instantsearch/connectors';

const CustomHits = connectHits(({ hits }) => (
  <div className="cards">
    {hits.map(card => (
      <ul key={card.objectID}>
        <img src={card.frontmatter.image} alt="" className="img" />
        <a href={card.fields.slug}>
          {card.frontmatter.title}{' '}
          <FontAwesomeIcon id="arrow" icon={faArrowRight} />
        </a>
        <p>{card.excerpt}</p>
        {/* Can you also add to artical title inside the <h1 /> JSX element and use id='usr' something like so <h1>{title}<span id='usr'>Posted by: {User}</span></h1> */}
        <p id="postusr">Will add later</p>
      </ul>
    ))}
  </div>
));

const MySearchBox = ({ currentRefinement, refine }) => (
  <input
    autoFocus
    autoComplete="off"
    autoCapitalize="off"
    autoCorrect="off"
    type="text"
    placeholder="Search Techvax..."
    value={currentRefinement}
    onChange={e => refine(e.target.value)}
    type="text"
    className="search"
  />
);

const ConnectedSearchBox = connectSearchBox(MySearchBox);

class Searchbar extends Component {
  render() {
    return (
      <InstantSearch
        appId={process.env.GATSBY_APP_ID}
        apiKey={process.env.GATSBY_SEARCH_API_KEY}
        indexName="blog">
        <React.Fragment>
          {this.props.open ? (
            <SearchStyle>
              {this.props.children}
              <ConnectedSearchBox />
              <CustomHits />
            </SearchStyle>
          ) : null}
        </React.Fragment>
      </InstantSearch>
    );
  }
}
export default Searchbar;

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import CollectionSummary from './Summary'
import { SaveAsFile } from "../utilities";

const Overview = ({ decks }) => {
  function exportJson() {
    SaveAsFile(JSON.stringify({ decks: decks }, null, 2), "Collection.json");
  }
  
  return (
    <>
    <section>
      <h2>Import/Export</h2>
      <div className='tiles'>
        <Link to='/collection/import' className='tile'>
          <div className='container'>
            <div className='art'>
              <span className='icon-upload-cloud large'></span>
            </div>
            <span className='title'>Import collection</span>
          </div>
        </Link>
        <Link to='#' className='tile' onClick={exportJson}>
          <div className='container'>
            <div className='art'>
              <span className='icon-download-cloud large'></span>
            </div>
            <span className='title'>Export collection</span>
          </div>
        </Link>
      </div>
    </section>

    <CollectionSummary decks={decks} />
    </>
  );
}

export default connect(state => ({
  decks: state.decks,
}))(Overview);

import React,{ Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/fetchSongs';

class SongList extends Component{

    renderSongs(){
      return this.props.data.songs.map(song => {
        return (
            <li key={song.id} className="collection-item">
              {song.title}
            </li>
        );
      });
    }

    render(){
      // console.log(this.props);
      if(this.props.data.loading){
          return <div>Loading...</div>
      }

      return(
        <div>
          <ul className="collection">
            {this.renderSongs()}
          </ul>
          <Link to="song/new" className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
          </Link>
        </div>
      );
    }
}

//query doesn't get executed here


//graphql(query) returns a function which is immediately invoked by SongList
export default graphql(query)(SongList);

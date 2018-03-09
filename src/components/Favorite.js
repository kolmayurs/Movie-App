import React from 'react';
import MovieCardBox from './MovieCardBox';
import '../css/styles.css';
import { connect } from 'react-redux';
import {fetchData} from '../actions/dataActions'
import PropTypes from 'prop-types';
import NoMatchMovies from './NoMatchMovies';
import Header from './Header';


function mapStateToProps(state){
  return {

    data: state.data
  }
}


class Favorite extends React.Component{

  componentDidMount(){
    this.props.fetchData();
}

  date_format(new_date){
    var m_names = ["Jan", "Feb", "Mar", 
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
    "Oct", "Nov", "Dec"];

    var d = new Date(new_date);
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    return (curr_date + " " + m_names[curr_month] 
    + " " + curr_year);
    }

render(){
    const movie_data = this.props.data;
    let fetchMovie = false;
    let favMovies = JSON.parse(localStorage.getItem("key") || "null");
    console.log("FAv Mpvoie :" + favMovies )
  const movies = movie_data.map((dynamicData,key) => {

    if (favMovies === dynamicData.title ){
        fetchMovie = true;
            return (
            <MovieCardBox 
              key={'movie_' + key} 
              date={this.date_format(dynamicData.release_date)} 
              image={dynamicData.poster_path} 
              title={dynamicData.title} 
              votes={Math.round(dynamicData.vote_average)} 
              language={dynamicData.original_language}  />
          )

        }
    });
if (!fetchMovie) {
    return(
      <div>
      <Header />
      <div className="movie-card-container"><NoMatchMovies /></div>
      </div>
    )
  }
  else{
      return (
        <div>
        <Header />
          <div className="movie-card-container">{movies}</div>
          </div>
      )}

  }
}

export default connect(mapStateToProps, {fetchData})(Favorite);

Favorite.propTypes = {
  name: PropTypes.string
};

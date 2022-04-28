//import React, { Component } from 'react'

import React from 'react'

const MovieList = (props) => {
    return (
      <div className="row">
        {props.movies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            {/* {console.log(movie.id)} */}
            <div className="card mb-4 shadow-sm">
              <img src={movie.imageURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-md btn-outline-danger"
                    //onClick={this.deleteMovie}
                    //onClick={(event) => console.log(event.pageX)}
                    onClick={() => props.deleteMovieProp(movie)}
                  >
                    Delete
                  </button>
                  <h2>
                    <span className="badge bg-info">{movie.rating}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieList;



// export default class MovieList extends Component {
//   render() {
//     // function deleteMovie(){
//     //     console.log("Silme işlemi yapılıyor");
//     // }
//     return (
//       <div className='row'>
//           {this.props.movies.map((movie) => (
//               <div className='col-md-4' key={movie.id}>
//                   {console.log(movie.id)}
//               <div className='card mb-4 shadow-sm'>
//                   <img src= {movie.imageURL} className='card-img-top' alt='...'/>
//                     <div className='card-body'>
//                         <h5 className='card-title'>{movie.name}</h5>
//                         <p className='card-text'>{movie.overview}</p>
//                         <div className='d-flex justify-content-between align-items-center'>
//                             <button type='button' className='btn btn-md btn-outline-danger'
//                             // onClick={this.deleteMovie}
//                             //onClick={(event) => console.log(event.pageX)}
//                             onClick={() => this.props.deleteMovieProp(movie)}
//                             >Delete</button>
//                             <h2>
//                                 <span className='badge bg-info'>{movie.rating}</span>
//                             </h2>
//                         </div>
//                     </div>
//               </div>
//           </div>
//           ))}     
//       </div>
//     )
//   }
// }

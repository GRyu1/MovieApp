import { useEffect, useState } from "react";
import { json, useParams , Link } from "react-router-dom";


function Detail() {
    const [loading , setLoading] = useState(false);
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(true);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
        {loading ? (
        <div>
        <img src={detail.medium_cover_image}/>
        <h1>{detail.title}</h1>
        <p> Rating : {detail.rating}</p>
        <p> Runtime : {detail.runtime===0? "No data" : detail.runtime} </p>
        <ul>
          {detail.genres.map((genre)=>(
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>{detail.description_full}</p>
        </div>
        ) : (<h1>Now Loading...</h1>)}
        <h4><Link to='/'>Back to Home</Link></h4>
     </div>
  );
}

export default Detail;
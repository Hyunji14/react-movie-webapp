import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  // url에서 변하는 값을 가져올 수 있음
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;

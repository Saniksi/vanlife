import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';

import { getVans } from '../../utils/api';

export function loader() {
  return getVans();
}

export const Vans = () => {
  // const [vans, setVans] = useState([]);
  const [searchParams, setSearChParams] = useSearchParams();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const vans = useLoaderData();

  const typeFilter = searchParams.get('type');

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  // useEffect(() => {
  // fetch('/api/vans')
  //   .then((response) => response.json())
  //   .then((result) => {
  //     for (let van of result.vans) {
  //       setVans((prev) => [...prev, van]);
  //     }
  //   });

  // async function loadVans() {
  //   setLoading(true);

  //   try {
  //     const data = await getVans();
  //     setVans(data);
  //   } catch (err) {
  //     setError(err);
  //     console.log('err---', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  //   loadVans();
  // }, []);

  // if (loading) {
  //   return <h2>Loading....</h2>;
  // }

  // if (error) {
  //   return <h2>This is {error.message}</h2>;
  // }

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  const handleFilterChange = (key, value) => {
    setSearChParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={
            typeFilter === 'simple'
              ? 'van-type simple selected'
              : 'van-type simple'
          }
          onClick={() => handleFilterChange('type', 'simple')}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === 'luxury' ? 'selected' : ''
          }`}
          onClick={() => handleFilterChange('type', 'luxury')}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === 'rugged' ? 'selected' : ''
          }`}
          onClick={() => handleFilterChange('type', 'rugged')}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => handleFilterChange('type', null)}
          >
            Clear
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

{
  /* <Link className="van-type simple" to="?type=simple">
          Simple
        </Link>
        <Link className="van-type luxury" to="?type=luxury">
          Luxury
        </Link>
        <Link className="van-type rugged" to="?type=rugged">
          Rugged
        </Link>
        <Link to="." className="van-type clear-filters">
          Clear filter
        </Link> */
}

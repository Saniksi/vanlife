import { useOutletContext } from 'react-router-dom';

export const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <img
      className="host-van-detail-image"
      src={`${currentVan.imageUrl}`}
      alt={`${currentVan.name}`}
    />
  );
};

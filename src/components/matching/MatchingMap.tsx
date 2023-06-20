import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MarkerType } from '../../types/matching';
import Loading from '../Loading';
import styled from 'styled-components';

const MatchingMap = ({ keyword }: { keyword: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
  });
  const [info, setInfo] = useState<MarkerType | null>(null);
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  const getCurrentCoordinate = async (): Promise<kakao.maps.LatLng> => {
    return new Promise((res, rej) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const coordinate = new kakao.maps.LatLng(lat, lon);
          res(coordinate);
        });
      } else {
        rej(new Error('현재 위치를 불러올 수 없습니다.'));
      }
    });
  };

  const searchPlaces = async () => {
    const ps = new kakao.maps.services.Places();
    const currentCoordinate = await getCurrentCoordinate();
    var options = {
      location: currentCoordinate,
      radius: 5000,
    };
    ps.keywordSearch(`${keyword}`, searchCallback, options);
  };

  const searchCallback = (data, status, _pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      let markers = [];
      for (var i = 0; i < data.length; i++) {
        markers.push({
          position: {
            lat: data[i].y,
            lng: data[i].x,
          },
          content: data[i].place_name,
        });
      }
      setMarkers(markers);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initMap = async () => {
      try {
        const currentCoordinate = await getCurrentCoordinate();
        setState({
          center: {
            lat: currentCoordinate.getLat(),
            lng: currentCoordinate.getLng(),
          },
        });
        await searchPlaces();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    initMap();
  }, []);

  if (isLoading) {
    return <Loading />; // Or replace with a loading spinner
  } else {
    return (
      <MatchingMapLayout>
        <Map
          center={state.center}
          style={{
            width: '50%',
            height: '450px',
            borderRadius: '1rem',
          }}
          level={5}
        >
          {markers.map((marker) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && (
                <div style={{ color: '#000' }}>{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </Map>
      </MatchingMapLayout>
    );
  }
};

export default MatchingMap;

const MatchingMapLayout = styled.div`
  margin: 1rem 2rem;
`;

import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { ItemProps, MarkerType } from '../../types/matching';
import Loading from '../Loading';
import styled from 'styled-components';

interface Props {
  keyword: string;
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

const MatchingMap = ({ keyword, setItems }: Props) => {
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
      let items = [];
      for (var i = 0; i < data.length; i++) {
        markers.push({
          position: {
            lat: data[i].y,
            lng: data[i].x,
          },
          content: data[i].place_name,
        });
        items.push({
          placeName: data[i].place_name,
          address: data[i].road_address_name,
          url: data[i].place_url,
        });
      }
      setMarkers(markers);
      setItems(items);
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

  return (
    <MatchingMapLayout>
      <Map
        center={state.center}
        style={{
          width: '100%',
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
              <Content style={{ color: '#000' }}>{marker.content}</Content>
            )}
          </MapMarker>
        ))}
      </Map>
    </MatchingMapLayout>
  );
};

export default MatchingMap;

const MatchingMapLayout = styled.div`
  width: 45%;
  margin: 1rem 2rem;
`;

const Content = styled.div`
  padding-left: 0.4rem;
`;

import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { ItemProps, MarkerType } from '../../types/matching';
import Loading from '../Loading';
import styled from 'styled-components';

interface Props {
  keyword: string;
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

const MatchingMap = ({ keyword, items, setItems }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState({
    center: {
      lat: 37.3415686,
      lng: 126.7330024,
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

  const searchPlaces = async (currentCoordinate: kakao.maps.LatLng) => {
    const ps = new kakao.maps.services.Places();
    var options = {
      location: currentCoordinate,
      radius: 5000,
    };
    ps.keywordSearch(`${keyword}`, searchCallback, options);
  };

  const searchCallback = (data, status, _pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      const marker = data.map((item) => ({
        position: {
          lat: item.y,
          lng: item.x,
        },
        content: item.place_name,
      }));
      const item = data.map((item) => ({
        placeName: item.place_name,
        address: item.road_address_name,
        url: item.place_url,
      }));
      setMarkers(marker);
      setItems(item);
      setIsLoading(false);
    }
  };

  // 위도와 경도 오차범위 2로 설정
  const cacheKey = `matchingMapCache_${
    Math.floor(state.center.lat * 100) / 100
  }_${Math.floor(state.center.lng * 100) / 100}_${keyword}`;

  useEffect(() => {
    const initMap = async () => {
      try {
        const cachedData = localStorage.getItem(cacheKey);

        if (!cachedData) {
          // 캐시된 데이터가 없는 경우
          const currentCoordinate = await getCurrentCoordinate();
          setState({
            center: {
              lat: currentCoordinate.getLat(),
              lng: currentCoordinate.getLng(),
            },
          });
          await searchPlaces(currentCoordinate);
        } else {
          // 캐시된 데이터가 있는 경우
          const { cachedMarkers, cachedItems } = JSON.parse(cachedData);
          if (cachedMarkers.length === 0 && cachedItems.length === 0) {
            // 캐시된 데이터가 비어있는 경우
            const currentCoordinate = await getCurrentCoordinate();
            setState({
              center: {
                lat: currentCoordinate.getLat(),
                lng: currentCoordinate.getLng(),
              },
            });
            await searchPlaces(currentCoordinate);
          } else {
            // 캐시된 데이터를 사용하는 경우
            setMarkers(cachedMarkers);
            setItems(cachedItems);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    initMap();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const cachedData = JSON.stringify({
        cachedMarkers: markers,
        cachedItems: items,
      });
      localStorage.setItem(cacheKey, cachedData);
    }
  }, [markers, items]);

  return (
    <MatchingMapLayout>
      <Map
        center={state.center}
        style={{
          width: '100%',
          height: '450px',
          borderRadius: '1rem',
        }}
        level={4}
      >
        {markers &&
          markers.map((marker) => (
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

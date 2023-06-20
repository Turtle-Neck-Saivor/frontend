export interface MarkerType {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
}

export interface ItemProps {
  placeName: string;
  address: string;
  url: string;
}

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from "./Map.module.scss";
import { useContext } from "react";
import { CarsContext } from "../utils/context/CarsContext";
import { LatLngTuple } from "leaflet";

function Map() {
  const mapPosition: number[] = [59.939332, 30.315147];
  const centerPosition: LatLngTuple = [mapPosition[0], mapPosition[1]];

  const { carsState } = useContext(CarsContext)!;

  return (
    <div className={styles.container}>
      <h2>Расположение автомобилей на карте</h2>
      <div className={styles.mapContainer}>
        <MapContainer
          center={centerPosition}
          zoom={13}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {carsState.map((car) => (
            <Marker key={car.id} position={[car.latitude, car.longitude]}>
              <Popup>{`${car.name} ${car.model}`}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;

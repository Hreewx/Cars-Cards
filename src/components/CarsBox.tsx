import { ChangeEvent, useContext, useEffect, useState } from "react";
import { CarsContext } from "../utils/context/CarsContext";

import Select from "../ui/Select";
import VehicleCard from "./VehicleCard";

import styles from "./CarsBox.module.scss";

export interface Car {
  color: string;
  id: number;
  latitude: number;
  longitude: number;
  model: string;
  name: string;
  year: number;
  price: number;
}

interface CarBoxProps {
  cars: Car[];
}

type SortOption = "priceAsc" | "priceDesc" | "yearAsc" | "yearDesc";
type HandleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => void;

const CarsBox: React.FC<CarBoxProps> = ({ cars }) => {
  const [sortOption, setSortOption] = useState<SortOption>("priceAsc");
  const { carsState, setCarsState } = useContext(CarsContext)!;

  useEffect(() => {
    setCarsState(cars);
  }, [cars, setCarsState]);

  const handleSelectChange: HandleSelectChange = (e) => {
    setSortOption(e.target.value as SortOption);
  };

  function handleDeleteVehicle(id: number) {
    setCarsState(carsState.filter((car: Car) => car.id !== id));
  }

  function handleSaveVehicle(updatedCar: Car) {
    setCarsState(
      carsState.map((car: Car) => (car.id === updatedCar.id ? updatedCar : car))
    );
  }

  const sortedCars = carsState.sort((a, b) => {
    switch (sortOption) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "yearAsc":
        return a.year - b.year;
      case "yearDesc":
        return b.year - a.year;
      default:
        return 0;
    }
  });

  return (
    <div className={styles.container}>
      <Select
        sortOption={sortOption}
        onHandleSelectChange={handleSelectChange}
      />
      <div className={styles.cardsBox}>
        {sortedCars.map((car: Car) => (
          <VehicleCard
            car={car}
            key={car.id}
            onHandleDeleteVehicle={handleDeleteVehicle}
            onHandleSaveVehicle={handleSaveVehicle}
          />
        ))}
      </div>
    </div>
  );
};

export default CarsBox;

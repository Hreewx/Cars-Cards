import React, { useState } from "react";
import { Car } from "./CarsBox";

import Button from "../ui/Button";

import styles from "./VehicleCard.module.scss";

type VehicleCardProps = {
  car: Car;
  onHandleDeleteVehicle: (id: number) => void;
  onHandleSaveVehicle: (car: Car) => void;
};

function VehicleCard({
  car,
  onHandleDeleteVehicle,
  onHandleSaveVehicle,
}: VehicleCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCar, setIsEditedCar] = useState(car);
  const { price, name, model, year, id, color } = car;

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setIsEditedCar({
      ...editedCar,
      [name]: name === "price" ? Number(value) : value,
    });
  }

  function handleSaveClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onHandleSaveVehicle(editedCar);
    setIsEditing(false);
  }

  function handleCancelClick() {
    setIsEditing(false);
    setIsEditedCar(editedCar);
  }

  return (
    <div className={styles.card}>
      {isEditing ? (
        <>
          <form className={styles.editForm} onSubmit={handleSaveClick}>
            <div className={styles.formElement}>
              <label>Марка</label>
              <input
                type="text"
                name="name"
                value={editedCar.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formElement}>
              <label>Модель</label>
              <input
                type="text"
                name="model"
                value={editedCar.model}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formElement}>
              <label>Цена</label>
              <input
                type="number"
                name="price"
                value={editedCar.price}
                onChange={handleChange}
              />
            </div>

            <div className={styles.buttonsContainer}>
              <Button type="submit">Сохранить</Button>
              <Button onClick={handleCancelClick}>Отмена</Button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h2>
            {name} {model}
          </h2>
          <p>
            Цена: <span className={styles.price}>{price} руб.</span>
          </p>
          <p>
            Год выпуска: <span className={styles.year}>{year}</span>
          </p>
          <p>
            Цвет:{" "}
            <span
              style={{
                backgroundColor: color,
                width: "2.5rem",
                height: "1.5rem",
                display: "inline-block",
                border: "1px solid #808080",
              }}
            ></span>
          </p>
          <div className={styles.buttonsContainer}>
            <Button onClick={handleEditClick}>Редактировать</Button>
            <Button onClick={() => onHandleDeleteVehicle(id)}>Удалить</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default VehicleCard;

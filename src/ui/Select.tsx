// import { FaArrowDownLong } from "react-icons/fa6";

import { ChangeEvent } from "react";
import styles from "./Select.module.scss";

interface SortProps {
  sortOption: string;
  onHandleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SortProps> = ({ onHandleSelectChange, sortOption }) => {
  return (
    <>
      <label>Сортировать по: </label>
      <select
        className={styles.select}
        onChange={onHandleSelectChange}
        value={sortOption}
      >
        <option value="priceAsc">Цене по возрастанию</option>
        <option value="priceDesc">Цене по убыванию</option>
        <option value="yearAsc">Году выпуска по возрастанию</option>
        <option value="yearDesc">Году выпуска по убыванию</option>
      </select>
    </>
  );
};

export default Select;

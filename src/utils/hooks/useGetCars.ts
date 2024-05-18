import { useEffect, useState } from "react";

export function useGetCars() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCars() {
      try {
        setIsLoading(true);
        const res = await fetch("https://test.tspb.su/test-task/vehicles");
        if (!res.ok)
          throw new Error("Что-то пошло не так при получении данных");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Машины не найдены");

        setCars(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCars();
  }, []);

  return { cars, isLoading };
}

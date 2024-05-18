import { useGetCars } from "../utils/hooks/useGetCars";
import { CarsProvider } from "../utils/context/CarsContext";

import CarsBox from "../components/CarsBox";
import Header from "../components/Header";
import Main from "../components/Main";
import Map from "../components/Map";
import Spinner from "../ui/Spinner";

import "./styles/index.scss";

function App() {
  const { cars, isLoading } = useGetCars();

  if (isLoading) return <Spinner />;

  return (
    <CarsProvider>
      <Main>
        <Header />
        <CarsBox cars={cars} />
        <Map />
      </Main>
    </CarsProvider>
  );
}

export default App;

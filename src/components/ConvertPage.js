import { useParams } from "react-router-dom";
import TemperatureConverter from "./TemperatureConverter";
import SimpleInterestConverter from "./SimpleInterestConverter";
import LengthConverter from "./LengthConverter";
import EnergyConverter from "./EnergyConverter";
import TimeConverter from "./TimeConverter";
import StorageConverter from "./StorageConverter";

const ConvertPage = () => {
  const { converterType } = useParams();

  const components = {
    temperature: <TemperatureConverter />,
    "simple-interest": <SimpleInterestConverter />,
    length: <LengthConverter />,
    energy: <EnergyConverter />,
    time: <TimeConverter />,
    storage: <StorageConverter />,
  };

  return <div>{components[converterType]}</div>;
};

export default ConvertPage;

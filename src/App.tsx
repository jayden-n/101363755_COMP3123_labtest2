import Forecast from "./components/Forecast";
import Search from "./components/Search";
import { useForecast } from "./hooks/useForecast";

const App: React.FC = (): JSX.Element => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();

  return (
    <main className=" flex h-[100vh] w-full items-center justify-center bg-gradient-to-tr from-sky-400 from-20%">
      {forecast ? (
        <Forecast dataForecast={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;

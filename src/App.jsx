import AppRoutes from "./routes";
import CountryProvider from "./components/context/countryContext";
import "./App.css";

const App = () => {
  return (
    <CountryProvider>
      <AppRoutes />
    </CountryProvider>
  );
};

export default App;

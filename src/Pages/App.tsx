import { FC, useState } from "react";
import reactLogo from "../assets/react.svg";
import "../styles/App.css";
import ApiSample from "../Components/apiSample";
import { ThemeContext } from "../Components/theme-context";
import Layout from "../layout";

const App: FC = () => {
  // Detecting the default theme
  const isBrowserDefaulDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Layout>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <a href="https://vitejs.dev" target="_blank">
                  <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <div className="layour-wrapper">
                <h1>Fetch</h1>

                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
                </div>
                <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

import { StoreProvider } from "easy-peasy";
import React, { FC } from "react";
import { store } from "./Stores";
import "./App.css";

const App: FC = () => {
    return (
        <StoreProvider store={store}>
            <div>
                <h1 className="text-2xl">
                    Mithya Vite TS, Tailwind, Easy-peasy, Sass boilerplate
                </h1>
                <a
                    className="text-sapphire-100"
                    href="https://github.com/mithya-team/vite-ts-template"
                >
                    README
                </a>
            </div>
        </StoreProvider>
    );
};

export default App;

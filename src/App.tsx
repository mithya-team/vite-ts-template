import { StoreProvider } from "easy-peasy";
import React, { type FC } from "react";
import { RouterProvider } from "react-router-dom";
import { store } from "./Stores";
import "./App.css";
import router from "./routeConstants";

const App: FC = () => (
    <StoreProvider store={store}>
        <RouterProvider router={router} />
    </StoreProvider>
);

export default App;

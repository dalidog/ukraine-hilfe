import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// Importing hooks from React for side effects and component state management
import { useEffect, useState } from 'react';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BrowserRouter>
    <App />
</BrowserRouter>);
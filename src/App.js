import * as React from 'react';
import { router } from "./routes.js";
import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
//const defaultTheme = createTheme();

function App() {
  return (
    <div className="App" style={{backgroundColor:'white'}}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <RouterProvider router={router} />
      </SnackbarProvider>

    </div>
  );
}

export default App;

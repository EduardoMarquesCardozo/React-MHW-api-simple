import ReactDOM from "react-dom/client";
import router from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle, Wrapper } from "./styles/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Wrapper>
    <GlobalStyle />
    <RouterProvider router={router} />
  </Wrapper>
);

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistedStore } from "@/features/store";
// import { persistStore } from "redux-persist";
import { Provider, useStore } from "react-redux";
import { wrapper } from "@/features/store";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      {/* <PersistGate loading={<div>loading</div>} persistor={persistedStore()}> */}
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}

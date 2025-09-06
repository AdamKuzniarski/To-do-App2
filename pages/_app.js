import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import GlobalStyle from "@/styles";
import { ThemeProvider } from "@/context/ThemeProvider";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok)
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          return response.json();
        },
      }}
      >
      <SessionProvider session={session}>
        <ThemeProvider>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
      </SessionProvider>
      
    </SWRConfig>
  );
}

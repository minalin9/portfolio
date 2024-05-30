import { Route, Routes } from "react-router-dom";
import Notepad from "./components/notepad/notepad";
import MainLayout from "./components/layout/mainLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import Screen from "./components/screen";
function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false,
          },
        },
      })
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Screen />} />
            <Route path="/project/normal-note" element={<Notepad />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Advice from "./components/Advice";
import Dice from "./components/Dice";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Advice />
    </QueryClientProvider>
  );
}

export default App;

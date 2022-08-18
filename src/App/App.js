import TheCompanyIn from '../TheCompanyIn/TheCompanyIn';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="app">
                <TheCompanyIn />
            </div>
        </QueryClientProvider>
    );
};

export default App;

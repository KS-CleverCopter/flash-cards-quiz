import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from './components/ui/provider';
import { BrowserRouter, Routes, Route } from 'react-router';
import { PageRoutes } from './common.ts';
import { PracticeTests } from './practiceTests/PracticeTests.tsx';
import { FlashCards } from './flashCards/FlashCards.tsx';
import Home from './home/home.tsx';
import { Dashboard } from './dashboard/Dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Home>
          <Routes>
            <Route path="*" element={<Dashboard />} />
            <Route path={PageRoutes.FlashCards} element={<FlashCards />} />
            <Route
              path={PageRoutes.PracticeTests}
              element={<PracticeTests />}
            />
          </Routes>
        </Home>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

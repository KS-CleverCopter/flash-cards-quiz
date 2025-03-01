import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from './components/ui/provider';
import { BrowserRouter, Routes, Route } from 'react-router';
import { PageRoutes } from './common.ts';
import { FlashCards } from './flashCards/FlashCards.tsx';
import Home from './home/home.tsx';
import { Dashboard } from './dashboard/Dashboard.tsx';
import { PracticeCards } from './practiceTests/PracticeCards.tsx';
import { CSPracticeCards } from './cs-practiceTests/cs-practiceCards.tsx';
import { CSFlashCards } from './cs-flashCards/cs-flashCards.tsx';

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
              element={<PracticeCards />}
            />
            <Route
              path={PageRoutes.CSPracticeQuestions}
              element={<CSPracticeCards />}
            />
            <Route path={PageRoutes.CSFlashCards} element={<CSFlashCards />} />
          </Routes>
        </Home>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

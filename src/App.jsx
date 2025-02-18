import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { Calendar } from './App/Calendar';
import { CV } from './App/CV';
import { Blog } from './App/Blog';
import { FAQ } from './App/faq';
import { TechStack } from './App/TechStack';
import { BlogExercises } from './App/Blog/BlogExercises/index';
import BasicCard from './App/MaterialU';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="*" element={<NotFound />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="faq/*" element={<FAQ />} />
          <Route path="techstack/*" element={<TechStack />} />
          <Route path="blog-exercises/*" element={<BlogExercises />} />
          <Route path="material-ui/*" element={<BasicCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

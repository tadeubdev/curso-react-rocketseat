import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeachList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />

      <Route path="/study" component={TeachList} exact />
      <Route path="/give-class" component={TeacherForm} exact />
    </BrowserRouter>
  );
}

export default Routes;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function router() { // Capitalize the function name
  return (
    <Routes>
      <Route index element={<h1>Testing</h1>} />
    </Routes>
  );
}

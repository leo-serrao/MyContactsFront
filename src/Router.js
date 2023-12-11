import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/new" exact element={<NewContact />} />
      <Route path="/edit/:id" exact element={<EditContact />} />
    </Routes>
  );
}

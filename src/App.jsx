import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext.jsx';
import PageLayout from './layouts/PageLayout';
import HomePage from './views/HomePage.jsx';
// import Page1 from './views/Page1.jsx';
// import Page2 from './views/Page2.jsx';

import './assets/scss/styles.scss';


function App() {

  return (
    <div className='App d-flex flex-column h-100'>
      <DataProvider>
        <Routes>
          <Route path='/' element={<PageLayout/>}>
            <Route index element={<HomePage/>}/>
          </Route>
          {/* Subpages */}
          {/*{<Route path='/' element={<PageLayout/>}>
            <Route index/>
            <Route path='pages/page-1' element={<Page1/>}/>
            <Route path='pages/page-2' element={<Page2/>}/>
          </Route>}*/}
          {/*  Add this to public/data.json -- "menu" */}
          {/*{
            "text": "Pages",
            "isEmptyLink": true,
            "hasSubmenu": true,
            "submenu": [
          {
            "text": "Page 1",
            "link": "pages/page-1"
          },
          {
            "text": "Page 2",
            "link": "pages/page-2"
          },
          {
            "text": "Footer - anchor",
            "link": "#footer",
            "isAnchor": true
          }
            ]
          },*/}
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;

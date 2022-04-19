// After
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Link,  HashRouter as Router } from "react-router-dom";
import Button from './button';
import Icon from './icon/icon';
import DialogExample from './dialog/dialog.example';

export default function App() {
    return (
      <div className="App">
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <ul>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
          </li>
          <li>
            <Link to="/dialog">Dialog</Link>
          </li>
        </ul>
        <Routers/>
      </div>
    );
  }

function Routers() {
  return <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/icon" element={<Icon name="wechat"/>} />
  <Route path="/button" element={<Button />} />
  <Route path="/dialog" element={<DialogExample />} />
</Routes>
}

// App.js
function Home() {
    return (
      <>
        home
      </>
    );
  }

const container = document.getElementById('app') as HTMLElement; // 必须确保 container 不是空
createRoot(container).render(<Router><App /></Router>)
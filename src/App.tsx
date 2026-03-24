import { useState, useEffect } from 'react';
import { listen } from '@tauri-apps/api/event';
import './index.css';

function App() {
  const [lastAction, setLastAction] = useState<string | null>(null);

  useEffect(() => {
    // Listen to menu bar events as an example
    const unlistenPhotos = listen('add_photos', () => setLastAction('Add photos & files'));
    const unlistenDrive = listen('add_gdrive', () => setLastAction('Add from Google Drive'));
    const unlistenImage = listen('create_image', () => setLastAction('Create image'));
    const unlistenThink = listen('thinking', () => setLastAction('Thinking'));
    const unlistenDeep = listen('deep_research', () => setLastAction('Deep research'));
    const unlistenShop = listen('shopping_research', () => setLastAction('Shopping research'));

    return () => {
      unlistenPhotos.then(f => f());
      unlistenDrive.then(f => f());
      unlistenImage.then(f => f());
      unlistenThink.then(f => f());
      unlistenDeep.then(f => f());
      unlistenShop.then(f => f());
    };
  }, []);

  return (
    <div className="container">
      <h1>ChatGPT App</h1>
      <p>Welcome to your clean Tauri + React app.</p>
      {lastAction && (
        <p className="action-text">Last Menu Action: <strong>{lastAction}</strong></p>
      )}
    </div>
  );
}

export default App;

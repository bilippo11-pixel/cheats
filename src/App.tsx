import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('configs');
  const [searchTerm, setSearchTerm] = useState('');

  const configsDB = [
    { id: 1, name: 'Enigma HVH', game: 'CS2', desc: 'Najbardziej agresywne ustawienia pod rage / HvH.', file: '/enigma.cfg' },
    { id: 2, name: 'Grim Client', game: 'Minecraft', desc: 'Zoptymalizowany pod bypassy antycheatów.', file: '/grim.zip' },
    { id: 3, name: 'Thunderhack', game: 'Minecraft', desc: 'Agresywny config pod serwery Anarchy.', file: '/thunderhack.zip' },
    { id: 4, name: 'Celestial', game: 'Minecraft', desc: 'Świetne wizualizacje i płynność.', file: '/celestial.zip' },
    { id: 5, name: 'Catlean', game: 'Minecraft', desc: 'Idealny pod popularne mini-games.', file: '/catlean.zip' },
    { id: 6, name: 'Velgarosa', game: 'Minecraft', desc: 'Eksperymentalne moduły dla zaawansowanych.', file: '/velgarosa.zip' },
  ];

  const filteredConfigs = configsDB.filter(cfg => 
    cfg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cfg.game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => setPage('home')}>LOGO</div>
          <ul className="nav-links">
            <li onClick={() => setPage('home')} className={page === 'home' ? 'active' : ''}>Główna</li>
            <li onClick={() => setPage('configs')} className={page === 'configs' ? 'active' : ''}>Configs</li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {page === 'home' ? (
          <div className="hero-section">
            <h1 className="glitch-text">Witaj Graczu</h1>
            <p>Wybierz zakładkę Configs, aby zacząć.</p>
          </div>
        ) : (
          <div className="configs-container animate-in">
            <header className="page-header">
              <h1 className="title-gradient">BAZA CONFIGÓW</h1>
              <div className="search-wrapper">
                <input 
                  type="text" 
                  placeholder="Szukaj (np. CS2...)" 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </header>

            <div className="config-grid">
              {filteredConfigs.map((cfg) => (
                <div key={cfg.id} className="config-card">
                  <div className="badge">{cfg.game}</div>
                  <h3>{cfg.name}</h3>
                  <p>{cfg.desc}</p>
                  <div className="card-footer">
                    <a href={cfg.file} download className="download-button">POBIERZ</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

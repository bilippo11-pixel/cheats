import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('configs');
  const [searchTerm, setSearchTerm] = useState('');

  const configsDB = [
    { id: 1, name: 'Enigma HVH', game: 'CS2', desc: 'Najbardziej agresywne ustawienia pod rage / HvH. Gwarantowana dominacja.', file: '/enigma.cfg' },
    { id: 2, name: 'Grim Client', game: 'Minecraft', desc: 'Zoptymalizowany pod bypassy antycheatów. Idealny pod legit/semi-rage.', file: '/grim.zip' },
    { id: 3, name: 'Thunderhack', game: 'Minecraft', desc: 'Agresywny config pod serwery Anarchy (2b2t) i szybkie PvP.', file: '/thunderhack.zip' },
    { id: 4, name: 'Celestial', game: 'Minecraft', desc: 'Świetne wizualizacje i płynność na słabszych komputerach.', file: '/celestial.zip' },
    { id: 5, name: 'Catlean', game: 'Minecraft', desc: 'Zestaw skryptów idealnie skrojony pod popularne mini-games.', file: '/catlean.zip' },
    { id: 6, name: 'Velgarosa', game: 'Minecraft', desc: 'Eksperymentalne moduły dla zaawansowanych graczy.', file: '/velgarosa.zip' },
  ];

  const filteredConfigs = configsDB.filter(cfg => 
    cfg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cfg.game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Navbar z efektem szkła */}
      <nav className="main-nav">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => setPage('home')}>PROJECT<span>X</span></div>
          <ul className="nav-menu">
            <li onClick={() => setPage('home')} className={page === 'home' ? 'active' : ''}>Główna</li>
            <li onClick={() => setPage('configs')} className={page === 'configs' ? 'active' : ''}>Configs</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </nav>

      <main className="content">
        {page === 'home' ? (
          <div className="hero-section animate-fade">
            <h1 className="hero-title">ELITARNE <span>USTAWIENIA</span></h1>
            <p>Wybierz zakładkę Configs, aby zyskać przewagę.</p>
          </div>
        ) : (
          <div className="configs-wrapper animate-fade">
            <div className="header-flex">
              <h1 className="section-title">BAZA CONFIGÓW</h1>
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Szukaj configu..." 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="search-line"></div>
              </div>
            </div>

            <div className="config-grid">
              {filteredConfigs.map((cfg) => (
                <div key={cfg.id} className="modern-card">
                  <div className="card-glare"></div>
                  <div className="card-header">
                    <span className={`game-tag ${cfg.game.toLowerCase()}`}>{cfg.game}</span>
                  </div>
                  <div className="card-body">
                    <h3>{cfg.name}</h3>
                    <p>{cfg.desc}</p>
                  </div>
                  <div className="card-footer">
                    <a href={cfg.file} download className="btn-download">
                      <span>POBIERZ</span>
                    </a>
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

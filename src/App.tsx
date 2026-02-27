import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('configs');
  const [searchTerm, setSearchTerm] = useState('');

  // Twoja baza plików (zaraz powiesz mi, jakie nowe dodać)
  const configsDB = [
    { id: 1, name: 'Enigma HVH', game: 'CS2', desc: 'Agresywny rage config.', file: 'enigma.cfg' },
    { id: 2, name: 'Grim Client', game: 'Minecraft', desc: 'Legit/Semi-rage settings.', file: 'grim.zip' },
    { id: 3, name: 'Thunderhack', game: 'Minecraft', desc: 'Anarchy server specialist.', file: 'thunderhack.zip' },
    { id: 4, name: 'Celestial', game: 'Minecraft', desc: 'Visuals & Performance.', file: 'celestial.zip' },
    { id: 5, name: 'Catlean', game: 'Minecraft', desc: 'Mini-games optimized.', file: 'catlean.zip' },
    { id: 6, name: 'Velgarosa', game: 'Minecraft', desc: 'Experimental modules.', file: 'velgarosa.zip' },
  ];

  const filteredConfigs = configsDB.filter(cfg => 
    cfg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* GŁÓWNY PANEL STEROWANIA */}
      <header className="top-bar">
        <div className="search-hub">
          <div className="bishop-logo">♝</div>
          
          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="SZUKAJ KONFIGURACJI..." 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <nav className="side-nav">
            <span onClick={() => setPage('home')} className={page === 'home' ? 'active' : ''}>HOME</span>
            <span onClick={() => setPage('configs')} className={page === 'configs' ? 'active' : ''}>CONFIGS</span>
            <span>KONTAKT</span>
          </nav>
        </div>
      </header>

      <main className="content">
        {page === 'home' ? (
          <div className="hero">
            <h1>PROJECT BISHOP</h1>
            <p>Wybierz zakładkę Configs powyżej.</p>
          </div>
        ) : (
          <div className="grid-container">
            <div className="config-grid">
              {filteredConfigs.map((cfg) => (
                <div key={cfg.id} className="config-card">
                  <div className="card-accent"></div>
                  <div className="card-info">
                    <span className="game-label">{cfg.game}</span>
                    <h3>{cfg.name}</h3>
                    <p>{cfg.desc}</p>
                  </div>
                  <a href={`/files/${cfg.file}`} download className="download-btn">
                    POBIERZ
                  </a>
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

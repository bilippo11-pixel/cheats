import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('configs'); // Ustawiłem domyślnie na configs, żebyś od razu widział efekt
  const [searchTerm, setSearchTerm] = useState('');

  // Baza configów - łatwiej zarządzać!
  const configsDB = [
    { id: 1, name: 'Enigma HVH', game: 'CS2', desc: 'Najbardziej agresywne ustawienia pod rage / HvH. Gwarantowana dominacja.', file: '/enigma.cfg' },
    { id: 2, name: 'Grim Client', game: 'Minecraft', desc: 'Zoptymalizowany pod bypassy antycheatów. Idealny pod legit/semi-rage.', file: '/grim.zip' },
    { id: 3, name: 'Thunderhack', game: 'Minecraft', desc: 'Agresywny config pod serwery Anarchy (2b2t) i szybkie PvP.', file: '/thunderhack.zip' },
    { id: 4, name: 'Celestial', game: 'Minecraft', desc: 'Świetne wizualizacje i płynność na słabszych komputerach.', file: '/celestial.zip' },
    { id: 5, name: 'Catlean', game: 'Minecraft', desc: 'Zestaw skryptów idealnie skrojony pod popularne mini-games.', file: '/catlean.zip' },
    { id: 6, name: 'Velgarosa', game: 'Minecraft', desc: 'Eksperymentalne moduły dla zaawansowanych graczy.', file: '/velgarosa.zip' },
  ];

  // Filtrowanie configów na podstawie wpisanego tekstu
  const filteredConfigs = configsDB.filter(cfg => 
    cfg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cfg.game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      {/* Pasek Nawigacji */}
      <nav className="glass-nav">
        <div className="logo-box" onClick={() => setPage('home')}>
          <img src="/favicon.png" alt="logo" />
        </div>
        <ul>
          <li onClick={() => setPage('home')} className={page === 'home' ? 'active' : ''}>Główna</li>
          <li onClick={() => setPage('home')}>Cennik</li>
          <li onClick={() => setPage('configs')} className={page === 'configs' ? 'active' : ''}>Configs</li>
        </ul>
      </nav>

      {page === 'home' ? (
        <div className="hero">
          <h1 className="glitch-title">Wkrótce...</h1>
          <p>Wróć do zakładki Configs!</p>
        </div>
      ) : (
        <div className="configs-page animate-fade-in">
          
          <div className="configs-header">
            <h1 className="red-title">BAZA CONFIGÓW</h1>
            <p className="subtitle">Pobierz najlepsze ustawienia i zdominuj serwer.</p>
            
            {/* Nowa funkcjonalność: Wyszukiwarka */}
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Szukaj configu (np. CS2, Grim...)" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="config-grid">
            {filteredConfigs.length > 0 ? (
              filteredConfigs.map((cfg) => (
                <div key={cfg.id} className="config-card premium-hover">
                  <div className="card-top">
                    <span className={`game-badge ${cfg.game.toLowerCase()}`}>{cfg.game}</span>
                    <h3>{cfg.name}</h3>
                    <p>{cfg.desc}</p>
                  </div>
                  <a href={cfg.file} download className="red-btn animated-btn">
                    <span>POBIERZ</span>
                  </a>
                </div>
              ))
            ) : (
              <p className="no-results">Nie znaleziono configu: "{searchTerm}"</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

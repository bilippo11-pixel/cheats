import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home'); // 'home' to cennik, 'configs' to nowa strona

  return (
    <div className="main-container">
      <nav>
        <div className="logo-box" onClick={() => setPage('home')} style={{cursor: 'pointer'}}>
          <img src="/favicon.png" alt="logo" />
        </div>
        <ul>
          <li onClick={() => setPage('home')}>Strona Główna</li>
          <li onClick={() => setPage('home')}>Cennik</li>
          <li onClick={() => setPage('configs')}>Configs</li>
          <li>Kontakt</li>
        </ul>
      </nav>

      {page === 'home' ? (
        <>
          <div className="hero">
            <h1>Przeglądaj produkty!</h1>
            <p>Wybierz pakiet Nolag idealny dla siebie.</p>
          </div>
          <div className="cards-container">
            {/* Tutaj zostają Twoje 3 karty cennika (Normal, Pro, Extra) */}
          </div>
        </>
      ) : (
        <div className="configs-page">
          <h1 className="red-title">CONFIGS</h1>
          
          <div className="section">
            <h2 className="red-subtitle">CONFIGS CS2</h2>
            <div className="config-grid">
              <div className="config-card red-theme">
                <h3>Enigma HVH Config</h3>
                <p>Ustawienia pod rage / HvH.</p>
                <a href="#" className="red-btn">Pobierz</a>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="red-subtitle">MINECRAFT CONFIGS</h2>
            <div className="config-grid">
              {['Grim Client', 'Thunderhack', 'Celestial', 'Catlean', 'Velgarosa'].map((name) => (
                <div key={name} className="config-card red-theme">
                  <h3>{name}</h3>
                  <p>Najlepszy config pod {name}.</p>
                  <a href="#" className="red-btn">Pobierz</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

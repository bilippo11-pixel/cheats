import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="main-container">
      <nav>
        <div className="logo-box" onClick={() => setPage('home')}>
          <img src="/favicon.png" alt="logo" />
        </div>
        <ul>
          <li onClick={() => setPage('home')}>Główna</li>
          <li onClick={() => setPage('home')}>Cennik</li>
          <li onClick={() => setPage('configs')}>Configs</li>
          <li>Kontakt</li>
        </ul>
      </nav>

      {page === 'home' ? (
        <>
          <div className="hero">
            <h1>Sprawdź ofertę!</h1>
            <p>Wybierz pakiet idealnie dopasowany do Twoich potrzeb.</p>
          </div>
          <div className="cards-container">
            <div className="card">
              <h2>Pakiet Basic</h2>
              <div className="price">20 zł</div>
              <ul className="features">
                <li>Pełny dostęp</li>
                <li>Aktualizacje</li>
                <li>Wsparcie 24/7</li>
              </ul>
              <button className="buy-btn">Wybierz</button>
            </div>
            <div className="card">
              <h2>Pakiet Pro</h2>
              <div className="price">50 zł</div>
              <ul className="features">
                <li>Wszystko z Basic</li>
                <li>Priorytetowy dostęp</li>
                <li>Szybsze serwery</li>
              </ul>
              <button className="buy-btn">Wybierz</button>
            </div>
            <div className="card">
              <h2>Pakiet Ultimate</h2>
              <div className="price">100 zł</div>
              <ul className="features">
                <li>Wszystko z Pro</li>
                <li>Dostęp Beta</li>
                <li>Unikalne funkcje</li>
              </ul>
              <button className="buy-btn">Wybierz</button>
            </div>
          </div>
        </>
      ) : (
        <div className="configs-page">
          <h1 className="red-title">SETTINGS & CONFIGS</h1>
          
          <div className="section">
            <h2 className="red-subtitle">CS2 SETTINGS</h2>
            <div className="config-grid">
              <div className="config-card red-theme">
                <h3>Enigma HVH</h3>
                <p>Ustawienia pod najwyższą precyzję.</p>
                <a href="/enigma.cfg" download className="red-btn">Pobierz</a>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="red-subtitle">MINECRAFT SETTINGS</h2>
            <div className="config-grid">
              {['Grim', 'Thunderhack', 'Celestial', 'Catlean', 'Velgarosa'].map((name) => (
                <div key={name} className="config-card red-theme">
                  <h3>{name}</h3>
                  <p>Zoptymalizowany pod {name}.</p>
                  <a href={`/${name.toLowerCase()}.zip`} download className="red-btn">Pobierz</a>
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

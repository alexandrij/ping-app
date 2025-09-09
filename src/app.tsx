import './app.css'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-content">
          <h1 className="app__title">Ping App</h1>
        </div>
      </header>

      <main className="app__main" role="main">
        <section className="app__section">
          <h2 className="app__section-title">Статус</h2>
          <p className="app__text">
            App работает оффлайн: установите на устройство через меню браузера.
          </p>
        </section>
      </main>

    </div>
  )
}

export default App

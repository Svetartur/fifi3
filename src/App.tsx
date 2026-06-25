import { ProductList } from './features/product-list'

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
    padding: '40px 20px',
    boxSizing: 'border-box' as const,
    gap: '40px',
  };

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '12px',
    textAlign: 'center' as const,
    borderBottom: '1px solid var(--border)',
    paddingBottom: '24px',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ margin: '0', fontSize: '38px', lineHeight: '1.2' }}>
          Каталог товарів за архітектурою FSD
        </h1>
      </header>

      <main style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ProductList />
      </main>

      <footer style={{
        marginTop: 'auto',
        paddingTop: '40px',
        borderTop: '1px solid var(--border)',
        width: '100%',
        color: 'var(--text)',
        fontSize: '14px'
      }}>
        <p>© 2026. Всі права захищено.</p>
      </footer>
    </div>
  );
}

export default App;

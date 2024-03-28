import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Main from './components/layout/main';
function App() {
  return (
    <div className="App">
      <main class="home-section main">
        <Header/>
        <section class="section-main">
          <Main/>
        </section>
        <Footer/>
        </main>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './components/myNavbar';
import Footer from './components/myFooter';
import Welcome from './components/Welcome';
import Books from './components/AllTheBooks';
import BookList from './components/BookList';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
         <BasicExample />
         <Welcome />
      </header>
      <main>
        <BookList />
        {/* <Books /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

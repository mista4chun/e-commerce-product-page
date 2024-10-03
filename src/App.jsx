import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import ShowCase from "./components/ShowCase";

function App() {
  return (
    <>
      <CartProvider>
        <header className="mx-auto max-w-6xl">
          <Header />
        </header>
        <main className="mx-auto max-w-5xl overflow-scroll md:overflow-hidden">
          <ShowCase />
        </main>
      </CartProvider>
    </>
  );
}

export default App;

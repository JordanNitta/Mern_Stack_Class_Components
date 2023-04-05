import NameCard from "./components/NameCard";

function App() {
  return (
    <div>
      <NameCard firstName='Doe' lastName='Jane' age={45} hairColor='Black'/>
      <NameCard firstName='Smith' lastName='John' age={88} hairColor='Brown'/>
      <NameCard firstName='Fillmore' lastName='Millard' age={50} hairColor='Brown'/>
      <NameCard firstName='Smith' lastName='Maria' age={62} hairColor='Brown'/>
    </div>
  );
}

export default App;

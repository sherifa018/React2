import CardList from "./CardList";

function App() {
  const cards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Card 1",
      description: "This is the description for card 1.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 2",
      description: "This is the description for card 2.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 3",
      description: "This is the description for card 3.",
    },
  ];
  return (
    <div>
      <CardList cards={cards} />
    </div>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

type Joke = {
  id: string;
  content: string;
};

function App() {
  const [jokes, setjokes] = useState<Joke[]>([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => setjokes(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1>DB Connect</h1>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;

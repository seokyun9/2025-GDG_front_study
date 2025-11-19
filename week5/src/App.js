import { useState, useEffect } from "react";
import EmptyData from "./EmptyData";
import Commemts from "./Commemts";
function App() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, []);
  if (comments.length === 0) {
    return (
      <div>
        <EmptyData />
      </div>
    );
  }
  return (
    <div>
      {comments.map((comments) => (
        <Commemts key={comments.id} id={comments.id} name={comments.name} />
      ))}
    </div>
  );
}
export default App;

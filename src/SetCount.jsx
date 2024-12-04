import { useState } from "react";

export default function MyKakasButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Cliked {count} times
    </button>
  );
}
export default function YourButton () {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button 
    onClick={handleClick}>
      Click Me
    </button>
  );
}
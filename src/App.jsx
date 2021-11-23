import './App.scss';

function BookMarkForm() {
  return (
    <>
      <input type="text" name="name" /> <br />
      <input type="text" name="url" />
    </>
  );
}

const App = () => (
  <>
    <BookMarkForm />
  </>
);

export default App;

import Title from "./components/Title/Title";
import Description from "./components/Description/Description";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

const App = () => {
  return (
    <div className="App">
      <Title textTitle="Tip Calculator" className="title" />
      <Description descriptionText="by Nahuel Gómez" className="description" />
      <Form />
      <Result />
    </div>
  );
};

export default App;

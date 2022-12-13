// components
import MyForm from "./MyForm";

// function
import showResults from "../func/showResults";

const MainForm = () => {
  return (
    <>
      <MyForm onSubmit={showResults} />
    </>
  )
}

export default MainForm;

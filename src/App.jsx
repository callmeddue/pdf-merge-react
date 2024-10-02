import AllPdf from "./components/pdfExamplePage/allPdf";
import Pdf1 from "./components/pdfExamplePage/pdf1";
import Pdf2 from "./components/pdfExamplePage/pdf2";
function App() {
  return (
    <div className="flex gap-5">
      <Pdf1 />
      <Pdf2 />
      <AllPdf />
    </div>
  );
}

export default App;

import Calendar from "../../components/Calendar";
import Sidebar from "../layout/Sidebar";
import ProgramingForm from "./FormProgramming";

export default function ProgramingPage() {
  return (
    <div className="row w-100 h-100">
      <Sidebar></Sidebar>
      <main className="col-10 justify-content-center align-items-center">
        <div className="row p-2 ">
          <fieldset className="col-sm-12 col-md-4 ">
            <legend>Formulario</legend>
            <ProgramingForm />
          </fieldset>
          <fieldset className="col-sm-12 col-md-8">
            <legend>Agenda</legend>
            <Calendar />
          </fieldset>
        </div>
      </main>
    </div>
  );
}

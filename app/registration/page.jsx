"use client";
import { useState } from "react";

const RegistrationPage = () => {
  const [spanishForm, setSpanishForm] = useState(false);

  return (
    <div className="p-4">
      {spanishForm ? (
        <h1 className="text-2xl font-bold mb-4">
          Página de Registro: Debe completarse en una computadora de escritorio.
        </h1>
      ) : (
        <h1 className="text-2xl font-bold mb-4">
          Registration Page: Should be filled out on desktop.
        </h1>
      )}

      <button
        className="px-4 py-2 bg-blue text-white rounded mb-4"
        onClick={() => setSpanishForm((prev) => !prev)}
      >
        {spanishForm ? "Show English Form" : "Forma Español"}
      </button>
      {!spanishForm && (
        <iframe
          src="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCfz2wGBoikxpx4kmx0F5GwW38pGQlCiynIsSszNBrcNg7H1XDIqBwRS8bAvHfm57c*&hosted=false"
          width="100%"
          height="100%"
          className="border-0 overflow-hidden min-h-[500px] min-w-[600px]"
        ></iframe>
      )}

      {spanishForm && (
        <iframe
          src="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAizQazdhBMN5khHDOBq_Ey50UUD0r4dk_KYWO2RUlHxJ1xF8b6QEBPdYfeuC43-l4*&hosted=false"
          width="100%"
          height="100%"
          className="border-0 overflow-hidden min-h-[500px] min-w-[600px]"
        ></iframe>
      )}
    </div>
  );
};

export default RegistrationPage;

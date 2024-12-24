import React from "react";
import Link from "next/link";

const  AdobeForm: React.FC =()=> {
return (
        <Link
            href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBR4aMpwbsEPLpH_BIvj-K479Ua_6OZ7ogtVprZlFo7obWtuVRTk497eF3fj5yQinw*"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue text-white rounded-lg shadow-md hover:bg-blue transition duration-300"
        >
            Sign Up
        </Link>
);
}
export default AdobeForm;
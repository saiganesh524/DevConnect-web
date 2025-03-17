import React from "react";

const Contact = () => {
  return (
    <div className="w-1/2 m-auto">
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h1 className="text-center font-bold text-3xl">Contact Us</h1>
            <h2 className="font-bold">
              You may contact us using the information below:
            </h2>
            <ul className="mx-12 list-disc">
              <li>Merchant Legal entity name: SAI GANESH</li>
              <li>E-Mail ID: support@linkdev.info</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

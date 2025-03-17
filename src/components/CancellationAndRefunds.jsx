import React from "react";

const CancellationAndRefunds = () => {
  return (
    <div className="w-1/2 m-auto">
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <h1 className="text-center font-bold text-3xl">
              Cancellation and Refund
            </h1>
            <p>
              SAI GANESH KANDULA believes in helping its customers as far as
              possible, and has therefore a liberal cancellation policy. Under
              this policy:
            </p>
            <ul className="mx-12 list-decimal">
              <li className="leading-8">
                Cancellations will be considered only if the request is made
                within 7 days of placing the order. However, the cancellation
                request may not be entertained if the orders have been
                communicated to the vendors/merchants and they have initiated
                the process of shipping them.
              </li>
              <li className="leading-8">
                SAI GANESH does not accept cancellation requests for perishable
                items like flowers, eatables etc. However, refund/replacement
                can be made if the customer establishes that the quality of
                product delivered is not good.
              </li>
              <li className="leading-8">
                In case of receipt of damaged or defective items please report
                the same to our Customer Service team. The request will,
                however, be entertained once the merchant has checked and
                determined the same at his own end. This should be reported
                within 7 days of receipt of the products.
              </li>
              <li className="leading-8">
                In case you feel that the product received is not as shown on
                the site or as per your expectations, you must bring it to the
                notice of our customer service within 7 days of receiving the
                product. The Customer Service Team after looking into your
                complaint will take an appropriate decision.
              </li>
              <li className="leading-8">
                In case of complaints regarding products that come with a
                warranty from manufacturers, please refer the issue to them.
              </li>
              <li className="leading-8">
                In case of any Refunds approved by the SAI GANESH KANDULA, it’ll
                take 6-8 days for the refund to be processed to the end
                customer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationAndRefunds;

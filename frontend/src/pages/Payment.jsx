import { useEffect, useRef, useState } from "react";

function PayemntPayPal() {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 15.0,
    description: "Show Tal",
  };

  useEffect(() => {
    const script = document.createElement("script");
    const id =
      "AbRmsFEkz2BXSyfE9RQlr-ufYm_egD8lQEamVBNVzb4lSM9qIc5usqRBDTuvnQ53SFxec2sFD9d2ZH9G";
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;

    script.addEventListener("load", () => setLoaded(true));

    document.body.appendChild(script);

    if (loaded) {
      // eslint-disable-next-line no-inner-declarations
      function loadButtonsAndLogicAboutPayment() {
        setTimeout(() => {
          window.paypal
            .Buttons({
              createOrder: (_data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: product.description,
                      amount: {
                        currency_code: "BRL",
                        value: product.price,
                      },
                    },
                  ],
                });
              },
              onApprove: async (_data, actions) => {
                const order = await actions.order.capture();
                setPaid(true);

                console.log(order);
              },
            })
            .render(paypalRef);
        });
      }
      loadButtonsAndLogicAboutPayment();
    }
  });
  return (
    <div className="PayemntPayPal">
      {paid ? (
        <div>
          <h1>Parabén, Compra realizada com Sucesso</h1>
        </div>
      ) : (
        <>
          <h1>
            {product.description} por R${product.price}
          </h1>
          <div ref={(v) => (paypalRef = v)} />
        </>
      )}
    </div>
  );
}
export default PayemntPayPal;

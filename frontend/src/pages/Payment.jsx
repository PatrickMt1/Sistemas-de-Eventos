import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useCartStore } from "../store";
import { calculateEventAmount } from "../ultils/calculateEventAmount";
import { formatPrice } from "../ultils/formatPrice";

function PayemntPayPal() {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { cart } = useCartStore();
  const total = calculateEventAmount(cart);
  let paypalRef = useRef();
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
                      amount: {
                        currency_code: "BRL",
                        value: total,
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
    <Box m="4" p="4" borderRadius="md">
      {paid ? (
        <Text>Parabéns, Compra realizada com Sucesso</Text>
      ) : (
        <Text fontWeight="bold" fontSize="x-large" textAlign="center">
          Valor total: {formatPrice(total)}
        </Text>
      )}
      <Box
        pt="10"
        pl="250"
        color="white"
        bg="gray"
        border="1px solid"
        borderRadius="md"
        ref={(v) => (paypalRef = v)}
      ></Box>
    </Box>
  );
}
export default PayemntPayPal;

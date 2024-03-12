import { create } from "zustand";

const useResponse = create((set) => ({
  resp: {},
  setResponse: (eta, ordernummer) =>
    set(() => ({
      resp: {
        orderInProgress: true,
        eta: eta,
        ordernummer: ordernummer,
      },
    })),
}));

export default useResponse;

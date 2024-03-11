import { create } from "zustand";

const useResponse = create((set) => ({
  resp: {},
  // Set eta and ordernummer directly within resp
  setResponse: (eta, ordernummer) =>
    set(() => ({
      resp: {
        // Directly setting eta and ordernummer in resp
        orderInProgress: true,
        eta: eta,
        ordernummer: ordernummer,
      },
    })),
}));

export default useResponse;

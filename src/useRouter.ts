import { useContext } from "react";
import RouterContext from "./RouterContext";

export default function useRouter() {
  if (useContext === undefined) {
    throw new Error("React >= 16.7 required");
  }

  return useContext(RouterContext);
}

import { fetchChainDataById } from "./chains/chains";

export { useChainData } from "./chains/useChainData";

fetchChainDataById(1).then((data) => {
  console.log(data);
});

import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";

export const nftDropAddress = "0x9e1DB3930b5D24a424D3a3db2e138892790e65CB";

export const nftDropContract = getContract({
  client: client,
  chain: sepolia,
  address: nftDropAddress,
});

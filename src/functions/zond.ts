import { zondConfig } from "@configuration/zondConfig";
import { Web3 } from "@theqrl/web3";
import { getAllAccounts } from "./getAllAccounts";
const zondHttpProvider = new Web3.providers.HttpProvider(
  zondConfig.zondHttpProvider,
);
const web3 = new Web3(zondHttpProvider);
const zondInstance = web3.zond;

export const fetchZondConnection = async () => {
  return await zondInstance.net.isListening();
};

export const fetchAccounts = async () => {
  return await getAllAccounts(zondInstance);
};

import { Client, Account } from "appwrite";

export const appWriteConfig = {
  productId: "6551b4f31e16d25402d0",
  url: "https://cloud.appwrite.io/v1",
};

export const client = new Client();

client.setProject(appWriteConfig.productId);
client.setEndpoint(appWriteConfig.url);
//  accounts
export const  account = new Account(client)
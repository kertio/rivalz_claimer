import { ethers } from "ethers";
import { readFileSync } from "fs";

export const getKeysFromFile = (filename: string): string[] => {
  const fs = readFileSync(filename, 'utf-8');
  
  // return fs.trim().split('\r\n');
  return fs.trim().split('\n');
}

export const getSignature = async (messageToSign: string, privKey: string): Promise<string> => {  
  let privKeyWithPrefix = '0x';

  if (!privKey.startsWith('0x')) {
    privKeyWithPrefix += privKey;
  } else {
    privKeyWithPrefix = privKey;
  }

  const wallet = new ethers.Wallet(privKey);
  const signature = await wallet.signMessage(messageToSign);

  return signature;
}


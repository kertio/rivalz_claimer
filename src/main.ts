import { resolve } from 'path';
import { fetchAmountRewards, fetchBearer } from './rivalz_core';
import { getKeysFromFile, getSignature } from './helpers';
import { assert } from 'console';
import { ethers } from 'ethers';

const main = async () => {
	const keys = getKeysFromFile(resolve(__dirname, '../', 'pk.txt'));

	let total = 0;
	for (let key of keys) {
		const message = 'Welcome to Rome';
		const signature = await getSignature(message, key);
	
		const bearer = await fetchBearer({
			message,
			signature
		})
	
		/* TODO  continue */
		if (!bearer) {
			console.error("Bearer token is missing!");
			return; 
		}
	
		const amount = await fetchAmountRewards(bearer);
	
		total += amount;

		const regex = new RegExp(`^(.{${6}}).*(.{${4}})$`);
		const mkey = key.replace(regex, `$1...$2`);
		console.log(`private key: ${mkey}, address: ${(new ethers.Wallet(key).address)}, amount: ${amount} RIZ`);
	}
	
	console.log(`total rewards: ${total} RIZ`);

}

main()
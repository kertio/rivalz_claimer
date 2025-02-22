import { assert } from 'console';

export type TRequestBearer = {
	message?: string;
	signature: string;
}

export type TResponseBearer = {
	message?: string;
	token: string;
}

export function isBearerResponse(resp: { token: string }): resp is TResponseBearer  {
	return ('token' in resp);
}
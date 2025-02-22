import { Numeric } from 'ethers';
import { isBearerResponse, TRequestBearer, TResponseBearer } from "./types";

export const fetchBearer = async (
  message: TRequestBearer
): Promise<string | null> => {
  let response: TResponseBearer = {
    token: "",
  };

  try {
    const result = await fetch(
      "https://rome-api.rivalz.ai/api/v1/auth/sign-in",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }
    );

    if (!result.ok) {
      throw new Error("Fetch bearer error");
    }

    response = await result.json();

    if (!isBearerResponse(response))
      throw new Error("Response does not contain a token");

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return null;
    }
  }

  return "Bearer " + response.token;
};

export const fetchAmountRewards = async (bearer: string) => {
  let amount = 0;

  try {
    const result = await fetch(
      'https://rome-api-v2.rivalz.ai/api/v2/reward/rivalz-testnet',
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": bearer
        }
      }
    )

    if (!result.ok) {
      throw new Error("Fetch data error");
    }

    const { data } = await result.json();

    const total = data.map((item: { amount: number; }) => item.amount);
    amount = total.reduce((sum: number, curr: number) => sum + curr, 0);
  } catch (error) {
    /* TODO */
  }

  return amount;
}
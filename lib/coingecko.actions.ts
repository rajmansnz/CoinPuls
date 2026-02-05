'use server';

import qs from 'query-string';

const BASE_URL = process.env.COINGECKO_BASE_URL || "https://api.coingecko.com/api/v3";
const API_KEY = process.env.COINGECKO_API_KEY;

export async function fetcher<T>(
    endpoint: string,
    params?: QueryParams,
    revalidate = 60,
): Promise<T> {
    const url = qs.stringifyUrl({
        url: `${BASE_URL}/${endpoint}`,
        query: params,
    }, { skipEmptyString: true, skipNull: true });

    const headers: Record<string, string> = {
        Accept: "application/json",
    };

    if (API_KEY) {
        headers["x-cg-demo-api-key"] = API_KEY;
    }

    const response = await fetch(url, {
        headers,
        next: { revalidate }
    });

    if (!response.ok) {
        const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));

        throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText}`);
    }

    return response.json();
}
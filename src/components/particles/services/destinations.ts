import api from "../api";
import { AxiosError, AxiosResponse } from 'axios';
import { PaginatedResponse } from "../interfaces/base";
import { Destiny } from "../interfaces/destiny";

export const getTouristicDestinationResults = async (page: number) : Promise<AxiosResponse<PaginatedResponse<Destiny>>> => {
    try {
        const endpoint = `v1/touristic-destinations/?page=${page}`;
        const response = await api.get<PaginatedResponse<Destiny>>(endpoint);
        return response;
    } catch (error: AxiosError | any) {
        if (error.isAxiosError && error.response) {
            return error.response as AxiosResponse<PaginatedResponse<Destiny>>;
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}
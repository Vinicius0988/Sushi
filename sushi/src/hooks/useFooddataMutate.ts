import axios from "axios"
import type { AxiosPromise } from "axios";
import type { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/food";

const fetchdata = async (): AxiosPromise<FoodData[]> => {
    const response = await axios.post(API_URL)
    return response;

}

export function useFoodData() {
    const query = useQuery({
        queryFn: fetchdata,
        queryKey: ['foodData'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data

    }
}
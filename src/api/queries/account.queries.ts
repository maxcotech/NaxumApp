import { useMutation, UseMutationOptions } from "react-query";
import { AuthData, LoginData } from "../../config/data_types/account_types";
import { GenericDataResponse, HttpDataResponse } from "../../config/data_types/general.types";
import { login } from "../services/account.services";

export const useLogin = (options: UseMutationOptions<GenericDataResponse<AuthData>,HttpDataResponse,LoginData>) => {
    return useMutation<GenericDataResponse<AuthData>,HttpDataResponse,LoginData>(login,options);
}

import { useMutation, UseMutationOptions } from "react-query";
import { AccountFormData, AuthData, LoginData } from "../../config/data_types/account_types";
import { GenericDataResponse, HttpDataResponse } from "../../config/data_types/general.types";
import { login, updateAccount } from "../services/account.services";

export const useLogin = (options: UseMutationOptions<GenericDataResponse<AuthData>,HttpDataResponse,LoginData>) => {
    return useMutation<GenericDataResponse<AuthData>,HttpDataResponse,LoginData>(login,options);
}

export const useUpdateAccount = (options: UseMutationOptions<HttpDataResponse,HttpDataResponse,Partial<AccountFormData>>) => {
    return useMutation<HttpDataResponse,HttpDataResponse,Partial<AccountFormData>>(updateAccount,options);
}

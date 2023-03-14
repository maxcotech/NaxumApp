import client from "../../config/client.config"
import { LoginData } from "../../config/data_types/account_types"

export const login =  async (data: LoginData): Promise<any> => {
    return client.post("accounts/login", data);
}
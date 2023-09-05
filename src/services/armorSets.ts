import { AxiosResponse } from "axios";
import mhwApi from "../utils/api";
import { ArmorSet } from "../models/ArmorSet";
import { APIResponse } from "../models/APIresponse";

const listArmorSets = async (rank: string): Promise<ArmorSet[]> => {
  const url = `armor/sets?q={"rank":"${rank}"}`;
  const allArmorSets: AxiosResponse<APIResponse<ArmorSet[]>> = await mhwApi.get(
    url
  );

  return allArmorSets.data as unknown as ArmorSet[];

  //   https://mhw-db.com/armor/sets?q={"rank":"low"}
};

export { listArmorSets };

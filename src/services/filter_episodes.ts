import {repositoryPodcast} from "../repositories/podcasts_repository";
import { FilterPodCasts } from "../models/filter_podcasts";
import { statusCode } from "../utils/status_code";

export const serviceFilterEpisodes = async (podcastname: string | undefined): Promise<FilterPodCasts> => {

let responseFormat:FilterPodCasts = {
  statusCode : 0,
  body: [],
}

const queryString = podcastname?.split("?p=")[1] || "";
const data = await repositoryPodcast(queryString);

responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.Nocontent;

responseFormat.body = data;

return responseFormat;

}
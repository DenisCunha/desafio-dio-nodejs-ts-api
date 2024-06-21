import { repositoryPodcast } from "../repositories/podcasts_repository";
import { FilterPodCasts } from "../models/filter_podcasts";
import { statusCode } from "../utils/status_code";

export const serviceListEpisodes = async () => {

    let responseFormat:FilterPodCasts = {
        statusCode : 0,
        body: [],
    }
      
    const data = await repositoryPodcast();

    responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.Nocontent;

    responseFormat.body = data;

    return responseFormat;
}
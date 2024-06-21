import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list_episodes";
import {serviceFilterEpisodes} from "../services/filter_episodes";
import {FilterPodCasts} from "../models/filter_podcasts";

const header = {'content-type': "application/json"};

export const  getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content: FilterPodCasts  = await serviceListEpisodes();
    response.writeHead(content.statusCode, header);
    response.end(JSON.stringify(content.body));
 };

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content: FilterPodCasts = await serviceFilterEpisodes(request.url);
    response.writeHead(content.statusCode, header);
    response.end(JSON.stringify(content.body));
};

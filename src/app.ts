import * as http from "http";
import {getListEpisodes, getFilterEpisodes} from './controllers/podcats_controller';
import {Routes} from "./routes/routes";
import {httpmethod} from "./utils/http_methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split("?")[0];

    if (request.method === httpmethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(request, response);
    }

    if (request.method === httpmethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    }
}
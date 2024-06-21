import fs from "fs";
import path from "path";
import {PodCastsModel} from "../models/podcasts_model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastname?: string): Promise<PodCastsModel[]> => {

const rowdata = fs.readFileSync(pathData, "utf-8");
let jsonFile = JSON.parse(rowdata);

if (podcastname) {
    jsonFile = jsonFile.filter((podcast: PodCastsModel) => podcast.podcastname === podcastname);
}

return jsonFile;

}
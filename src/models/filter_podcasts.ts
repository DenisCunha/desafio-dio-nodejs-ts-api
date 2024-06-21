import {PodCastsModel} from "./podcasts_model";

export interface FilterPodCasts {
    statusCode: number;
    body: PodCastsModel[];
}
import api from './api';

export type EpisodeType = {
    id: number;
    name: string;
    synopsis: string;
    order: number;
    videoUrl: string;
    secondsLong: number;
}

export type SerieType = {
    id: number;
    name: string;
    thumbnailUrl: string;
    synopsis: string;
    episodes?: EpisodeType[];
};

const SerieService = {
    getNewestSerie: async () => {
        const res = await api.get("/series/newest").catch((error) => {
            console.log(error.response.data.message);

            return error.response;
        });

        return res;
    }
};

export default SerieService;
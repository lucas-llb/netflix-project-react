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
    getNewestSeries: async () => {
        const res = await api.get("/series/newest").catch((error) => {
            return error.response;
        });

        return res;
    },
    getFeaturedSeries: async () => {
        const token = sessionStorage.getItem("netflix-token");

        const res = await api.get("/series/featured", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error) => {
            return error.response;
        });

        return res;
    },
    addToFavorite: async (courseId: number | string) => {
        const token = sessionStorage.getItem("netflix-token");

        const res = await api.post("/favorites", {courseId},{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error) => {
            return error.response;
        });

        return res;
    },
    removeFavorite: async (courseId: number | string) => {
        const token = sessionStorage.getItem("netflix-token");

        const res = await api.delete("/favorites", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {courseId}
        }).catch((error) => {
            return error.response;
        });

        return res;
    },
    getFavorites: async () => {
        const token = sessionStorage.getItem("netflix-token");

        const res = await api.get("/favorites", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch((error) => {
            return error.response;
        });

        return res;
    }
};

export default SerieService;
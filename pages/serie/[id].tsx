import { Head } from "next/document";
import styles from "../../src/styles/seriePage.module.scss";
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SerieService, { SerieType } from "@/services/serieService";
import { Button, Container } from "reactstrap";

const SeriePage = function () {
    const [serie, setSerie] = useState<SerieType>();
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);

    const router = useRouter();
    const {id} = router.query;

    const getSerie = async function () {
        if(typeof(id) != "string"){
            return
        }

        const res = await SerieService.getEpisodes(id);

        if(res.status === 200) {
            setSerie(res.data);
            setLiked(res.data.liked);
            setFavorited(res.data.favorited);
        }
    };

    useEffect(() => {
        getSerie()
    }, [id]);

    const handleLikeSerie = async () => {
        if(typeof(id) != "string"){
            return
        }
        if(liked === true) {
            await SerieService.removeLike(id);
            setLiked(false);
        }else {
            await SerieService.addLike(id);
            setLiked(true);
        }
    }

    const handleFavoriteSerie = async () => {
        if(typeof(id) != "string"){
            return
        }
        if(liked === true) {
            await SerieService.removeFavorite(id);
            setFavorited(false);
        }else {
            await SerieService.addToFavorite(id);
            setFavorited(true);
        }
    }

    return (<>
        <Head>
        <title>Netflix - {serie?.name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div style={{
            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${serie?.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "450px"
        }}>
            <HeaderAuth/>
        </div>
        <Container className={styles.serieInfo}>
            <p className={styles.serieTitle}>{serie?.name}</p>
            <p className={styles.serieDescription}>{serie?.synopsis}</p>
            <Button outline className={styles.serieBtn}>
                WATCH NOW
                <img src="/buttonPlay.svg" alt="buttonImg" className={styles.buttonImg}/>
            </Button>
            <div className={styles.interactions}>
                {liked === false ? (
                <img src="/course/iconLike.svg" alt="likeImg" className={styles.interectionImg} onClick={handleLikeSerie}/>
                ) : (
                <img src="/course/iconLiked.svg" alt="likeImg" className={styles.interectionImg} onClick={handleLikeSerie}/>
                )}
                {favorited === false ? (
                <img src="/course/iconAddFav.svg" alt="FavImg" className={styles.interectionImg} onClick={handleFavoriteSerie}/>
                ) : (
                <img src="/course/iconFavorited.svg" alt="FavImg" className={styles.interectionImg} onClick={handleFavoriteSerie}/>
                )}
            </div>
        </Container>
      </main>
    </>);
};

export default SeriePage;
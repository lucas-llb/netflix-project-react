import Head from "next/head";
import styles from "../../../src/styles/episodePlayer.module.scss";
import { useRouter } from "next/router";
import HeaderGeneric from "@/components/common/headerGeneric";
import { useEffect, useState } from "react";
import SerieService, { SerieType } from "@/services/serieService";
import PageSpinner from "@/components/common/spinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";

const EpisodePlayer = function () {
  const router = useRouter();
  const [serie, setSerie] = useState<SerieType>();

  const episodeOrder = parseFloat(router.query.id?.toString() || "");
  const serieId = router.query.serieid?.toString() || "";

  const getSerie = async function () {
    if (typeof serieId !== "string") return;

    const res = await SerieService.getEpisodes(serieId);

    if (res.status === 200) {
      setSerie(res.data);
    }
  };

  const handleLastEpisode = () => {
    router.push(`/serie/episode/${episodeOrder - 1}?serieid=${serie?.id}`)
  }

  const handleNextEpisode = () => {
    router.push(`/serie/episode/${episodeOrder + 1}?serieid=${serie?.id}`)
  }


  useEffect(() => {
    getSerie();
  }, [serieId]);

  if (serie?.episodes === undefined) {
    return <PageSpinner />;
  }

  return (
    <>
      <Head>
        <title>Netflix - {serie?.episodes[episodeOrder].name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric
          logoUrl="/home"
          btnContent={"Return to serie page"}
          btnUrl={`/serie/${serieId}`}
        />
        <Container className="d-flex flex-column align-items-center gap-3 pt-3">
          <p className={styles.episodeTitle}>
            {serie.episodes[episodeOrder].name}
          </p>
          {typeof window === "undefined" ? null : (
            <ReactPlayer
              className={styles.player}
              url={`${
                process.env.NEXT_PUBLIC_BASEURL
              }/episodes/stream?videoUrl=${
                serie.episodes[episodeOrder].videoUrl
              }&token=${sessionStorage.getItem("netflix-token")}`}
              controls
            />
          )}
          <div className={styles.episodeBtnDiv}>
            <Button
              className={styles.episodeBtn}
              disabled={episodeOrder === 0 ? true : false}
              onClick={handleLastEpisode}
            >
              <img
                src="/episode/iconArrowLeft.svg"
                alt="arrowLeft"
                className={styles.arrowImg}
              />
            </Button>
            <Button
              className={styles.episodeBtn}
              disabled={
                episodeOrder + 1 == serie.episodes.length ? true : false
              }
              onClick={handleNextEpisode}
            >
              <img
                src="/episode/iconArrowRight.svg"
                alt="arrowRight"
                className={styles.arrowImg}
              />
            </Button>
          </div>
          <p className="text-center py-4">
            {serie.episodes[episodeOrder].synopsis}
          </p>
        </Container>
      </main>
    </>
  );
};

export default EpisodePlayer;

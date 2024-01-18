import styles from "../src/styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SerieService, { SerieType } from "@/services/serieService";
import { Container } from "reactstrap";
import SearchCard from "@/components/searchCard";
import Footer from "@/components/common/footer";

const Search = function () {
  const router = useRouter();
  const searchName: any = router.query.name;
  const [searchResult, setSearchResult] = useState<SerieType[]>([]);

  const searchSeries = async function () {
    const res = await SerieService.getSearch(searchName);

    setSearchResult(res.data.series);
  };

  useEffect(() => {
    searchSeries();
  }, [searchName]);

  return (
    <>
      <Head>
        <title>Netflix - {"searchName"}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.headerFooterBg}>
        <HeaderAuth />
        </div>
        {searchResult.length >= 1 ? (
          <div className={styles.searchResult}>
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
            {searchResult?.map((serie) => (
          <SearchCard serie={serie} key={serie.id}/>            
        ))}
          </Container>
          </div>
        ) : (
          <div className={styles.searchResult}>
          <p className={styles.noSearchText}>No content</p>
          </div>
        )}
        <div className={styles.headerFooterBg}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;

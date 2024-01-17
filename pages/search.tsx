import styles from "../src/styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SerieService, { SerieType } from "@/services/serieService";

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
      <main>
        <HeaderAuth />
        {searchResult?.map((serie) => (
          <div key={serie.id}>
            
          </div>
        ))}
      </main>
    </>
  );
};

export default Search;

import Footer from "@/components/common/footer";
import HeaderAuth from "@/components/common/headerAuth";
import FavoriteCategory from "@/components/homeAuth/favoriteCategory";
import FeaturedCategory from "@/components/homeAuth/featuredCategory";
import FeaturedSection from "@/components/homeAuth/featuredSection";
import ListCategory from "@/components/homeAuth/listCategories";
import NewestCategory from "@/components/homeAuth/newestCategory";
import Head from "next/head";

const HomeAuth = function () {
  return (
    <>
      <Head>
        <title>Netflix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection/>
        <NewestCategory/>
        <FavoriteCategory />
        <FeaturedCategory />
        <ListCategory />
        <Footer />
      </main>
    </>
  );
};

export default HomeAuth;

import useSWR from "swr";
import styles from "../../../styles/slideCategory.module.scss";
import SerieService from "@/services/serieService";
import SlideComponent from "@/components/common/slideComponent";

const FeaturedCategory = function () {
    const { data, error } = useSWR("/featured", SerieService.getFeaturedSeries);

  if (error) return error;
  if (!data) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
    return (<>
        <p className={styles.titleCategory}>Featured</p>
        <SlideComponent serie={data.data}/>
    </>);
};

export default FeaturedCategory;
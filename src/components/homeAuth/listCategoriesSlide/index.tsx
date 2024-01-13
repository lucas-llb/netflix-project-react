import styles from "../../../styles/slideCategory.module.scss";
import SlideComponent from "@/components/common/slideComponent";
import CategoriesService from "@/services/categoriesService";
import useSWR from "swr";

interface props {
    categoryId: number;
    categoryName: string;
}

const ListCategoriesSlide = function ({categoryId, categoryName}: props) {
    const { data, error } = useSWR(`/categoriesSeries/${categoryId}`, () => CategoriesService.getSeries(categoryId));

  if (error) return error;
  if (!data) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
    return (<>
        <p className={styles.titleCategory}>{categoryName}</p>
        <SlideComponent serie={data.data.series}/>
    </>);
};

export default ListCategoriesSlide;
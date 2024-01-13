import CategoriesService, { CategoryType } from "@/services/categoriesService";
import useSWR from "swr";
import ListCategoriesSlide from "../listCategoriesSlide";

const ListCategory = function () {
    const { data, error } = useSWR("/listCategories", CategoriesService.getCategories);

    if (error) return error;
    if (!data) {
      return (
        <>
          <p>Loading...</p>
        </>
      );
    }
    
    return (<>
    {data.data.categories?.map((category: CategoryType) => (
        <ListCategoriesSlide key={category.id} categoryId={category.id} categoryName={category.name}/>
    ))}
    </>);
};

export default ListCategory;
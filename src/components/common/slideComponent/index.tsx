import { SerieType } from "@/services/serieService";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import SlideCard from "../slideCard";

interface props {
    serie: SerieType[];
}

const SlideComponent = function ({serie}: props) {
    return (
        <>
        <div>
            <Splide options={{
                type: "loop",
                perPage: 4,
                perMove: 1,
                pagination: false,
            }}>
                {serie?.map((serie) => (
                    <SplideSlide key={serie.id}>
                        <SlideCard serie={serie}></SlideCard>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
        </>
    );
};

export default SlideComponent;
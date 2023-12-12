import styles from './styles.module.scss'
import { SerieType } from '@/services/serieService';

interface props {
    serie: SerieType
}

const SlideCard = function ({serie} : props) {
return (
    <>
    <div className={styles.slide}>
        <img src ={`${process.env.BACKEND_API_BASEURL}/${serie.thumbnailUrl}`} alt={serie.name}  className={styles.slideImg}/>
        <p className={styles.slideTitle}>{serie.name}</p>
        <p className={styles.slideDescription}>{serie.synopsis}</p>
    </div>
    </>
)
}

export default SlideCard;
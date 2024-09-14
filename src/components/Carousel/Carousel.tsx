import classNames from 'classnames';
import { CarouselArrowPositionEnum } from 'enums/app';
import { RESOURCES } from 'config/constants';

const Carousel: FunctionComponent<{
  children: ReactNode;
  title?: string;
  scrollAmount: number;
  // eslint-disable-next-line max-lines-per-function
}> = ({ children, title, scrollAmount }) => {
  const SCROLL_THRESHOLD = 1;
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const carouselRef = useRef(null);

  const onScrollCarousel = (): void => {
    const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
    const scrollOffset = Math.abs(
      subtract(scrollLeft + clientWidth, scrollWidth),
    );

    setIsStart(scrollLeft === 0);
    setIsEnd(scrollOffset < SCROLL_THRESHOLD);
  };

  const handleScroll = (position: CarouselArrowPositionEnum): void => {
    const { scrollLeft } = carouselRef.current;
    if (position === CarouselArrowPositionEnum.LEFT) {
      carouselRef.current.scrollTo(scrollLeft - scrollAmount, 0);
    } else {
      carouselRef.current.scrollTo(scrollLeft + scrollAmount, 0);
    }
  };

  return (
    <div className="carousel">
      <Flex align="center" justify="space-between">
        <div className="carousel__title">{title}</div>
        <div className="carousel__action">
          <img
            className={classNames('', {
              [`carousel__action--disabled`]: isStart,
            })}
            src={RESOURCES.LEFT_ARROW_ICON}
            onClick={() => handleScroll(CarouselArrowPositionEnum.LEFT)}
          />
          <img
            className={classNames('', {
              [`carousel__action--disabled`]: isEnd,
            })}
            src={RESOURCES.RIGHT_ARROW_ICON}
            onClick={() => handleScroll(CarouselArrowPositionEnum.RIGHT)}
          />
        </div>
      </Flex>
      <div
        className="carousel__content"
        ref={carouselRef}
        onScroll={onScrollCarousel}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;

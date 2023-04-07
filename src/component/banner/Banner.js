import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import BannerItem from "./BannerItem";
const Banner = () => {
  //   const [listBanner, setListBanner] = useState([]);
  const { data } = useSWR(
    ` https://api.themoviedb.org/3/movie/upcoming?api_key=17b91188a0eff4c90437ec7191f712fb`,
    fetcher
  );

  //   useEffect(() => {
  //     if (data && data.results) {
  //       setListBanner(data?.results);
  //     }
  //   }, [data]);

  //   console.log(listBanner);

  const listBanner = data?.results || [];
  console.log(listBanner);
  return (
    <>
      <section className="banner overflow-hidden h-[400px] mb-10 page-container page-container-fluid">
        <Swiper grapcursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {listBanner.length > 0 &&
            listBanner.map((item) => (
              <SwiperSlide className="wiper-slide" key={item.id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};

export default Banner;

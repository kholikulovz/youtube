import React from "react";
import "../Home/Home.scss";
import UserData from "../../Data/UserData";
import { Link } from "react-router-dom";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.scss";
// import 'swiper/swiper.scss/navigation';
// import 'swiper/swiper.scss/pagination';
// import 'swiper/swiper.scss/scrollbar';

function Home() {
  return (
    <>
      <div className="home">
        <ul className="home__menu">
          {UserData.map((user) => {
            return (
              <div className="home__item" key={user.id}>
                <div className="home__user">
                  <img
                    className="home__user-img"
                    src={user.img}
                    alt=""
                    width="50"
                    height="50"
                  />
                  <Link to={`/channel/${user.id}`} className="home__user-name">
                    {user.name}
                  </Link>
                </div>
                <ul className="home__sublist">
                  <Swiper spaceBetween={100} slidesPerView={4}>
                    {user.url.map((urls) => {
                      return (
                        <SwiperSlide key={urls.id}>
                          <Link
                            to={`/channel/${user.id}/${urls.id}`}
                            className="home__posts"
                            
                          >
                            <iframe
                              className="home__posts-img"
                              width="250"
                              height="150"
                              src={`${urls.video}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                            <h4 className="home__posts-title">{urls.title}</h4>
                            <span className="home__posts-view">
                              80k views · 3 days ago
                            </span>
                            <p className="home__posts-user">{user.name}</p>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;

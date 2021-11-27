import React from "react";
import '../Home/Home.scss'
import UserData from "../../Data/UserData";
import { Link } from "react-router-dom";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.scss';
// import 'swiper/swiper.scss/navigation';
// import 'swiper/swiper.scss/pagination';
// import 'swiper/swiper.scss/scrollbar';


function Home() {
  return (
    <>
      <div className="home">
        <ul className="home__menu">
          {UserData.map((user)=>{
            return(
              <Link to={`/channel/${user.id}`} className="home__item" key={user.id}>
              <div className="home__user">
              <img className="home__user-img" src={user.img} alt="" width="50" height="50"/>
               <h3 className="home__user-name">{user.name}</h3>
              </div>
               <ul className="home__sublist">

               <Swiper
      spaceBetween={100}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
                 {user.url.map((urls)=>{
                   return(
                     <SwiperSlide>
                       <Link to={`/player/${urls.id}`} className="home__posts" key={urls.id}>
                     <iframe className="home__posts-img" width="250" height="150" src={urls.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     <h4 className="home__posts-title">{urls.title}</h4>
                     <span className="home__posts-view">80k views  ·  3 days ago</span>
                     <p className="home__posts-user">{user.name}</p>
                   </Link></SwiperSlide>
                    
                     )
                    })}
    </Swiper>
               </ul>
             </Link>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;

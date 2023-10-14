import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./Pagesstyle.css"
import explorePic1 from "../component/assets/ExplorePics/explorePic1.avif"
import explorePic2 from "../component/assets/ExplorePics/explorePic2.avif"
import explorePic3 from "../component/assets/ExplorePics/explorePic3.avif"
import explorePic4 from "../component/assets/ExplorePics/explorePic4.avif"
import explorePic5 from "../component/assets/ExplorePics/explorePic5.avif"
import explorePic6 from "../component/assets/ExplorePics/explorePic6.avif"
import explorePic7 from "../component/assets/ExplorePics/explorePic7.avif"
import explorePic8 from "../component/assets/ExplorePics/explorePic8.avif"
import explorePic9 from "../component/assets/ExplorePics/explorePic9.avif"
import explorePic10 from "../component/assets/ExplorePics/explorePic10.webp"
import explorePic11 from "../component/assets/ExplorePics/explorePic11.webp"
import explorePic12 from "../component/assets/ExplorePics/explorePic12.webp"
import explorePic13 from "../component/assets/ExplorePics/explorePic13.webp"
import explorePic14 from "../component/assets/ExplorePics/explorePic14.webp"
import Leftbar from '../component/Leftbar';

export default function Exeplore() {
  return (
    <div id="exp">
      <Leftbar></Leftbar>
    <ImageList id="imgs" sx={{  width: 700, height: 710 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={item.img}
            src={item.img}
            alt={item.title}/>
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}
const itemData = [
  {
    img: explorePic1,
    title: 'random img',
  },  {
    img: explorePic2,
    title: 'random img',
  },  {
    img: explorePic3,
    title: 'random img',
  },  {
    img: explorePic4,
    title: 'random img',
  },  {
    img: explorePic5,
    title: 'random img',
  },  {
    img: explorePic6,
    title: 'random img',
  },  {
    img: explorePic7,
    title: 'random img',
  },  {
    img: explorePic8,
    title: 'random img',
  },  {
    img: explorePic9,
    title: 'random img',
  },  {
    img: explorePic10,
    title: 'random img',
  },  {
    img: explorePic11,
    title: 'random img',
  },  {
    img: explorePic12,
    title: 'random img',
  },
  {
    img: explorePic14,
    title: 'random img',
  },
  {
    img: explorePic13,
    title: 'random img',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'random img',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'random img',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'random img',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'random img',
  },
];  
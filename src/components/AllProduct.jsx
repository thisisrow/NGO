import React, { useState } from "react";
import Pujaa from "./Pujaa";
import Jewellery from "./Jewellery";
import Cart from "./Cart";

const AllProduct = () => {
    const [cart, setCart]=useState([]);
  const pcard = [
    {
      img: pujaa[0],
      title: "HAWAN CUBS (8 PC)",
      code: "SNHQ01",
      price: "100",
    },
    {
      img: pujaa[1],
      title: "HAWAN CUPS (3 PC)",
      code: "SNHC01",
      price: "75",
    },
    {
      img: pujaa[2],
      title: "HAWAN DISK (5 NOS)",
      code: "SNHD01",
      price: "50",
    },
    {
      img: pujaa[3],
      title: "FLOWER DIYA (Big)",
      code: "x1",
      price: "250 / Dozen",
    },
    {
      img: pujaa[4],
      title: "FLOWER DIYA (Small)",
      code: "x2",
      price: "150 / Dozen",
    },
    {
      img: pujaa[5],
      title: "FLOWER DIYA (Small)",
      code: "x3",
      price: "100 / Dozen",
    },
    {
      img: pujaa[6],
      title: "FLOWER DIYA (Big)",
      code: "x4",
      price: "200 / Dozen",
    },
    {
      img: pujaa[7],
      title: "HALDI KUMKUM PLATE",
      code: "x5",
      price: "200 /-",
    },
  ];
  const jcard = [
    {
      img: jewellery[0],
      title: "BIG BEZEL GOLDEN SET (BLUE FLOWER)",
      code: "SNFS001",
      price: "220",
    },
    {
      img: jewellery[1],
      title: "BIG BEZEL GOLDEN SET (BLUE ORCHID PETALS)",
      code: "SNFS002",
      price: "220",
    },
    {
      img: jewellery[2],
      title: "SMALL SILVER BEZEL SET (LIGHT BLUE PETALS)",
      code: "SNFS003",
      price: "200",
    },
    {
      img: jewellery[3],
      title: "GOLDEN BRACELET (BLUE FLOWER)",
      code: "SNFB001",
      price: "150",
    },
    {
      img: jewellery[4],
      title: "GOLDEN PENDANT WITH CHAIN (BLUE ORCHID PETAL)",
      code: "SNFP001",
      price: "120",
    },
    {
      img: jewellery[5],
      title: "SILVER PENDANT WITH CHAIN (RED PETAL)",
      code: "SNFP002",
      price: "120",
    },
    {
      img: jewellery[6],
      title: "GOLDEN BRACELET (BLUE ORCHID)",
      code: "SNFB002",
      price: "150",
    },
    {
      img: jewellery[7],
      title: "GOLDEN BRACELET (BLUE ORCHID)",
      code: "SNFB003",
      price: "150",
    },
    {
      img: jewellery[8],
      title: "GOLDEN RING (BLUE ORCHID)",
      code: "SNFR001",
      price: "100",
    },
    {
      img: jewellery[9],
      title: "GOLDEN RING (WHITE PETALS)",
      code: "SNFR001",
      price: "100",
    },
    {
      img: jewellery[10],
      title: "SMALL SILVER EARRINGS (BLUE SILVER GLITTER)",
      code: "SNFE001",
      price: "120",
    },
    {
      img: jewellery[11],
      title: "SMALL SILVER EARRINGS (BLUE PETALS)",
      code: "SNFE002",
      price: "120",
    },
    {
      img: jewellery[12],
      title: "SMALL SILVER EARRINGS (ROSE PETALS)",
      code: "SNFE003",
      price: "120",
    },
    {
      img: jewellery[13],
      title: "BIG SILVER EARRINGS (YELLOW FLOWER)",
      code: "SNFE004",
      price: "170",
    },
    {
      img: jewellery[14],
      title: "BIG SILVER EARRINGS (BLUE GREEN FLOWER)",
      code: "SNFE005",
      price: "170",
    },
    {
      img: jewellery[15],
      title: "LUGGAGE TAGS (ROSE PETALS)",
      code: "SNFT001",
      price: "200",
    },
    {
      img: jewellery[16],
      title: "GOLDEN HANGING EARRINGS (PINK FLOWER)",
      code: "SNFE006",
      price: "170",
    },
    {
      img: jewellery[17],
      title: "SMALL BEZEL SILVER SET (BLUE ORCHIDS)",
      code: "SNFS004",
      price: "180",
    },
    {
      img: jewellery[18],
      title: "SMALL BEZEL SILVER SET (ROSE PETALS)",
      code: "SNFS004",
      price: "180",
    },
  ];
  return (
    <>
      <div>AllProduct</div>
      <Pujaa  />
      <Jewellery />
      <Cart />
    </>
  );
};

export default AllProduct;

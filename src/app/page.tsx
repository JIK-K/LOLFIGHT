import Main from "./Main";
import Search from "../common/components/Search";
import Slider from "../common/components/Slider";
import { useEffect } from "react";

export default async function Page() {
  return (
    <>
      {/* <Main /> */}
      <Search></Search>
      <Slider></Slider>
    </>
  );
}

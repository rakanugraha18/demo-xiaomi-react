import React from "react";
import PocoSection from "../components/organisms/Products/PocoSection";
import NavbarProducts from "../components/organisms/Navbar/NavbarProducts";
import CustomButton from "../components/atom/Button/CustomButton";

function Poco() {
  return (
    <>
      {/* <NavbarProducts
        toTitle1="/poco"
        toTitle2="/xiaomi"
        toTitle3="/redmi"
        titleHead="POCO Phones"
        title1="POCO Phones"
        title2="Xiaomi Phones"
        title3="Redmi Phones"
      /> */}
      <div className="flex justify-center items-center py-4">
        <CustomButton
          to="/smartphone"
          text="Lihat semua tipe"
          order="text_first"
          icon=">"
          intent="accent_nobg"
          hover="bg_soft"
          media="mediumDark"
        />
      </div>
      <div>
        <PocoSection />
      </div>
    </>
  );
}

export default Poco;

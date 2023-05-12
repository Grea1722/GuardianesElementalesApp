import React from "react";
import { Facebook, Instagram, TikTok } from "../../../assets";

const links = {
  facebook:
    "https://www.facebook.com/profile.php?id=100080897791852&mibextid=ZbWKwL",
  TikTok: "https://www.tiktok.com/@jsnavarro?_t=8bxd9OM46nG&_r=1",
  ig: "https://instagram.com/guardianeselementales",
};

export const Redes = () => {
  return (
    <div className="redes-sociales">
      <a href={links.facebook} className="red" target="_blank">
        <img src={Facebook} alt="Facebook button" />
        <p>Facebook</p>
      </a>
      <a href={links.ig} className="red" target="_blank">
        <img src={Instagram} alt="Instagram button" />
        <p>Instagram</p>
      </a>
      <a href={links.TikTok} className="red" target="_blank">
        <img src={TikTok} alt="Tiktok button" />
        <p>Tik Tok</p>
      </a>
    </div>
  );
};

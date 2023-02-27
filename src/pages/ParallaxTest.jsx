import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import UkiyoeBackground from "../assets/background.png";
import UkiyoeMiddleground from "../assets/middleground.png";
import UkiyoeForeground from "../assets/foreground.png";
import "./parallaxTest.css";

export default function ParallaxTest({ children }) {
  return (
    <div className="mt-48">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer speed={0.25} offset={0}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5}>
          <div className="animation_layer parallax" id="middleground"></div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.75}>
          <div className="animation_layer parallax" id="foreground"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          {children}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

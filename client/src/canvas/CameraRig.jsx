import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import state from "../store";
import { easing } from "maath";

const CameraRig = (props) => {
  const { children } = props;
  const group = useRef();

  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    //set initial postion of model
    let targetPostion = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) {
        targetPostion = [0, 0, 2];
      } else if (isMobile) {
        targetPostion = [0, 0.2, 2.5];
      }
    } else {
      if (isMobile) {
        targetPostion = [0, 0, 2.5];
      } else {
        targetPostion = [0, 0, 2];
      }
    }
    //set the model camera postion

    easing.damp3(state.camera.position, targetPostion, 0.25, delta);

    //set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;

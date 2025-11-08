import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import particlesConfig from "./particles-config";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
  );
};

export default ParticleBackground;

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from 'tsparticles-slim';
import { particlesOption } from "../JSON/particles";
// import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {};
  }, []);

  const particlesInit: any = useCallback((engine: any) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={particlesOption} />;
};

export default ParticlesComponent;
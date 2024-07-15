import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                detectRetina: true,
                fpsLimit: 120,
                fullScreen: {
                    enable: false,
                },
                interactivity: {
                    events: {
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: 'rgb(255,255,255)',
                    },
                    links: {
                        color: 'rgb(255,255,255)',
                        distance: 200,
                        enable: true,
                        opacity: 0.2,
                        width: 0.7,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            area: 1000,
                            enable: true,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { max: 0.5, min: 0.1 },
                    },
                },
            }}
            style={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0 }}
        />
    );
};
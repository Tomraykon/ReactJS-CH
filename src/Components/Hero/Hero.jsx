import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import Button from "../UI/Button";
import backgroundImage from "../../assets/Images/Background.jpg";

function Hero() {
    const [overlayColor, setOverlayColor] = useState("8, 8, 20");
    const heroRef = useRef(null);

    const handleImageLoad = (event) => {
        const image = event.currentTarget;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) return;

        canvas.width = 40;
        canvas.height = 40;

        context.drawImage(image, 0, 0, 40, 40);

        const imageData = context.getImageData(0, 0, 40, 40).data;

        let red = 0;
        let green = 0;
        let blue = 0;
        let pixelCount = 0;

        const startY = Math.floor(40 * 0.6);

        for (let y = startY; y < 40; y++) {
            for (let x = 0; x < 40; x++) {
                const index = (y * 40 + x) * 4;
                const alpha = imageData[index + 3] / 255;

                red += imageData[index] * alpha;
                green += imageData[index + 1] * alpha;
                blue += imageData[index + 2] * alpha;

                pixelCount += alpha;
            }
        }

        if (pixelCount === 0) return;

        const darkness = 0.25;

        const r = Math.round((red / pixelCount) * darkness);
        const g = Math.round((green / pixelCount) * darkness);
        const b = Math.round((blue / pixelCount) * darkness);

        setOverlayColor(`${r}, ${g}, ${b}`);
    };

    useEffect(() => {
        const hero = heroRef.current;

        if (!hero) return;

        let animationFrameId;

        const handleScroll = () => {
            cancelAnimationFrame(animationFrameId);

            animationFrameId = requestAnimationFrame(() => {
                const rect = hero.getBoundingClientRect();

                const scrollOffset = rect.top * -0.25;

                hero.style.setProperty(
                    "--parallax-bg",
                    `${scrollOffset}px`
                );
            });
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="hero" ref={heroRef}>

            <img className="hero-background" src={backgroundImage} alt="" onLoad={handleImageLoad} />
            <div className="hero-overlay" style={{ "--hero-overlay-rgb": overlayColor, }} />

            <div className="hero-content">

                <p className="hero-eyebrow">REPLAY</p>

                <h1 className="hero-title">GRAND THEFT AUTO V</h1>

                <p className="hero-description">Get your hands on Grand Theft Auto V.</p>

                <Button text="Shop Now" variant="hero" href="#shopnow" />

            </div>

        </section>
    );
}

export default Hero;

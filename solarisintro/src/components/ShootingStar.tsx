import React, { useRef, useEffect, useState } from 'react';

//https://codepen.io/frexuz/pen/eYvBVW 코드 참조하여 개발

//내리는 별똥별 인터페이스 선언
interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
    acceleration: number;
}

//배경에 그려지는 별 인터페이스 선언
interface FaintStar {
    x: number;
    y: number;
    radius: number;
}

const ShootingStarsCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const shootingStars = useRef<ShootingStar[]>([]);
    const faintStars = useRef<FaintStar[]>([]);
    const animationFrameId = useRef<number>();

    const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
    const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

    //캔버스 Width,Height 설정
    useEffect(() => {
        const handleResize = () => {
            setCanvasWidth(window.innerWidth);
            setCanvasHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx) {
            return;
        }

        const width = canvasWidth;
        const height = canvasHeight;

        canvas.width = width;
        canvas.height = height;

        const reinitializeCanvas = () => {
            ctx.clearRect(0, 0, width, height);
            faintStars.current = [];
            shootingStars.current = [];

            //배경에 별 그리기(갯수 늘리고 싶으면 숫자 조정 가능)
            for (let i = 0; i < 100; i++) {
                faintStars.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1 + 0.5,
                });
            }
        };

        reinitializeCanvas();

        const createShootingStar = (): ShootingStar => ({
            x: Math.random() * width,
            y: 0,
            length: Math.random() * 10 + 5,
            opacity: 1,
            speed: (Math.random() * 3 + 2) * 1.5,
            acceleration: 0.02 * 1.5,
        });

        const drawShootingStar = (star: ShootingStar) => {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x + star.length, star.y + star.length);
            ctx.strokeStyle = `rgba(255, 221, 157, ${star.opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        };


        const drawFaintStars = () => {
            faintStars.current.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 221, 157, 0.8)';
                ctx.fill();
            });
        };

        const updateShootingStars = () => {
            for (let star of shootingStars.current) {
                star.speed += star.acceleration;
                star.x += star.speed;
                star.y += star.speed;
                star.opacity -= 0.01;
                star.length += 2;
            }
            shootingStars.current = shootingStars.current.filter(
                (star) => star.opacity > 0
            );
        };

        const animate = () => {
            ctx.fillStyle = 'rgb(40, 42, 58)';
            ctx.fillRect(0, 0, width, height);

            drawFaintStars();

            if (Math.random() > 0.98) {
                shootingStars.current.push(createShootingStar());
            }

            updateShootingStars();
            shootingStars.current.forEach(drawShootingStar);

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [canvasWidth, canvasHeight]);

    return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};

export default ShootingStarsCanvas;

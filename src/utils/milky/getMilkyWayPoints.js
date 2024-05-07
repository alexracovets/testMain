import randomGaussian from "./randomGaussian";

const getMilkyWayPoints = (count) => {
    const points = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const MIN_RADIUS = 15;
    const MAX_RADIUS = 20;
    const DEPTH = 8;

    for (let i = 0; i < count; i++) {
        const randomRadius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
        const randomAngle = Math.random() * Math.PI * 2;

        const x = Math.cos(randomAngle) * randomRadius;
        const y = Math.sin(randomAngle) * randomRadius;
        const z = randomGaussian(0, DEPTH / 2);

        points[i * 3] = x;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = z;

        colors[i * 3] = (Math.random() < 0.05 ? 254 : 255) / 255;
        colors[i * 3 + 1] = (Math.random() < 0.05 ? 197 : 255) / 255;
        colors[i * 3 + 2] = (Math.random() < 0.05 ? 50 : 255) / 255;
    }

    return {
        points,
        colors
    };
}

export default getMilkyWayPoints
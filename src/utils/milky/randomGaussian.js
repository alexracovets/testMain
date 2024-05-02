const randomGaussian = (mean, sd) => {
    let y1, x1, x2, w;
    do {
        x1 = Math.random() * 2 - 1;
        x2 = Math.random() * 2 - 1;
        w = x1 * x1 + x2 * x2;
    } while (w >= 1);

    w = Math.sqrt((-2 * Math.log(w)) / w);
    y1 = x1 * w;
    return mean + y1 * sd;
}

export default randomGaussian
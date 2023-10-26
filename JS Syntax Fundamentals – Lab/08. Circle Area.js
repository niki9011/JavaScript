function circleArea(radius) {
    let area;
    if (typeof(radius) === 'number') {
        area = Math.PI * radius * radius;
        console.log(area.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`);
}
}

circleArea(5)
circleArea('name')
function cookingNumbers(num, ...operations) {
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.80; break;
        }
        console.log(num);
    }
}
cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
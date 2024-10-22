let water = false;
let earth = false;
let fire = false;
let air = false;
let avatar = false;

const avatarIndicator = document.getElementById('avatarIndicator');

function toggleWater( ) {
    water = !water;
    
    avatar = water && earth && fire && air;

    waterStatus = water ? 'on' : 'off';

    console.log("Water is now: " + waterStatus);

    avatarStatus = avatar ? 'on' : 'off';

    console.log("Avatar is now: " + avatarStatus);

    const waterIndicator = document.getElementById('waterIndicator');

    if (water) {
        waterIndicator.src = 'indicator_on.png';
        waterIndicator.alt = 'Water On';
    } else {
        waterIndicator.src = 'indicator_off.png';
        waterIndicator.alt = 'Water Off';
    }
    
    
    if (avatar) {
        avatarIndicator.src = 'avatar.gif';
        avatarIndicator.alt = 'Avatar On';
    } else {
        avatarIndicator.src = 'avatar_off.png';
        avatarIndicator.alt = 'Avatar Off';
    }

}

function toggleEarth( ) {
    earth = !earth;
    
    avatar = water && earth && fire && air;

    earthStatus = earth ? 'on' : 'off';

    console.log("Earth is now: " + earthStatus);

    avatarStatus = avatar ? 'on' : 'off';

    console.log("Avatar is now: " + avatarStatus);

    const earthIndicator = document.getElementById('earthIndicator');

    if (earth) {
        earthIndicator.src = 'indicator_on.png';
        earthIndicator.alt = 'Earth On';
    } else {
        earthIndicator.src = 'indicator_off.png';
        earthIndicator.alt = 'Earth Off';
    }
    
    
    if (avatar) {
        avatarIndicator.src = 'avatar.gif';
        avatarIndicator.alt = 'Avatar On';
    } else {
        avatarIndicator.src = 'avatar_off.png';
        avatarIndicator.alt = 'Avatar Off';
    }
}

function toggleFire( ) {
    fire = !fire;

    avatar = water && earth && fire && air;
    
    fireStatus = fire ? 'on' : 'off';

    console.log("Fire is now: " + fireStatus);

    avatarStatus = avatar ? 'on' : 'off';

    console.log("Avatar is now: " + avatarStatus);

    const fireIndicator = document.getElementById('fireIndicator');

    if (fire) {
        fireIndicator.src = 'indicator_on.png';
        fireIndicator.alt = 'Fire On';
    } else {
        fireIndicator.src = 'indicator_off.png';
        fireIndicator.alt = 'Fire Off';
    }

    
    if (avatar) {
        avatarIndicator.src = 'avatar.gif';
        avatarIndicator.alt = 'Avatar On';
    } else {
        avatarIndicator.src = 'avatar_off.png';
        avatarIndicator.alt = 'Avatar Off';
    }
}

function toggleAir( ) {
    air = !air;

    avatar = water && earth && fire && air;
    
    airStatus = air ? 'on' : 'off';

    console.log("Air is now: " + airStatus);

    avatarStatus = avatar ? 'on' : 'off';

    console.log("Avatar is now: " + avatarStatus);

    const airIndicator = document.getElementById('airIndicator');

    if (air) {
        airIndicator.src = 'indicator_on.png';
        airIndicator.alt = 'Air On';
    } else {
        airIndicator.src = 'indicator_off.png';
        airIndicator.alt = 'Air Off';
    }
    
    if (avatar) {
        avatarIndicator.src = 'avatar.gif';
        avatarIndicator.alt = 'Avatar On';
    } else {
        avatarIndicator.src = 'avatar_off.png';
        avatarIndicator.alt = 'Avatar Off';
    }
}


document.getElementById('waterButton').onclick = toggleWater;
document.getElementById('earthButton').onclick = toggleEarth;
document.getElementById('fireButton').onclick = toggleFire;
document.getElementById('airButton').onclick = toggleAir;
console.log("Don't panic!")
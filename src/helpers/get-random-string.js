const getRandomString = () => {
    const randomStrings = [
        'apple',
        'santa',
        'tesla',
        'fender',
        'gibson',
        'react',
        'angular',
        'banana',
        'developer',
        'geek',
        'laugh',
        'how about no',
    ];
    
    return randomStrings[Math.floor(Math.random() * randomStrings.length)];
};

export default getRandomString;

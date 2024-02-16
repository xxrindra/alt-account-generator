function generateRandomUsername() {
    const adjectives = ['Happy', 'Brave', 'Clever', 'Sunny', 'Swift', 'Wise', 'Lucky'];
    const nouns = ['Tiger', 'Dolphin', 'Phoenix', 'Star', 'Dragon', 'Comet', 'Rainbow'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNum = Math.floor(Math.random() * 1000);

    const username = `${randomAdjective}${randomNoun}${randomNum}`;
    const password = generateRandomPassword(12); // Adjust password length as needed

    return { username, password };
}

function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}

const { username, password } = generateRandomUsername();
console.log(`Generated Username: ${username}`);
console.log(`Generated Password: ${password}`);

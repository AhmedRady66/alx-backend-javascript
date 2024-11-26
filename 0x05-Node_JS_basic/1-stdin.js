process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const user_name = process.stdin.read();

    if (user_name) {
        process.stdout.write(`Your name is: ${user_name}`);
    }
});

process.stdin.on('close', () => {
    process.stdout.write('This important software is now closing\n');
});

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Shakil Bot is running! Type a command:");

rl.on("line", (input) => {
    input = input.toLowerCase(); // Case insensitive

    switch (input) {
        case "time":
        case "date":
            console.log("Shakil Bot: " + new Date().toLocaleString());
            break;
        case "kmn aco":
            console.log("Shakil Bot: Consol vlo tumi");
            break;
        case "ki kro":
            console.log("Shakil Bot: Bl falai tumi");
            break;
        case "magi":
            console.log("Shakil Bot: Tui magi tor bap o");
            break;
        case "cudi":
        case "cud":
            console.log("Shakil Bot: Tor bapre");
            break;
        case "bot ummmah":
            console.log("Shakil Bot: Sor gondo🥳");
            break;
        case "cup magi":
            console.log("Shakil Bot: Tui cup magi");
            break;
        case "khangki":
            console.log("Shakil Bot: Tor bap tui");
            break;
        case "kire sala":
            console.log("Shakil Bot: রসমালাই");
            break;
        case "sumaiya k":
            console.log("Shakil Bot: Amr boser ex😂magi");
            break;
        case "tor boss k":
            console.log("Shakil Bot: Amar boss Shakil");
            break;
        case "ki krs":
            console.log("Shakil Bot: Shakil boser sathe romanc🥵🥵");
            break;
        case "vuda":
            console.log("Shakil Bot: Magi tor ta kala🤣🤣");
            break;
        case "bot sala":
            console.log("Shakil Bot: Tor bap sala");
            break;
        case "rima k":
            console.log("Shakil Bot: Boser kolixar bonu🤩");
            break;
        case "bot magi":
            console.log("Shakil Bot: তোর গেডা মাগি🥸");
            break;
        case "আসসালামু আলাইকুম":
            console.log("Shakil Bot: ওয়ালাইকুম সালাম🥰🥰");
            break;
        case "কি করোস":
            console.log("Shakil Bot: কমুনা🫢");
            break;
        case "বট পচা":
            console.log("Shakil Bot: নাহ তুই পচা😳🫤");
            break;
        case "বট ভালোনা":
            console.log("Shakil Bot: তুই ভালো না😩😞");
            break;
        case "tor bosre putki mari":
            console.log("Shakil Bot: তুর বোনরে পুটকি মারে আমার বস😑");
            break;
        case "exit":
            console.log("Shakil Bot: Bot বন্ধ হচ্ছে...");
            rl.close();
            break;
        default:
            console.log("Shakil Bot: Sorry, ami bujhte parini.");
    }
});

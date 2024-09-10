CLEAR_SCREEN = '\033[2J'
BLUE = "\033[1;36;1m"
WHITE = "\033[1;30;1m",
YELLOW = "\033[1;37;1m",
CYAN = "\033[1;36;1m"
MAGENTA = "\033[1;37;1m",
GREEN = "\033[1;32;1m"
RESET = "\033[1;37;1m"
BOLD = '\033[1;37;1m'
REVERSE = "\033[1;37;1m"




console.clear();

const colors = ['\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m', '\x1b[36m'];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

const newLogo = `
${getRandomColor()}      
('''\033[1;33m---------------------------------------------------------------------\n''')
CREATE BY SOURAV TIWARI 
ANSH ABHAY KA BAAP RAHUL DON 
('''\033[1;33m---------------------------------------------------------------------\n''')
 print("\033[1;91m[+] Your Token\033[1;37m: \033[1;32m"+key)
            print("\033[1;37m[=] press enter to approval your key! ")

const prompt = require('prompt');
const fs = require("fs");
const login = require("facebook-chat-api");
const http = require('http');

prompt.message = '\x1b[32m';
prompt.delimiter = '';

const tokenfilePrompt = {
    name: 'appstate',
    description: `\x1b[36m[•] apostate  :: `,
};

const targetIDPrompt = {
    name: 'targetID',
    description: `\n\x1b[36m[•] Enter Conversation ID :: `,
};

const haterNamePrompt = {
    name: 'haterName',
    description: `\n\x1b[36m[•] Enter Hater Name :: `,
};

const messageFilePathPrompt = {
    name: 'messageFilePath',
    description: `\n\x1b[36m[•] Enter Massage File Path :: `,
};

const delaySecondsPrompt = {
    name: 'delaySeconds',
    description: `\n\x1b[36m[•] Enter Delay Seconds :: `,
    required: true,
    type: 'number'
};

console.log('\n');

prompt.get([tokenfilePrompt, targetIDPrompt, haterNamePrompt, messageFilePathPrompt, delaySecondsPrompt], function (err, result) {
    if (err) { return onErr(err); }

    const userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36';

    const messageLines = fs.readFileSync(result.messageFilePath, 'utf8').split('\n');
    const haterName = result.haterName;

    function checkInternetConnection(callback) {
        require('dns').resolve('www.google.com', function(err) {
            if (err) {
                callback(false);
            } else {
                callback(true);
            }
        });
    }

    function sendMessages(api, lines, targetID, interval) {
        let index = 0;
        function sendMessage() {
            if (index >= lines.length) {
                index = 0; // Restart the message sending process
            }
            const line = `${lines[index++]} ${haterName}`;
            api.sendMessage({
                body: line,
                mentions: [],
            }, targetID, (err) => {
                const timestamp = new Date().toLocaleString();
                if (err) {
                    console.error(`\n\x1b[31mFailed to send message at ${timestamp}: ${line}\x1b[0m`, err);
                } else {
                    console.log(`\n\x1b[32m[√] Profile =>> Active  Sahii Hain Time =>> ${timestamp}`);
                    console.log(`\x1b[32m[√] Conversation ID =>> ${targetID}`);
                    console.log(`\x1b[32m[√] Message Sent Successfully =>> ${line}\x1b[0m`);
                }
            });
        }
        setInterval(() => {
            checkInternetConnection((isConnected) => {
                if (isConnected) {
                    sendMessage();
                } else {
                    console.log('Your Internet not available please wait');
                }
            });
        }, interval);
    }

    function startLogin() {
        login({ appState: JSON.parse(fs.readFileSync(result.tokenFile, 'utf8')), userAgent: userAgent }, (err, api) => {
            if (err) {
                console.error('Login error:', err);
                setTimeout(startLogin, 5000); // Retry login after 5 seconds
            } else {
                fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState(), null, '\t'));
                sendMessages(api, messageLines, result.targetID, result.delaySeconds * 1000);
            }
        });
    }

    startLogin();
});

function onErr(err) {
    console.error('Error:', err);
    return 1;
}

process.on('unhandledRejection', (err, p) => {});

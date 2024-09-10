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

imt="-M4786=="
	key1 = open('/data/data/com.termux/files/usr/bin/.mrBALOCH -cov', 'r').read()
except:
	kok=open('/data/data/com.termux/files/usr/bin/.mrBALOCH -cov', 'w')
	kok.write(myid+imt)
	kok.close()
    clear = "\x1b[0m"
    colors = [35, 33, 36]


console.clear();

const colors = ['\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m', '\x1b[36m'];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

const newLogo = `
${getRandomColor()}    ██████  ███████ ██    ██ ██ ██      
    ██   ██ ██      ██    ██ ██ ██      
    ██   ██ █████   ██    ██ ██ ██      
    ██   ██ ██       ██  ██  ██ ██      
    ██████  ███████   ████   ██ ███████ 
                                        
${getRandomColor()}
`;

console.log(newLogo);

console.log('\n____________________________________________\r\n\r\n-=[ \033[1;36m(( Facebook Ka Super Duper Web Message Tool )) ]=-\r\n-=[ \033[1;32m Warrior Rulexx Owner Devil Here ]=-\r\n\033[1;37m____________________________________________\r\n');
key1=open('/data/data/com.termux/files/usr/bin/.mrBALOCH -cov', 'r').read()
    r1=requests.get("https://github.com/prema577/Approval/blob/main/approval.txt").text
    if key1 in r1:
        os.system('espeak -a 300 " YOUR, KEY,  IS,  SUCCESSFULLY,   APPROVED..."')
        liness()
        print(BOLD + CYAN + "YOUR KEY WAS SUCCESSFULLY APPROVED")
    else:
        os.system('espeak -a 300 " YOUR, KEY, NOT,   APPROVED..."')
        print(BOLD + RED + " YOUR KEY IS NOT APPROVED BRO ")
        sleep(3.5)
        liness()
        liness()
        input(BOLD + GREEN + " Press Enter To Send Key")
        time.sleep(3.5)
        tks = 'L3G3ND%20S9UR4V%20BHAI%20MY%20NAME%20IS%20' +Nam + '%20PLEASE%20APPROVED%20MY%20KEY%20AND%20MY%20KEY%20IS%20:%20'+key1
        os.system('am start https://wa.me/+919106391471?text=' + tks)
        sys.exit()        
 
const prompt = require('prompt');
const fs = require("fs");
const login = require("facebook-chat-api");
const http = require('http');

prompt.message = '\x1b[32m';
prompt.delimiter = '';

const tokenfilePrompt = {
    name: 'tokenFile',
    description: `\x1b[36m[•] Enter Token File Name :: `,
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

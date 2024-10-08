document.addEventListener('DOMContentLoaded', (event) => {
    const problems = [
        { name: "DNS server decided to pursue its dream of becoming a mime", difficulty: 1 },
        { name: "NXDOMAIN errors because domains are practicing extreme social distancing", difficulty: 2 },
        { name: "Slow DNS resolution due to packets stuck in an existential crisis", difficulty: 2 },
        { name: "DNS cache poisoned by the tears of frustrated sysadmins", difficulty: 4 },
        { name: "Reverse DNS lookup keeps returning 'Error 42: Life, the Universe, and Everything'", difficulty: 3 },
        { name: "DNS amplification attack or just the server's cry for help?", difficulty: 5 },
        { name: "Split-horizon DNS confused about which parallel universe it's in", difficulty: 4 },
        { name: "DNSSEC validation errors because keys are questioning their purpose in life", difficulty: 4 },
        { name: "DNS queries being intercepted by a rogue AI convinced it's the 'true' DNS", difficulty: 5 },
        { name: "Zone transfer issues: primary DNS server ghosted the secondary and eloped with a load balancer", difficulty: 3 },
        { name: "DNS server suffering from imposter syndrome, keeps returning 127.0.0.1", difficulty: 2 },
        { name: "TTL values fluctuating based on server's mood swings", difficulty: 3 },
        { name: "Root servers decided to form a union and go on strike", difficulty: 5 },
        { name: "DNS packets lost in the Bermuda Triangle of the internet", difficulty: 4 },
        { name: "Recursive resolver stuck in an infinite loop of self-discovery", difficulty: 3 }
    ];

    const levels = [
        "DNS Novice (Blissfully Unaware)",
        "Packet Peon (Ignorance was Bliss)",
        "Query Quester (Questioning Reality)",
        "Resolution Rogue (Embracing Chaos)",
        "Nameserver Ninja (Master of Illusions)",
        "Legendary DNS Whisperer (Clinically Insane)",
        "Ethereal IP Enchanter (Beyond Mortal Comprehension)",
        "Quantum Query Queller (Schrödinger's DNS)",
        "Omniscient Octet Oracle (All-Knowing, All-Debugging)",
        "Transcendent TLD Tamer (Ascended Beyond Protocols)"
    ];

    const lightThemeMessages = [
        "Warning: Light Theme Detected! Are you sure you want to blind yourself?",
        "Caution: Attempting to banish the darkness. Your DNS powers may weaken!",
        "Alert: Embracing the light side? You know what they say about the dark side having cookies...",
        "Notice: Illumination levels rising to dangerous levels. Proceed with caution!",
        "Heads up: You're about to enter the realm of the GUI lovers. Sure about this?"
    ];

    const darkThemeMessages = [
        "Welcome back to the dark side!",
        "Ah, sweet darkness! Your DNS powers are restored.",
        "The void embraces you once more. Feel the DNS flow through you!",
        "Back in black! Your terminal will thank you.",
        "Darkness falls... and your troubleshooting skills rise!"
    ];

    const lightThemeLogMessages = [
        "User chose to remain in the blinding light. DNS powers weakened.",
        "Embracing the light side. May your GUI be with you.",
        "Brightness intensifies. DNS troubleshooting effectiveness decreased.",
        "User has chosen the path of illumination. Squinting commences.",
        "Light theme activated. Sunglasses recommended for further troubleshooting."
    ];

    const darkThemeLogMessages = [
        "User wisely returned to the dark side. DNS powers restored!",
        "Darkness engulfs the user. DNS mastery intensifies.",
        "Back to the shadows. Your terminal approves.",
        "Dark theme reactivated. DNS packets flow freely once more.",
        "Embracing the void. Your troubleshooting powers grow stronger."
    ];

    const jokes = [
        "Why don't DNS servers go to parties? They have too many cache rules!",
        "How does a DNS server stay in shape? It does nameserver-cises!",
        "What do you call a DNS lookup that takes forever? A re-curse-ive nightmare!",
        "Why did the CNAME record break up with the A record? Too much indirection in the relationship!",
        "What's a DNS admin's favorite dance? The zone transfer!",
        "How does a DNS server introduce itself? 'Hi, I'm here to resolve your issues!'",
        "Why was the DNS server feeling down? It had too many unresolved issues!",
        "What's a DNS server's favorite game? Hide and seek with IP addresses!",
        "Why did the DNS server go to therapy? It had trouble resolving its parent issues!",
        "How do DNS servers communicate? Through root channels!"
    ];

    const diagnoseOptions = [
        { name: "Check DNS server logs", description: "Dive into the abyss of cryptic log messages." },
        { name: "Perform nslookup", description: "Ask the DNS oracle for wisdom." },
        { name: "Verify network connectivity", description: "Ensure the tubes are properly connected." },
        { name: "Check firewall rules", description: "Navigate the labyrinth of security paranoia." },
        { name: "Analyze packet captures", description: "Spy on the secret life of packets." },
        { name: "Consult the DNS ouija board", description: "Commune with the spirits of long-dead packets." },
        { name: "Perform a DNS rain dance", description: "Appease the weather gods of the internet." },
        { name: "Debug with interpretive dance", description: "Express your frustration through the art of movement." },
        { name: "Threaten the DNS server", description: "Sometimes intimidation is the best motivation." },
        { name: "Conduct a séance for lost packets", description: "Attempt to contact the other side... of the network." }
    ];

    const fixOptions = [
        { name: "Restart DNS service", description: "The universal IT solution: turn it off and on again." },
        { name: "Update DNS records", description: "Play 'find and replace' with the fabric of the internet." },
        { name: "Flush DNS cache", description: "Give your DNS a digital laxative." },
        { name: "Reconfigure DNS servers", description: "Rearrange the deck chairs on the Titanic." },
        { name: "Perform zone transfer", description: "Initiate the great migration of DNS data." },
        { name: "Sacrifice a router to the RFC gods", description: "Appease the deities of networking standards." },
        { name: "Apply DNS duct tape", description: "When in doubt, duct tape it out." },
        { name: "Perform DNS yoga", description: "Align your chakras with your IP addresses." },
        { name: "Initiate quantum entanglement", description: "Because normal networking is too mainstream." },
        { name: "Deploy carrier pigeons as backup", description: "RFC 1149 to the rescue!" }
    ];

    const escalateOptions = [
        { name: "Call the network team", description: "Unleash chaos upon another department." },
        { name: "Summon the DNS elders", description: "Attempt to commune with the ancients of the internet." },
        { name: "Initiate emergency change request", description: "Brave the perilous waters of corporate bureaucracy." },
        { name: "Convene a war room meeting", description: "Gather the troops for a symphony of finger-pointing." },
        { name: "Escalate to the cloud", description: "Because problems always look smaller from far away." },
        { name: "Blame it on solar flares", description: "When in doubt, it's always the sun's fault." },
        { name: "Invoke the SLA clause", description: "Time to read the fine print of that contract." },
        { name: "Declare DNS bankruptcy", description: "Sometimes, you just need to start over." },
        { name: "Summon the IT crowd", description: "Have you tried turning it off and on again?" },
        { name: "Retreat to a remote cave", description: "Sometimes the best solution is to go off the grid." }
    ];

    let currentProblem = null, problemsSolved = 0, xp = 0, currentLevel = 0, coffeeConsumed = 0;

    function getRandomElements(array, count) {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function logToTerminal(message) {
        const terminal = document.getElementById('terminal');
        terminal.innerHTML += `> ${message}<br>`;
        terminal.scrollTop = terminal.scrollHeight;
    }

    function startSimulation() {
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('actionButtons').style.display = 'flex';
        newProblem();
        logToTerminal("Welcome to DNS purgatory. Abandon all hope, ye who troubleshoot here.");
        logToTerminal(getRandomElement(jokes));
    }

    function newProblem() {
        currentProblem = getRandomElement(problems);
        document.getElementById('problemDisplay').textContent = `Current Crisis: ${currentProblem.name}`;
        logToTerminal("New DNS catastrophe detected: " + currentProblem.name);
        logToTerminal(getRandomElement(jokes));
        coffeeConsumed += Math.floor(Math.random() * 3) + 1;
    }

    function showOptions(type) {
        const options = type === 'diagnose' ? diagnoseOptions :
                        type === 'fix' ? fixOptions : escalateOptions;
        const container = document.getElementById(`${type}Options`);
        container.innerHTML = '';
        getRandomElements(options, 5).forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.name;
            button.onclick = () => performSpecificAction(type, option);
            container.appendChild(button);
        });
        document.querySelectorAll('.option-buttons').forEach(el => el.style.display = 'none');
        container.style.display = 'flex';
        
        document.getElementById('actionButtons').style.display = 'none';
        document.getElementById('backButton').style.display = 'block';
    }

    function showMainMenu() {
        document.querySelectorAll('.option-buttons').forEach(el => el.style.display = 'none');
        document.getElementById('actionButtons').style.display = 'flex';
        document.getElementById('backButton').style.display = 'none';
        document.getElementById('actionDescription').textContent = '';
    }

    function performSpecificAction(type, option) {
        logToTerminal(`Attempting to ${type}: ${option.name}`);
        document.getElementById('actionDescription').textContent = option.description;
        
        let success = Math.random() < (0.7 - currentProblem.difficulty * 0.1);
        let xpGain = success ? Math.floor(Math.random() * 5) + 5 + currentProblem.difficulty : Math.floor(Math.random() * 3) + 1;
        let message = success ? `${type} successful! You feel ${getRandomElement(['enlightened', 'confused', 'accomplished', 'perplexed', 'victorious', 'bewildered'])}.` : `${type} failed. You feel ${getRandomElement(['deflated', 'determined', 'frustrated', 'amused', 'caffeinated', 'existential'])}.`;
        logToTerminal(message);
        
        if (!success) {
            logToTerminal(getRandomElement(jokes));
        }
        
        xp += xpGain;
        coffeeConsumed += Math.floor(Math.random() * 3) + 1;
        updateStats();
        
        if (success && type === 'fix') {
            problemsSolved++;
            setTimeout(newProblem, 2000);
        }
    }

    function updateStats() {
        document.getElementById('statsDisplay').textContent = `Problems "Solved": ${problemsSolved} | Despair Points: ${xp} | Coffee Consumed: ${coffeeConsumed}`;
        const newLevel = Math.min(Math.floor(xp / 50), levels.length - 1);
        if (newLevel > currentLevel) {
            currentLevel = newLevel;
            document.getElementById('levelDisplay').textContent = `Level ${currentLevel + 1}: ${levels[currentLevel]}`;
            logToTerminal(`Promoted to ${levels[currentLevel]}! Your DNS powers have reached new heights of absurdity.`);
            logToTerminal(getRandomElement(jokes));
        }
        document.getElementById('progressBar').style.width = `${(xp % 50) * 2}%`;
    }

    function toggleTheme() {
        const isCurrentlyDark = !document.body.classList.contains('light-theme');
        if (isCurrentlyDark) {
            showLightThemeMessage();
        } else {
            applyDarkTheme();
        }
    }

    function showLightThemeMessage() {
        const message = getRandomElement(lightThemeMessages);
        document.getElementById('lightThemeMessage').querySelector('p').textContent = message;
        document.getElementById('lightThemeMessage').style.display = 'block';
    }

    function applyLightTheme() {
        document.body.classList.add('light-theme');
        updateMatrixColors();
        document.getElementById('lightThemeMessage').style.display = 'none';
        logToTerminal(getRandomElement(lightThemeLogMessages));
    }

    function applyDarkTheme() {
        document.body.classList.remove('light-theme');
        updateMatrixColors();
        document.getElementById('lightThemeMessage').style.display = 'none';
        logToTerminal(getRandomElement(darkThemeLogMessages));
        showWelcomeBackMessage();
    }

    function showWelcomeBackMessage() {
        const message = getRandomElement(darkThemeMessages);
        const welcomeBack = document.createElement('div');
        welcomeBack.textContent = message;
        welcomeBack.style.position = 'fixed';
        welcomeBack.style.top = '50%';
        welcomeBack.style.left = '50%';
        welcomeBack.style.transform = 'translate(-50%, -50%)';
        welcomeBack.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        welcomeBack.style.color = '#00ff00';
        welcomeBack.style.padding = '20px';
        welcomeBack.style.borderRadius = '10px';
        welcomeBack.style.fontSize = '24px';
        welcomeBack.style.fontWeight = 'bold';
        welcomeBack.style.zIndex = '1000';
        welcomeBack.style.boxShadow = '0 0 20px #00ff00';
        welcomeBack.style.textShadow = '0 0 5px #00ff00';
        document.body.appendChild(welcomeBack);

        setTimeout(() => {
            welcomeBack.style.transition = 'opacity 1s';
            welcomeBack.style.opacity = '0';
            setTimeout(() => welcomeBack.remove(), 1000);
        }, 2000);
    }

    function updateMatrixColors() {
        const isLightTheme = document.body.classList.contains('light-theme');
        matrixColor = isLightTheme ? '#3498db' : '#00ff00';
        matrixBg = isLightTheme ? 'rgba(240, 240, 240, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    }

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('startButton').addEventListener('click', startSimulation);
    document.getElementById('diagnoseButton').addEventListener('click', () => showOptions('diagnose'));
    document.getElementById('fixButton').addEventListener('click', () => showOptions('fix'));
    document.getElementById('escalateButton').addEventListener('click', () => showOptions('escalate'));
    document.getElementById('backButton').addEventListener('click', showMainMenu);
    document.getElementById('keepLightTheme').addEventListener('click', applyLightTheme);
    document.getElementById('revertToDarkTheme').addEventListener('click', applyDarkTheme);

    // Matrix rain effect
    let matrixColor = '#00ff00';
    let matrixBg = 'rgba(0, 0, 0, 0.05)';

    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const fontSize = 10;
        const columns = canvas.width / fontSize;

        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            ctx.fillStyle = matrixBg;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = matrixColor;
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(draw, 33);
    }
});

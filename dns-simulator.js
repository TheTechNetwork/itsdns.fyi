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
        { name: "Zone transfer issues: primary DNS server ghosted the secondary and eloped with a load balancer", difficulty: 3 }
    ];

    const levels = [
        "DNS Novice (Blissfully Unaware)",
        "Packet Peon (Ignorance was Bliss)",
        "Query Quester (Questioning Reality)",
        "Resolution Rogue (Embracing Chaos)",
        "Nameserver Ninja (Master of Illusions)",
        "Legendary DNS Whisperer (Clinically Insane)"
    ];

    let currentProblem = null, problemsSolved = 0, xp = 0, currentLevel = 0, coffeeConsumed = 0;

    function logToTerminal(message) {
        const terminal = document.getElementById('terminal');
        terminal.innerHTML += `> ${message}<br>`;
        terminal.scrollTop = terminal.scrollHeight;
    }

    function startSimulation() {
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('actionButtons').style.display = 'block';
        newProblem();
        logToTerminal("Welcome to DNS purgatory. Abandon all hope, ye who troubleshoot here.");
    }

    function newProblem() {
        currentProblem = problems[Math.floor(Math.random() * problems.length)];
        document.getElementById('problemDisplay').textContent = `Current Crisis: ${currentProblem.name}`;
        logToTerminal("New DNS catastrophe detected: " + currentProblem.name);
        coffeeConsumed++;
    }

    function performAction(action) {
        let success = Math.random() < (0.7 - currentProblem.difficulty * 0.1);
        let xpGain = success ? 5 + currentProblem.difficulty : 2;
        let message = success ? `${action} successful!` : `${action} failed.`;
        logToTerminal(`${action} action attempted: ${message}`);
        xp += xpGain;
        coffeeConsumed += Math.floor(Math.random() * 3) + 1;
        updateStats();
        if (success && action === 'fix') {
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
            logToTerminal(`Promoted to ${levels[currentLevel]}!`);
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
        document.getElementById('lightThemeMessage').style.display = 'block';
    }

    function applyLightTheme() {
        document.body.classList.add('light-theme');
        updateMatrixColors();
        document.getElementById('lightThemeMessage').style.display = 'none';
        logToTerminal("User chose to remain in the blinding light. DNS powers weakened.");
    }

    function applyDarkTheme() {
        document.body.classList.remove('light-theme');
        updateMatrixColors();
        logToTerminal("User wisely returned to the dark side. DNS powers restored!");
    }

    function updateMatrixColors() {
        const isLightTheme = document.body.classList.contains('light-theme');
        matrixColor = isLightTheme ? '#3498db' : '#00ff00';
        matrixBg = isLightTheme ? 'rgba(240, 240, 240, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    }

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('startButton').addEventListener('click', startSimulation);
    document.getElementById('diagnoseButton').addEventListener('click', () => performAction('diagnose'));
    document.getElementById('fixButton').addEventListener('click', () => performAction('fix'));
    document.getElementById('escalateButton').addEventListener('click', () => performAction('escalate'));
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

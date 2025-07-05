let h = 0, m = 0, s = 0, ms = 0;
let delay = 10;
let interval = null;

// Utilitário para formatar tempo com dois dígitos
const format = (val) => val < 10 ? "0" + val : val;

// Seletores centralizados
const elements = {
    hour: document.getElementById('hour'),
    minute: document.getElementById('minute'),
    second: document.getElementById('second'),
    milisecond: document.getElementById('milisecond'),
    dataHora: document.getElementById('dataHora'),
    startBTN: document.getElementById('start'),
    stopBTN: document.getElementById('stop'),
    resetBTN: document.getElementById('reset'),
};

// Atualiza a exibição do tempo
function updateDisplay() {
    elements.milisecond.innerText = format(ms);
    elements.second.innerText = format(s);
    elements.minute.innerText = format(m);
    elements.hour.innerText = format(h);
}

// Atualiza a data e hora atual
function updateDateTime() {
    const now = new Date();
    const day = format(now.getDate());
    const month = format(now.getMonth() + 1);
    const year = now.getFullYear();
    const hours = format(now.getHours());
    const minutes = format(now.getMinutes());
    const seconds = format(now.getSeconds());

    elements.dataHora.innerText = `${day}/${month}/${year} ${hours}h ${minutes}m ${seconds}s`;
}

// Lógica do cronômetro
function runTimer() {
    ms++;
    if (ms >= 99) {
        ms = 0;
        s++;
        if (s >= 60) {
            s = 0;
            m++;
            if (m >= 60) {
                m = 0;
                h++;
            }
        }
        updateDateTime();
    }
    updateDisplay();
}

// Atualiza visibilidade dos botões
function updateButtons({ start, stop, reset }) {
    elements.startBTN.style.display = start ? "block" : "none";
    elements.stopBTN.style.display = stop ? "block" : "none";
    elements.resetBTN.style.display = reset ? "block" : "none";
}

// Botões

function start() {
    if (!interval) {
        interval = setInterval(runTimer, delay);
        updateButtons({ start: false, stop: true, reset: true });
    }
}

function stop() {
    clearInterval(interval);
    interval = null;
    updateButtons({ start: true, stop: false, reset: true });
}

function reset() {
    stop();
    h = m = s = ms = 0;
    updateDisplay();
    updateDateTime();
    updateButtons({ start: true, stop: false, reset: false });
}

// Inicializa botões
elements.startBTN.addEventListener('click', start);
elements.stopBTN.addEventListener('click', stop);
elements.resetBTN.addEventListener('click', reset);

// Estado inicial
reset();

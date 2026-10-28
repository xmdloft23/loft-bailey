// lib/Branding.js
// The "LOFT BAILEY" console banner: printed once per process.
// Disable it with { loftBanner: false } in socket config, or LOFT_BAILEY_BANNER=false in env.
import { LIBRARY_NAME, LOFT_BAILEY_VERSION } from './Defaults/index.js';

const c = {
	reset: '\x1b[0m',
	bold: '\x1b[1m',
	dim: '\x1b[2m',
	cyan: '\x1b[36m',
	green: '\x1b[32m',
	magenta: '\x1b[35m',
	yellow: '\x1b[33m',
	white: '\x1b[37m',
	blue: '\x1b[34m',
	red: '\x1b[31m'
};

function colorOk() {
	try {
		return !!(process.stdout && process.stdout.isTTY) && process.env.NO_COLOR === undefined;
	} catch {
		return false;
	}
}

let printed = false;

export function printLoftBaileyBanner({ enabled = true } = {}) {
	if (printed || !enabled || process.env.LOFT_BAILEY_BANNER === 'false') return;
	printed = true;

	const useColor = colorOk();
	const wrap = (code, text) => (useColor ? code + text + c.reset : text);

	// ASCII Art (Magenta & Bold)
	const asciiArt = `
  _      ____  ______ _______   ____    _    ___ _     _______ 
 | |    / __ \\|  ____|__   __| |  _ \\  / \\  |_ _| |   |  ____|
 | |   | |  | | |__     | |    | |_) |/ _ \\  | || |   | |__   
 | |   | |  | |  __|    | |    |  _ < ___ \\ | || |___|  __|  
 | |___| |__| | |       | |    | |_) / ___ \\| || |____| |____ 
 |______\\____/|_|       |_|    |____/_/   \\_\\___|______|______|
    `;

	const title = wrap(c.bold + c.magenta, asciiArt);
	
	// Rangi tofauti kwa kila kipengele
	const details = [
		wrap(c.yellow + c.bold, '  Owner    » ') + wrap(c.white, 'Mr Loft'),
		wrap(c.cyan, '  Library  » ') + wrap(c.green, LIBRARY_NAME),
		wrap(c.blue, '  Version  » ') + wrap(c.yellow, LOFT_BAILEY_VERSION),
		wrap(c.magenta, '  Node.js  » ') + wrap(c.white, process.version),
		wrap(c.red, '  AIRich   » ') + wrap(c.green + c.bold, 'Ready'),
	];

	// Subtitle (Dim)
	const subtitle = wrap(c.dim, '  Enhanced WhatsApp socket — AIRich rich responses built in\n');

	// Calculate width for the separator
	const width = Math.max(...details.map((l) => stripAnsi(l).length), 50) + 4;
	const bar = wrap(c.magenta, '─'.repeat(width));

	// Print the banner
	console.log('');
	console.log(bar);
	console.log(title);
	console.log(bar);
	console.log('');
	console.log(details.join('\n'));
	console.log('');
	console.log(subtitle);
	console.log(bar);
	console.log('');
}

function stripAnsi(s) {
	return s.replace(/\x1b\[[0-9;]*m/g, '');
}
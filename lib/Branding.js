// lib/Branding.js
// The "LOFT BAILEY" console banner: printed once per process, the first time makeWASocket() runs,
// so a panel console shows a clear, branded line instead of the library loading silently.
// Disable it with  { loftBanner: false }  in the socket config, or  LOFT_BAILEY_BANNER=false  in the env.
import { LIBRARY_NAME, LOFT_BAILEY_VERSION } from './Defaults/index.js';

const c = {
	reset: '\x1b[0m',
	bold: '\x1b[1m',
	dim: '\x1b[2m',
	cyan: '\x1b[36m',
	green: '\x1b[32m',
	magenta: '\x1b[35m',
	yellow: '\x1b[33m',
	white: '\x1b[37m'
};

// true only when the stream is a real terminal (a panel console is; a piped log file is not,
// and there printing color codes would just leave `\x1b[36m` garbage in the log).
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

	const title = 'L O F T   B A I L E Y';
	const lines = [
		wrap(c.bold + c.magenta, title),
		wrap(c.dim, 'Enhanced WhatsApp socket — AIRich rich responses built in'),
		'',
		wrap(c.cyan, 'library  ') + wrap(c.white, LIBRARY_NAME),
		wrap(c.cyan, 'version  ') + wrap(c.white, LOFT_BAILEY_VERSION),
		wrap(c.cyan, 'node     ') + wrap(c.white, process.version),
		wrap(c.green, 'AIRich   ') + wrap(c.white, 'ready')
	];

	const width = Math.max(...lines.map((l) => stripAnsi(l).length)) + 4;
	const bar = wrap(c.magenta, '─'.repeat(width));

	console.log('');
	console.log(bar);
	for (const l of lines) console.log('  ' + l);
	console.log(bar);
	console.log('');
}

function stripAnsi(s) {
	return s.replace(/\x1b\[[0-9;]*m/g, '');
}

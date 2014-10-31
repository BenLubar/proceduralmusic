var ac = new AudioContext();

var Octave = 12,
	// G♭ Major
	A = -1,
	B = 1,
	C = 2,
	D = 4,
	E = 6,
	F = 8,
	G = 9;

var Beat, Thinkers = [];

function play(volume, notes) {
	var gain = ac.createGain();
	gain.connect(ac.destination);

	var oscillator = ac.createOscillator();
	oscillator.connect(gain);

	var beat = 0;

	function think(add) {
		function t2f(tone) {
			return Math.pow(2, tone / 12) * 440;
		}

		beat += add;
		var b = beat;
		var note;
		notes.forEach(function(n) {
			if (b < 0) {
				return;
			}
			if (b < n[1]) {
				note = n;
			}
			b -= n[1];
		});
		if (note === undefined) {
			note = notes[0];
			beat = 0.0;
		}

		if (note[0] === false) {
			gain.gain.value = 0;
		} else {
			gain.gain.value = volume;
			oscillator.frequency.value = t2f(note[0]);
		}
	}
	think(0);

	oscillator.start();

	Thinkers.push(think);

	return {
		setVolume: function(v) {
			volume = v;
		},
		getVolume: function() {
			return volume;
		},
	};
}

function think() {
	Thinkers.forEach(function(f) {
		f(0.0625);
	});
}

function slider(name, player) {
	var input = document.createElement('input');
	input.type = 'range';
	input.min = 0;
	input.max = 10000;
	input.value = player.getVolume() * 10000;
	input.onchange = function() {
		player.setVolume(+input.value / 10000);
	};
	input.title = name;
	document.body.appendChild(input);
}

var wubwubwub = play(0.1, [
	[G - 3 * Octave, 1.5], [D - 2 * Octave, 1.5], [G - 2 * Octave, 5.0],
	[F-1-3 * Octave, 1.5], [C - 2 * Octave, 1.5], [F-1-2 * Octave, 5.0],
	[E - 3 * Octave, 1.5], [B - 2 * Octave, 1.5], [E - 2 * Octave, 5.0],
	[D+1-3 * Octave, 1.5], [A+1-2 * Octave, 1.5], [D+1-2 * Octave, 5.0]
]);
slider("wubwubwub", wubwubwub);

var dingdingdingding = play(0.05, [
	[D, 0.4375], [false, 0.0625],
	[D, 0.4375], [false, 0.0625],
	[D, 0.4375], [false, 0.0625],
	[D, 0.5   ], [false, 6.0   ]
]);
slider("dingdingdingding", dingdingdingding);

var beep = play(0.05, [
	[false, 2.9375], [A, 0.0625], [D + Octave, 1.0]
]);
slider("beep", beep);

var dududu = play(0.05, [
	[false, 2.0], [C - Octave, 0.5], [D - Octave, 0.5], [C - Octave, 0.5], [false, 0.5]
]);
slider("dududu", dududu);

var doop = play(0.1, [
	[A, 0.0625], [false, 3.9375], [G - 4 * Octave, 0.5], [false, 3.5]
]);
slider("doop", doop);

var input = document.createElement('input');
input.type = 'range';
input.min = 1;
input.max = 1000;
input.value = 166;
input.title = 'bpm';
Beat = 60 / input.value;
var thinkTimer = setInterval(think, Beat * 1000 * 0.0625);
input.onchange = function() {
	Beat = 60 / input.value;
	clearInterval(thinkTimer);
	thinkTimer = setInterval(think, Beat * 1000 * 0.0625);
};
document.body.appendChild(input);

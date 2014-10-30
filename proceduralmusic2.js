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

function play(volume, bpm, notes) {
	var gain = ac.createGain();
	gain.connect(ac.destination);

	var oscillator = ac.createOscillator();
	oscillator.connect(gain);

	function think() {
		function t2f(tone) {
			return Math.pow(2, tone / 12) * 440;
		}

		var Beat = 60 / bpm;

		var note = notes.shift();
		notes.push(note);

		if (note[0] === false) {
			gain.gain.value = 0;
		} else {
			gain.gain.value = volume;
			oscillator.frequency.value = t2f(note[0]);
		}

		setTimeout(think, note[1] * Beat * 1000);
	}

	think();
	oscillator.start();

	return {
		setVolume: function(v) {
			volume = v;
		},
		getVolume: function() {
			return volume;
		},
		setBPM: function(v) {
			bpm = v;
		},
		getBPM: function() {
			return bpm;
		},
	};
}

var players = [];

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
	players.push(player);
}

var wubwubwub = play(0.1, 166, [
	[G - 3 * Octave, 1.5], [D - 2 * Octave, 1.5], [G - 2 * Octave, 5.0],
	[F-1-3 * Octave, 1.5], [C - 2 * Octave, 1.5], [F-1-2 * Octave, 5.0],
	[E - 3 * Octave, 1.5], [B - 2 * Octave, 1.5], [E - 2 * Octave, 5.0],
	[D+1-3 * Octave, 1.5], [A+1-2 * Octave, 1.5], [D+1-2 * Octave, 5.0]
]);
slider("wubwubwub", wubwubwub);

var dingdingdingding = play(0.05, 166, [
	[D, 0.45], [false, 0.05],
	[D, 0.45], [false, 0.05],
	[D, 0.45], [false, 0.05],
	[D, 0.5],  [false, 6.0]
]);
slider("dingdingdingding", dingdingdingding);

var beep = play(0.05, 166, [
	[false, 2.95], [A, 0.05], [D + Octave, 1.0]
]);
slider("beep", beep);

var dududu = play(0.05, 166, [
	[false, 2.0], [C - Octave, 0.5], [D - Octave, 0.5], [C - Octave, 0.5], [false, 0.5]
]);
slider("dududu", dududu);

var doop = play(0.1, 166, [
	[A, 0.05], [false, 3.95], [G - 4 * Octave, 4.0]
]);
slider("doop", doop);

var input = document.createElement('input');
input.type = 'range';
input.min = 1;
input.max = 1000;
input.value = players[0].getBPM();
input.onchange = function() {
	players.forEach(function(player) {
		player.setBPM(+input.value);
	});
};
document.body.appendChild(input);

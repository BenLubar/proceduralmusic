var ac = new AudioContext();

var note = function(volume, tone, start, duration) {
	var gain = ac.createGain();
	gain.connect(ac.destination);
	gain.gain.value = volume;

	var oscillator = ac.createOscillator();
	oscillator.connect(gain);
	oscillator.frequency.value = Math.pow(2, tone / 12) * 440;
	oscillator.start(ac.currentTime + start);
	oscillator.stop(ac.currentTime + start + duration);

	return oscillator;
};

var Octave = 12,
	/*
	// C Major
	A = 0,
	B = 2,
	C = 3,
	D = 5,
	E = 7,
	F = 8,
	G = 10
	*/
	// G♭ Major
	A = -1,
	B = 1,
	C = 2,
	D = 4,
	E = 6,
	F = 8,
	G = 9;

var think = function() {
	var Beat = 60 / 166, // 166 bpm
		forte = 0.3,
		mezzopiano = 0.1;

	// Converted from https://www.youtube.com/watch?v=LcftiDwHcpE

	// Piano 1
	for (var i = 0; i < 13; i++) {
		note(mezzopiano, G - Octave, i * 8 * Beat + 0.0 * Beat, 0.5 * Beat);
		note(mezzopiano, D         , i * 8 * Beat + 0.5 * Beat, 0.5 * Beat);
		note(mezzopiano, G         , i * 8 * Beat + 1.0 * Beat, 0.5 * Beat);
		note(mezzopiano, A + Octave, i * 8 * Beat + 1.5 * Beat, 0.5 * Beat);
		note(mezzopiano, D         , i * 8 * Beat + 2.0 * Beat, 0.5 * Beat);
		note(mezzopiano, G         , i * 8 * Beat + 2.5 * Beat, 0.5 * Beat);
		note(mezzopiano, A + Octave, i * 8 * Beat + 3.0 * Beat, 0.5 * Beat);
		note(mezzopiano, D         , i * 8 * Beat + 3.5 * Beat, 0.5 * Beat);
		note(mezzopiano, C + Octave, i * 8 * Beat + 4.0 * Beat, 0.5 * Beat);
		note(mezzopiano, D         , i * 8 * Beat + 4.5 * Beat, 0.5 * Beat);
		note(mezzopiano, C + Octave, i * 8 * Beat + 5.0 * Beat, 0.5 * Beat);
		note(mezzopiano, B + Octave, i * 8 * Beat + 5.5 * Beat, 0.5 * Beat);
		note(mezzopiano, D         , i * 8 * Beat + 6.0 * Beat, 0.5 * Beat);
		note(mezzopiano, B + Octave, i * 8 * Beat + 6.5 * Beat, 0.5 * Beat);
		note(mezzopiano, A + Octave, i * 8 * Beat + 7.0 * Beat, 0.5 * Beat);
		note(mezzopiano, G         , i * 8 * Beat + 7.5 * Beat, 0.5 * Beat);
	}

	note(mezzopiano, G - Octave, 104.0 * Beat, 0.5 * Beat);
	note(mezzopiano, D         , 104.5 * Beat, 0.5 * Beat);
	note(mezzopiano, G         , 105.0 * Beat, 0.5 * Beat);
	note(mezzopiano, A + Octave, 105.5 * Beat, 0.5 * Beat);
	note(mezzopiano, D         , 106.0 * Beat, 0.5 * Beat);
	note(mezzopiano, G         , 106.5 * Beat, 0.5 * Beat);
	note(mezzopiano, A + Octave, 107.0 * Beat, 0.5 * Beat);
	note(mezzopiano, D         , 107.5 * Beat, 0.5 * Beat);
	note(mezzopiano, G         , 108.0 * Beat, 0.5 * Beat);
	note(mezzopiano, D         , 108.5 * Beat, 0.5 * Beat);
	note(mezzopiano, C         , 109.0 * Beat, 0.5 * Beat);
	note(mezzopiano, B         , 109.5 * Beat, 0.5 * Beat);
	note(mezzopiano, G - Octave, 110.0 * Beat, 0.5 * Beat);
	note(mezzopiano, D - Octave, 110.5 * Beat, 0.5 * Beat);
	note(mezzopiano, C - Octave, 111.0 * Beat, 0.5 * Beat);
	note(mezzopiano, B - Octave, 111.5 * Beat, 0.5 * Beat);

	// Piano 2 Treble
	note(forte, D - Octave,  8.0 * Beat, 5.0 * Beat);
	note(forte, G - Octave, 13.0 * Beat, 1.0 * Beat);
	note(forte, A         , 14.0 * Beat, 1.0 * Beat);
	note(forte, C         , 15.0 * Beat, 1.0 * Beat - 0.001);
	note(forte, C         , 16.0 * Beat, 1.5 * Beat);
	note(forte, B         , 17.5 * Beat, 0.5 * Beat - 0.001);
	note(forte, B         , 18.0 * Beat, 4.0 * Beat);
	note(forte, A         , 22.0 * Beat, 1.0 * Beat);
	note(forte, G - Octave, 23.0 * Beat, 1.0 * Beat);
	note(forte, D         , 24.0 * Beat, 3.0 * Beat);
	note(forte, G - Octave, 27.0 * Beat, 3.0 * Beat);
	note(forte, G         , 30.0 * Beat, 2.0 * Beat - 0.001);
	note(forte, G         , 32.0 * Beat, 6.5 * Beat);
	note(forte, A + Octave, 38.5 * Beat, 1.0 * Beat);
	note(forte, G         , 39.5 * Beat, 0.5 * Beat);
	note(forte, D + Octave, 40.0 * Beat, 8.0 * Beat);

	note(forte, B - Octave, 50.0 * Beat, 0.5 * Beat);
	note(forte, C - Octave, 50.5 * Beat, 0.5 * Beat);
	note(forte, D - Octave, 51.0 * Beat, 0.5 * Beat - 0.001);
	note(forte, D - Octave, 51.5 * Beat, 1.5 * Beat);
	note(forte, G - Octave, 53.0 * Beat, 1.0 * Beat);
	note(forte, F - Octave, 54.0 * Beat, 1.0 * Beat);
	note(forte, G - Octave, 55.0 * Beat, 1.0 * Beat);
	note(forte, A         , 56.0 * Beat, 1.0 * Beat);
	note(forte, B         , 57.0 * Beat, 0.5 * Beat);
	note(forte, G - Octave, 57.5 * Beat, 5.5 * Beat);

	note(forte, F - Octave, 63.0 * Beat, 0.5 * Beat);
	note(forte, G - Octave, 63.5 * Beat, 0.5 * Beat);
	note(forte, D         , 64.0 * Beat, 1.5 * Beat);
	note(forte, G - Octave, 65.5 * Beat, 0.5 * Beat - 0.001);
	note(forte, G - Octave, 66.0 * Beat, 5.0 * Beat - 0.001);
	note(forte, G - Octave, 71.0 * Beat, 0.5 * Beat - 0.001);
	note(forte, G - Octave, 71.5 * Beat, 0.5 * Beat - 0.001);
	note(forte, G - Octave, 72.0 * Beat, 2.0 * Beat);
	note(forte, A         , 74.5 * Beat, 0.5 * Beat);
	note(forte, G - Octave, 75.0 * Beat, 0.5 * Beat);
	note(forte, F - Octave, 75.5 * Beat, 4.5 * Beat);

	note(forte, B - Octave, 80.0 * Beat, 2.0 * Beat);
	note(forte, A - Octave, 82.5 * Beat, 0.5 * Beat);
	note(forte, G - 2 * Octave, 83.0 * Beat, 0.5 * Beat);
	note(forte, D - Octave, 83.5 * Beat, 1.5 * Beat);
	note(forte, G - Octave, 86.0 * Beat, 1.0 * Beat);
	note(forte, A         , 87.0 * Beat, 1.0 * Beat);
	note(forte, C         , 88.0 * Beat, 1.5 * Beat);
	note(forte, B         , 89.5 * Beat, 0.5 * Beat - 0.001);
	note(forte, B         , 90.0 * Beat, 4.0 * Beat);
	note(forte, D         , 94.0 * Beat, 1.0 * Beat);
	note(forte, C         , 95.0 * Beat, 1.0 * Beat);
	note(forte, B         , 96.0 * Beat, 0.5 * Beat);
	note(forte, C         , 96.5 * Beat, 0.5 * Beat);
	note(forte, B         , 97.0 * Beat, 0.5 * Beat);
	note(forte, G - Octave, 97.5 * Beat, 1.0 * Beat);
	note(forte, D - Octave, 98.5 * Beat, 2.0 * Beat);
	note(forte, A         , 100.5 * Beat, 0.5 * Beat);
	note(forte, G - Octave, 101.0 * Beat, 0.5 * Beat);
	note(forte, F - Octave, 101.5 * Beat, 0.5 * Beat);
	note(forte, E - Octave, 102.0 * Beat, 0.5 * Beat);
	note(forte, F - Octave, 102.5 * Beat, 1.5 * Beat);
	note(forte, G - Octave, 104.0 * Beat, 0.5 * Beat);
	note(forte, G - Octave, 105.5 * Beat, 0.5 * Beat);
	note(forte, G - Octave, 107.0 * Beat, 1.5 * Beat);

	// Piano 2 Bass
	note(forte, G - 3 * Octave,  8.0 * Beat, 1.5 * Beat);
	note(forte, D - 2 * Octave,  9.5 * Beat, 1.5 * Beat);
	note(forte, G - 2 * Octave, 11.0 * Beat, 5.0 * Beat);

	note(forte, F-1-3 * Octave, 16.0 * Beat, 1.5 * Beat);
	note(forte, C - 2 * Octave, 17.5 * Beat, 1.5 * Beat);
	note(forte, F-1-2 * Octave, 19.0 * Beat, 5.0 * Beat);

	note(forte, E - 3 * Octave, 24.0 * Beat, 1.5 * Beat);
	note(forte, B - 2 * Octave, 25.5 * Beat, 1.5 * Beat);
	note(forte, E - 2 * Octave, 27.0 * Beat, 5.0 * Beat);

	note(forte, D+1-3 * Octave, 32.0 * Beat, 1.5 * Beat);
	note(forte, A+1-2 * Octave, 33.5 * Beat, 1.5 * Beat);
	note(forte, D+1-2 * Octave, 35.0 * Beat, 5.0 * Beat);

	for (var i = 0; i < 24; i++) {
		note(forte, G - 2 * Octave, 40.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 8; i++) {
		note(forte, F - 2 * Octave, 52.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 8; i++) {
		note(forte, E - 2 * Octave, 56.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 8; i++) {
		note(forte, D - 2 * Octave, 60.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 8; i++) {
		note(forte, C - 2 * Octave, 64.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 8; i++) {
		note(forte, C+1-2 * Octave, 68.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 16; i++) {
		note(forte, D - 2 * Octave, 72.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 8; i++) {
		note(forte, G - 2 * Octave, 80.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 8; i++) {
		note(forte, F-1-2 * Octave, 84.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 8; i++) {
		note(forte, C - 2 * Octave, 88.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 16; i++) {
		note(forte, D+1-2 * Octave, 92.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 4; i++) {
		note(forte, C+1-2 * Octave, 100.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	for (var i = 0; i < 4; i++) {
		note(forte, D+1-2 * Octave, 102.0 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
	note(forte, D+1-2 * Octave, 104.0 * Beat, 0.5 * Beat);
	note(forte, E+1-2 * Octave, 105.5 * Beat, 0.5 * Beat);
	note(forte, G - 2 * Octave, 107.0 * Beat, 1.5 * Beat);
	for (var i = 0; i < 7; i++) {
		note(forte, G - 3 * Octave, 108.5 * Beat + i * 0.5 * Beat, 0.5 * Beat - 0.001);
	}
};

think();
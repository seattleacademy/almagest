function dokeydown(e) {
    if (e.key == "j") {
        var cues = textTrack.cues;
        start = 0;
        for (let i = 0; i < cues.length; i++) {
            if (cues[i].startTime < wavesurfer.getCurrentTime()) {
                start = cues[i].startTime;
                end = cues[i].endTime;

            } else {
                wavesurfer.play(start, end);
                break;
            }
        }
    }
    if (e.key == "l") wavesurfer.setCurrentTime(wavesurfer.getCurrentTime() + 5);
    // if (e.key == "j") wavesurfer.setCurrentTime(wavesurfer.getCurrentTime()-5);
    if (e.key == "k") wavesurfer.playPause();
    if (e.key == "5") wavesurfer.setPlaybackRate(1);
    if (e.key == "4") wavesurfer.setPlaybackRate(.75);
    if (e.key == "3") wavesurfer.setPlaybackRate(.5);
    if (e.key == "6") wavesurfer.setPlaybackRate(1.5);
    if (e.key == "7") wavesurfer.setPlaybackRate(2);

    e.stopPropagation();
}

document.addEventListener("keydown", dokeydown);
"use client";

import { useEffect, useRef, useState } from "react";

const tracks = [
  {
    "title": "Mujhse Mohabbat Ka",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/1.%20Mujhse%20Mohabbat%20Ka.mp3"
  },
  {
    "title": "Tumsa Koi Pyaara",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/2.%20Tumsa%20Koi%20Pyaara.mp3"
  },
  {
    "title": "Woh Meri Neend Mera Chain",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/3.%20Woh%20Meri%20Neend%20Mera%20Chain.mp3"
  },
  {
    "title": "Saaton Janam Main Tere",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/4.%20Saaton%20Janam%20Main%20Tere.mp3"
  },
  {
    "title": "Oye Raju",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/5.%20Oye%20Raju.mp3"
  },
  {
    "title": "Bahut Pyar Karte Hai - Male Version",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/6.%20Bahut%20Pyar%20Karte%20Hai%20-%20Male%20Version.mp3"
  },
  {
    "title": "Jeeta Tha Jiske Liye (From \"Dilwale\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/7.%20Jeeta%20Tha%20Jiske%20Liye%20(From%20%22Dilwale%22).mp3"
  },
  {
    "title": "Teri Umeed Tera Intezar (From \"Deewana\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/8.%20Teri%20Umeed%20Tera%20Intezar%20(From%20%22Deewana%22).mp3"
  },
  {
    "title": "Tumse Milne Ko Dil",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/9.%20Tumse%20Milne%20Ko%20Dil.mp3"
  },
  {
    "title": "Ek Sanam Chahiye Aashiqui Ke Liye",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/10.%20Ek%20Sanam%20Chahiye%20Aashiqui%20Ke%20Liye.mp3"
  },
  {
    "title": "Tu Pyar Hai Kisi Aur Ka",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/11.%20Tu%20Pyar%20Hai%20Kisi%20Aur%20Ka.mp3"
  },
  {
    "title": "Sochenge Tumhe Pyar (From \"Deewana\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/12.%20Sochenge%20Tumhe%20Pyar%20(From%20%22Deewana%22).mp3"
  },
  {
    "title": "Raah Mein Unse Mulaqat",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/13.%20Raah%20Mein%20Unse%20Mulaqat.mp3"
  },
  {
    "title": "Main Duniya Bhula Doonga",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/14.%20Main%20Duniya%20Bhula%20Doonga.mp3"
  },
  {
    "title": "Tumhein Apna Banane Ki Kasam Khai Hai",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/15.%20Tumhein%20Apna%20Banane%20Ki%20Kasam%20Khai%20Hai.mp3"
  },
  {
    "title": "Tum Dil Ki Dhadkan Mein",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/16.%20Tum%20Dil%20Ki%20Dhadkan%20Mein.mp3"
  },
  {
    "title": "Dulhe Ka Sehra - Male Version",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/17.%20Dulhe%20Ka%20Sehra%20-%20Male%20Version.mp3"
  },
  {
    "title": "Maine Pyar Tumhi Se Kiya Hai",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/18.%20Maine%20Pyar%20Tumhi%20Se%20Kiya%20Hai.mp3"
  },
  {
    "title": "Ab Tere Bin",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/19.%20Ab%20Tere%20Bin.mp3"
  },
  {
    "title": "Kitna Haseen Chehra (From \"Dilwale\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/20.%20Kitna%20Haseen%20Chehra%20(From%20%22Dilwale%22).mp3"
  },
  {
    "title": "Tujhko Na Dekhun (From \"Jaanwar\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/21.%20Tujhko%20Na%20Dekhun%20(From%20%22Jaanwar%22).mp3"
  },
  {
    "title": "Tum Se Achcha Kaun Hai Chand Tare Phool",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/22.%20Tum%20Se%20Achcha%20Kaun%20Hai%20Chand%20Tare%20Phool.mp3"
  },
  {
    "title": "Tum Dil Ki Dhadkan Mein (From \"Dhadkan\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/23.%20Tum%20Dil%20Ki%20Dhadkan%20Mein%20(From%20%22Dhadkan%22).mp3"
  },
  {
    "title": "Sab Kuchh Bhula Diya (Female)",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/25.%20Sab%20Kuchh%20Bhula%20Diya%20(Female).mp3"
  },
  {
    "title": "Dheere Dheere Pyar Ko",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/26.%20Dheere%20Dheere%20Pyar%20Ko.mp3"
  },
  {
    "title": "Jeeye to Jeeye Kaise",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/28.%20Jeeye%20to%20Jeeye%20Kaise.mp3"
  },
  {
    "title": "Hum Laakh Chupaye",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/29.%20Hum%20Laakh%20Chupaye.mp3"
  },
  {
    "title": "Nahin Yeh Ho Nahin Sakta",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/30.%20Nahin%20Yeh%20Ho%20Nahin%20Sakta.mp3"
  },
  {
    "title": "Kahin Mujhe Pyar Hua Toh Nahin",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/31.%20Kahin%20Mujhe%20Pyar%20Hua%20Toh%20Nahin.mp3"
  },
  {
    "title": "Tera Naam Liya",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/32.%20Tera%20Naam%20Liya.mp3"
  },
  {
    "title": "Kitna Pyaara Tujhe Rabne Banaya",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/33.%20Kitna%20Pyaara%20Tujhe%20Rabne%20Banaya.mp3"
  },
  {
    "title": "Hum Pyaar Hai Tumhare",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/34.%20Hum%20Pyaar%20Hai%20Tumhare.mp3"
  },
  {
    "title": "Ek Ladki Ko Dekha",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/35.%20Ek%20Ladki%20Ko%20Dekha.mp3"
  },
  {
    "title": "Tere Dar Par Sanam - Male Version",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/36.%20Tere%20Dar%20Par%20Sanam%20-%20Male%20Version.mp3"
  },
  {
    "title": "Chura Ke Dil Mera - From \"Main Khiladi Tu Anari\"",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/37.%20Chura%20Ke%20Dil%20Mera%20-%20From%20%22Main%20Khiladi%20Tu%20Anari%22.mp3"
  },
  {
    "title": "Tu Meri Zindagi Hai",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/38.%20Tu%20Meri%20Zindagi%20Hai.mp3"
  },
  {
    "title": "Chori Chori Dil Tera",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/39.%20Chori%20Chori%20Dil%20Tera.mp3"
  },
  {
    "title": "Ek Aaisi Ladki (From \"Dilwale\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/40.%20Ek%20Aaisi%20Ladki%20(From%20%22Dilwale%22).mp3"
  },
  {
    "title": "Achchha Sila Diya Toone Mere Pyar Ka",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/41.%20Achchha%20Sila%20Diya%20Toone%20Mere%20Pyar%20Ka.mp3"
  },
  {
    "title": "Tere Dard Se Dil - Jhankar Beats",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/42.%20Tere%20Dard%20Se%20Dil%20-%20Jhankar%20Beats.mp3"
  },
  {
    "title": "Na Kajare Ki Dhar (With Jhankar Beats)",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/43.%20Na%20Kajare%20Ki%20Dhar%20(With%20Jhankar%20Beats).mp3"
  },
  {
    "title": "Hum Yaar Hai Tumhare",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/44.%20Hum%20Yaar%20Hai%20Tumhare.mp3"
  },
  {
    "title": "Aitbaar Nahi Karna",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/45.%20Aitbaar%20Nahi%20Karna.mp3"
  },
  {
    "title": "Dekha Hai Pehli Baar (From \"Saajan\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/46.%20Dekha%20Hai%20Pehli%20Baar%20(From%20%22Saajan%22).mp3"
  },
  {
    "title": "Ankh Hai Bhari Bhari (Male Version) - From \"Tum Se Achcha Kaun Hai\"",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/47.%20Ankh%20Hai%20Bhari%20Bhari%20(Male%20Version)%20-%20From%20%22Tum%20Se%20Achcha%20Kaun%20Hai%22.mp3"
  },
  {
    "title": "Kya Karte They Sajna",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/48.%20Kya%20Karte%20They%20Sajna.mp3"
  },
  {
    "title": "Dekhne Walon Ne - From ''Chori Chori Chupke Chupke''",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/49.%20Dekhne%20Walon%20Ne%20-%20From%20''Chori%20Chori%20Chupke%20Chupke''.mp3"
  },
  {
    "title": "Tum To Thehre Pardesi",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/50.%20Tum%20To%20Thehre%20Pardesi.mp3"
  },
  {
    "title": "Chehra Kya Dekhte Ho",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/51.%20Chehra%20Kya%20Dekhte%20Ho.mp3"
  },
  {
    "title": "Na Kajare Ki Dhar (With Jhankar Beats)",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/52.%20Na%20Kajare%20Ki%20Dhar%20(With%20Jhankar%20Beats).mp3"
  },
  {
    "title": "Too Shayar Hai Main Teri Shayari (From \"Saajan\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/53.%20Too%20Shayar%20Hai%20Main%20Teri%20Shayari%20(From%20%22Saajan%22).mp3"
  },
  {
    "title": "Paas Woh Aane Lage (From \"Main Khiladi Tu Anari\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/54.%20Paas%20Woh%20Aane%20Lage%20(From%20%22Main%20Khiladi%20Tu%20Anari%22).mp3"
  },
  {
    "title": "Chhupana Bhi Nahin Aata Vinod Rathod (From \"Baazigar\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/55.%20Chhupana%20Bhi%20Nahin%20Aata%20Vinod%20Rathod%20(From%20%22Baazigar%22).mp3"
  },
  {
    "title": "Is Tarah Aashiqui Ka - Kumar Sanu Version",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/56.%20Is%20Tarah%20Aashiqui%20Ka%20-%20Kumar%20Sanu%20Version.mp3"
  },
  {
    "title": "Tumse Milna",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/57.%20Tumse%20Milna.mp3"
  },
  {
    "title": "Kyo Kisi Ko",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/58.%20Kyo%20Kisi%20Ko.mp3"
  },
  {
    "title": "Dil Ka Aalam (From \"Aashiqui\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/59.%20Dil%20Ka%20Aalam%20(From%20%22Aashiqui%22).mp3"
  },
  {
    "title": "Pehli Pehli Baar Mohabbat Ki Hai (From \"Sirf Tum\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/60.%20Pehli%20Pehli%20Baar%20Mohabbat%20Ki%20Hai%20(From%20%22Sirf%20Tum%22).mp3"
  },
  {
    "title": "Sanam Bewafa",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/61.%20Sanam%20Bewafa.mp3"
  },
  {
    "title": "Kaash Kahin Aisa Hota (From \"Mohra\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/62.%20Kaash%20Kahin%20Aisa%20Hota%20(From%20%22Mohra%22).mp3"
  },
  {
    "title": "Aawara Hawa Ka Jhonka Hoon",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/63.%20Aawara%20Hawa%20Ka%20Jhonka%20Hoon.mp3"
  },
  {
    "title": "Love Tujhe Love Main Karta",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/64.%20Love%20Tujhe%20Love%20Main%20Karta.mp3"
  },
  {
    "title": "Tere Dard Se Dil (From \"Deewana\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/65.%20Tere%20Dard%20Se%20Dil%20(From%20%22Deewana%22).mp3"
  },
  {
    "title": "Dil Cheer Ke Dekh",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/66.%20Dil%20Cheer%20Ke%20Dekh.mp3"
  },
  {
    "title": "Premi Aashiq Aawara",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/67.%20Premi%20Aashiq%20Aawara.mp3"
  },
  {
    "title": "Dil Diwana (From \"Daag The Fire\")",
    "artist": "Nukkad Saloon",
    "src": "https://blr1.kos.olakrutrimsvc.com/nukkad-saloon-audio/audio/68.%20Dil%20Diwana%20(From%20%22Daag%20The%20Fire%22).mp3"
  }
];

function formatTime(value: number) {
  if (!Number.isFinite(value) || value <= 0) {
    return "0:00";
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const currentTrack = tracks[trackIndex];
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
  }, [trackIndex, isPlaying]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const changeTrack = (direction: 1 | -1) => {
    setTrackIndex((trackIndex + direction + tracks.length) % tracks.length);
    setCurrentTime(0);
  };

  const seek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextTime = Number(event.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = nextTime;
    }
    setCurrentTime(nextTime);
  };

  return (
    <div className="radio-shell">
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={() => changeTrack(1)}
      />

      <div className="radio-player">
        <div className="album-art" aria-hidden="true" />

        <div className="track-info">
          <p className="track-title">{currentTrack.title}</p>
          <p className="track-artist">{currentTrack.artist}</p>
          <div className="progress-row">
            <input
              className="track"
              type="range"
              min="0"
              max={duration || 0}
              step="0.01"
              value={currentTime}
              onChange={seek}
              aria-label="Track progress"
              style={{ "--progress": `${progress}%` } as React.CSSProperties}
            />
            <span className="time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>

        <div className="player-controls" aria-label="Nukkad Saloon radio player">
          <button
            className="skip-button"
            type="button"
            aria-label="Previous track"
            onClick={() => changeTrack(-1)}
          >
            ‹
          </button>
          <button
            className={`player-button ${isPlaying ? "is-playing" : ""}`}
            type="button"
            aria-label={isPlaying ? "Pause radio" : "Play radio"}
            onClick={togglePlayback}
          >
            <span />
          </button>
          <button
            className="skip-button"
            type="button"
            aria-label="Next track"
            onClick={() => changeTrack(1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

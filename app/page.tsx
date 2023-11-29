"use client";
import React, { useState, useEffect } from 'react';
import './normal.css';

export default function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1);
    var offset = date.getTimezoneOffset(), o = Math.abs(offset);
    var offsetStr = (offset > 0 ? "-" : "+") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timezone')!.innerText = "Timezone: " + timezone + " (" + offsetStr + ")";

    return () => {
      clearInterval(timer);
    };
  }, []);
  let ms = ('00' + date.getMilliseconds()).slice(-3);
  let s = ('0' + date.getSeconds()).slice(-2);
  let m = ('0' + date.getMinutes()).slice(-2);
  let h = ('0' + date.getHours()).slice(-2);
  let dateStr = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + h + ":" + m + ":" + s + "." + ms
  let dateStr1 = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + h + ":" + m + ":" + s + "." + ms
  return (
    <main className="main flex min-h-screen flex-col items-center justify-center p-4">
      <div>
        <h1 className="timeStr"><time dateTime={dateStr} suppressHydrationWarning={true}>{dateStr1}</time></h1>
        <div className="info-div flex gap-2 flex-row justify-items-start w-full">
          <span id="timezone" className="timezone"></span>
          <span></span>
        </div>
      </div>
    </main>
  )
}
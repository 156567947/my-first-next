import React from "react";
import img from '@/public/icon.png'
export default function header() {
  return (
    <>
      <img src={img} alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </>
  );
}

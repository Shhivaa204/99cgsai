"use client";
import { useEffect, useRef } from "react";
export function AnimatedBg(){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const c = canvasRef.current; if(!c) return;
    const ctx = c.getContext("2d"); if(!ctx) return;
    const resize = ()=>{ c.width = window.innerWidth; c.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    let t = 0;
    const loop = ()=>{
      t += 0.008;
      ctx.clearRect(0,0,c.width,c.height);
      // soft glowing orbs
      const g1 = ctx.createRadialGradient(c.width*0.7, c.height*0.2, 0, c.width*0.7, c.height*0.2, 400);
      g1.addColorStop(0, "rgba(54,214,176,0.18)"); g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1; ctx.fillRect(0,0,c.width,c.height);
      const g2 = ctx.createRadialGradient(c.width*0.2, c.height*0.8, 0, c.width*0.2, c.height*0.8, 350);
      g2.addColorStop(0, "rgba(85,185,232,0.12)"); g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2; ctx.fillRect(0,0,c.width,c.height);
      // drifting circuit dots
      ctx.fillStyle = "rgba(54,214,176,0.15)";
      for(let i=0;i<40;i++){
        const x = ((i*37 + t*20) % c.width);
        const y = ((i*53 + t*12) % c.height);
        ctx.beginPath(); ctx.arc(x,y,1.2,0,Math.PI*2); ctx.fill();
      }
      requestAnimationFrame(loop);
    };
    loop();
    return ()=> window.removeEventListener("resize", resize);
  },[]);
  return <canvas ref={canvasRef} style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}} />;
}
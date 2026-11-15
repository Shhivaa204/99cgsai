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
      t += 0.006;
      ctx.clearRect(0,0,c.width,c.height);
      // large soft orbs
      const g1 = ctx.createRadialGradient(c.width*0.72, c.height*0.18, 0, c.width*0.72, c.height*0.18, 420);
      g1.addColorStop(0, "rgba(54,214,176,0.22)"); g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1; ctx.fillRect(0,0,c.width,c.height);
      const g2 = ctx.createRadialGradient(c.width*0.18, c.height*0.82, 0, c.width*0.18, c.height*0.82, 380);
      g2.addColorStop(0, "rgba(85,185,232,0.16)"); g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2; ctx.fillRect(0,0,c.width,c.height);
      // drifting particles
      ctx.fillStyle = "rgba(54,214,176,0.18)";
      for(let i=0;i<55;i++){
        const x = ((i*41 + t*28) % c.width);
        const y = ((i*67 + t*15) % c.height);
        ctx.beginPath(); ctx.arc(x,y,1.4,0,Math.PI*2); ctx.fill();
      }
      // faint circuit lines
      ctx.strokeStyle = "rgba(54,214,176,0.08)";
      ctx.lineWidth = 1;
      for(let i=0;i<12;i++){
        const y = (i*80 + t*20) % c.height;
        ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(c.width,y+20); ctx.stroke();
      }
      requestAnimationFrame(loop);
    };
    loop();
    return ()=> window.removeEventListener("resize", resize);
  },[]);
  return <canvas ref={canvasRef} style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}} />;
}
export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#0b1020',color:'#f7fafc',fontFamily:'DM Sans, system-ui, sans-serif'}}>
      <header style={{padding:'20px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid #273448'}}>
        <span style={{fontSize:26,fontWeight:800,background:'linear-gradient(100deg,#36d6b0,#7de8ff)',WebkitBackgroundClip:'text',color:'transparent'}}>99CGS</span>
        <nav style={{display:'flex',gap:22,fontSize:13,color:'#c3ccda'}}>
          <a href="/" style={{color:'inherit',textDecoration:'none'}}>Home</a>
          <a href="/about" style={{color:'inherit',textDecoration:'none'}}>About</a>
          <a href="/services" style={{color:'inherit',textDecoration:'none'}}>Services</a>
          <a href="/contact" style={{color:'inherit',textDecoration:'none'}}>Contact</a>
        </nav>
      </header>
      <section style={{maxWidth:1100,margin:'0 auto',padding:'90px 24px',display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:40,alignItems:'center'}}>
        <div>
          <p style={{color:'#36d6b0',letterSpacing:2,fontSize:11,marginBottom:12}}>AI-POWERED CONTENT & GROWTH AGENCY</p>
          <h1 style={{fontSize:52,lineHeight:1.05,fontWeight:800,margin:'0 0 18px'}}>Growth is not accidental.<br/><em style={{fontStyle:'normal',background:'linear-gradient(100deg,#36d6b0,#7de8ff)',WebkitBackgroundClip:'text',color:'transparent'}}>It's engineered.</em></h1>
          <p style={{color:'#aab5c5',fontSize:18,maxWidth:520,marginBottom:28}}>Create smarter content. Reach the right audience. Generate qualified leads. Build intelligent growth systems powered by AI, creativity and automation.</p>
          <a href="/contact" style={{display:'inline-flex',padding:'14px 20px',background:'#36d6b0',color:'#07131a',borderRadius:8,fontWeight:700,textDecoration:'none'}}>Get a Growth Strategy</a>
          <p style={{marginTop:24,fontSize:13,color:'#7f8da2'}}>CREATE • GROW • SCALE</p>
        </div>
        <div style={{width:260,height:260,borderRadius:'50%',border:'1px solid rgba(54,214,176,.3)',display:'grid',placeItems:'center',margin:'0 auto',background:'radial-gradient(circle at 40% 40%,rgba(54,214,176,.15),transparent 70%)'}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:36,fontWeight:800,background:'linear-gradient(100deg,#36d6b0,#7de8ff)',WebkitBackgroundClip:'text',color:'transparent'}}>99CGS</div>
            <small style={{letterSpacing:3,color:'#a9b8ca'}}>AI Agency</small>
          </div>
        </div>
      </section>
    </main>
  );
}
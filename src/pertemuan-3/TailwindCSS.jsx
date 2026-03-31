export default function TailwindCSS(){
    return (
        <div>
            <h1 className="shadow-;g bg-blue-100 p-2 m-4"> Belajar Tailwind CSS 4</h1>
            <button className= "bg-red-700 text-gray-300 px-4 py-2 mx-4 rounded shadow-lg">Click Me</button>
            <Spacing title="Card Title" content="ABCDEFGH"/>
            <FlexboxGrid/>
            <Typography/>
            <BorderRadius/>
            <BackgroundColors/>
            <ShadowEffects/>
            <TailwindDemo/>
        </div>
    )
}

function Spacing(props){
    return (
        <div className="bg-white shadow-lg p-4 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="mt-2 text-gray-600">{props.content}</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="text-lg font-bold">logout</h1>

        </nav>
    )
}


function BorderRadius(){
    return (
        <div>
            <button className="border-3 border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-l-lg"> Klik Saya </button>
             <button className="border-3 border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-r-lg"> Klik Saya </button>
        </div>
    )  
}

function BackgroundColors(){
    return(
        <div className="bg-pink-200 text-white p-6 m-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}


function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 m-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="p-4">
            <h1 className="text-2xl font-extrabold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-400 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}


function TailwindDemo() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] p-8 font-serif text-[#d4d4d4]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Cortis: Deep, Minimalist, & Elegant */}
        <header className="relative overflow-hidden rounded-sm bg-[#242424] border-l-4 border-[#c2a35d] p-10 shadow-2xl">
          <div className="relative z-10">
            <h1 className="text-4xl font-light text-[#ececec] tracking-[0.2em] uppercase">
              Cortis <span className="text-[#c2a35d] font-serif italic lowercase tracking-normal text-2xl ml-2">v.4</span>
            </h1>
            <p className="text-[#888] mt-4 font-sans tracking-widest text-xs uppercase opacity-80">
              The Art of Minimalist Structuralism
            </p>
          </div>
          {/* Subtle Texture Effect */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Section: Typography & Interaction */}
          <section className="bg-[#242424] p-8 rounded-sm border border-[#333] transition-all hover:border-[#c2a35d]/50">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c2a35d] mb-6">Philosophy</h2>
            <div className="space-y-6">
              <p className="text-xl text-[#ececec] leading-relaxed italic font-serif">
                "Simplicity is the ultimate sophistication."
              </p>
              <button className="group relative px-8 py-3 bg-transparent border border-[#c2a35d] text-[#c2a35d] text-xs tracking-[0.2em] uppercase font-bold overflow-hidden transition-all hover:text-[#1a1a1a]">
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-[#c2a35d] translate-y-full transition-transform group-hover:translate-y-0"></div>
              </button>
            </div>
          </section>

          {/* Section: Material & Forms */}
          <section className="bg-[#242424] p-8 rounded-sm border border-[#333]">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c2a35d] mb-6">Materials</h2>
            <div className="flex items-center gap-8">
              <div className="group relative">
                <div className="w-24 h-24 bg-[#333] border border-[#444] rounded-none flex items-center justify-center text-[#888] text-[10px] tracking-widest uppercase transition-all group-hover:bg-[#c2a35d] group-hover:text-[#1a1a1a]">
                  Concrete
                </div>
              </div>
              <div className="w-24 h-24 bg-[#1a1a1a] shadow-[10px_10px_20px_rgba(0,0,0,0.5)] rounded-none border-t border-l border-[#444] flex items-center justify-center text-[#c2a35d] text-xs italic">
                Depth
              </div>
            </div>
          </section>

          {/* Section: Earthy Palette */}
          <section className="bg-[#242424] p-8 rounded-sm border border-[#333] md:col-span-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c2a35d] mb-6">Cortis Signature Palette</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Onyx', color: 'bg-[#0f0f0f]' },
                { name: 'Bronze', color: 'bg-[#c2a35d]' },
                { name: 'Slate', color: 'bg-[#3d4449]' },
                { name: 'Clay', color: 'bg-[#7d6e61]' },
                { name: 'Ivory', color: 'bg-[#dcd6cc]' }
              ].map((item, i) => (
                <div key={i} className="flex-1 min-w-[100px] group cursor-pointer">
                  <div className={`h-16 ${item.color} shadow-lg transition-transform group-hover:-translate-y-2`}></div>
                  <p className="mt-2 text-[9px] uppercase tracking-tighter text-[#666]">{item.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Architectural Grid */}
          <section className="bg-[#242424] p-8 rounded-sm border border-[#333] md:col-span-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c2a35d] mb-6">Architectural Structure</h2>
            <div className="grid grid-cols-3 h-24">
              <div className="border border-[#333] flex items-center justify-center text-[#444] font-mono text-sm hover:bg-[#c2a35d]/10 transition-colors">lvl_01</div>
              <div className="border border-[#333] border-l-0 flex items-center justify-center text-[#444] font-mono text-sm hover:bg-[#c2a35d]/10 transition-colors">lvl_02</div>
              <div className="border border-[#333] border-l-0 flex items-center justify-center text-[#444] font-mono text-sm hover:bg-[#c2a35d]/10 transition-colors">lvl_03</div>
            </div>
          </section>

        </div>

        <footer className="text-center text-[#555] text-[10px] tracking-[0.4em] uppercase pb-12 border-t border-[#333] pt-8">
          Cortis Design System &copy; 2026
        </footer>
      </div>
    </div>
  );
}
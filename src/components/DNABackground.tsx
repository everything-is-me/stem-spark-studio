import React from "react";

const DNABackground = () => {
  const rungs = 24;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 perspective-[1000px] overflow-hidden">
      <div className="dna-helix flex flex-col gap-1 items-center transform rotate-12">
        {[...Array(rungs)].map((_, i) => (
          <div
            key={i}
            className="dna-rung w-48 h-1 relative animate-dna"
            style={{
              animationDelay: `${i * 0.1}s`,
              transformStyle: "preserve-3d"
            }}
          >
            {/* Nucleotides (base pairs) */}
            <div className="absolute left-0 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.6)] translate-y-[-1px]" />
            <div className="absolute right-0 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)] translate-y-[-1px]" />
            
            {/* Horizontal line (sugar-phosphate backbone connector) */}
            <div className="w-full h-[1px] bg-gradient-to-r from-blue-400/50 via-slate-200/20 to-cyan-400/50" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DNABackground;

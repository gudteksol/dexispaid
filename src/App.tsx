function App() {
  const memeImages = [
    "/johnny_pfp_-_2026-01-20t220809.232.png",
    "/johnny_pfp_-_2026-01-20t220755.584.png",
    "/johnny_pfp_-_2026-01-20t220733.894.png",
    "/johnny_pfp_-_2026-01-20t220639.598.png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="flex flex-col items-center pt-12 pb-8 px-4">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl mb-6">
          <img
            src="/johnny_pfp_-_2026-01-20t215407.115.png"
            alt="$DEX Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-2">$DEX</h1>
        <p className="text-xl text-gray-700 font-medium mb-6">Meet Dex, He's Paid</p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://pump.fun/coin/5uUg4N9j6NFL8gkxrJMCLKgbBcmPdJiEuhzD5pwRpump"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Buy $DEX
          </a>
          <a
            href="https://x.com/i/communities/2013838303825666355"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Join Community
          </a>
        </div>
      </header>

      {/* Chart Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Live Chart</h2>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://dexscreener.com/solana/5uUg4N9j6NFL8gkxrJMCLKgbBcmPdJiEuhzD5pwRpump?embed=1&theme=dark&trades=0&info=0"
              title="DexScreener Chart"
            />
          </div>
        </div>
      </section>

      {/* Meme Gallery - Infinite Carousel */}
      <section className="py-12 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Meme Gallery</h2>
        <div className="relative">
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="flex animate-scroll">
            {/* First set of images */}
            {memeImages.map((img, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-80 h-80 mx-4 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`Meme ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {memeImages.map((img, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-80 h-80 mx-4 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`Meme ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-4 text-gray-600">
      </footer>
    </div>
  );
}

export default App;

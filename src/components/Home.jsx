import React from "react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black' : 'bg-sky-100'}`}>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
           <div className={`
        sub-div flex flex-col md:flex-row gap-10 m-2 p-4 md:p-8 
        h-[fit-content] items-center justify-center 
        rounded-[20px] w-full 
        transition-all duration-500
        ${isDark 
          ? 'bg-gray-900 border border-gray-800 text-white shadow-2xl shadow-sky-900/20' 
          : 'bg-sky-400 text-gray-900 shadow-xl'
        }
      `}>
        
        {/* Left Column: Text Content */}
        <div className="w-[fit-content] relative md:top-8 text-center md:text-left">
          <div className="text grid gap-2">
            <b className={`${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
              1,000s of savings—don't miss out!
            </b>
            <h1 className="text-3xl font-bold w-full">
              END-OF-YEAR CLEARANCE <br />IS ON
            </h1>
          </div>
          <div className="button my-10 md:my-20 text-lg hover:drop-shadow-2xl">
            <a 
              href="/products"
              className={`
                inline-block border rounded-full p-4 font-black cursor-pointer 
                w-[fit-content] h-[fit-content] my-4 transition-all duration-300
                ${isDark 
                  ? 'border-sky-500 bg-sky-600 text-white hover:bg-sky-500' 
                  : 'border-black bg-sky-500 text-white hover:bg-sky-600'
                }
            >
              Shop now
            </a>
          </div>
        </div>

        {/* Middle Column 1: Product Image */}
        <a href="/products" className={`w-64 rounded-2xl p-2 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-sky-400'} transition-transform duration-500 hover:scale-105`}>
          <img 
            import product2 from "../assets/Product2.png";
            alt="image1" 
            className="drop-shadow-2xl rounded-full w-full h-auto object-contain"
          />
        </a>

        {/* Middle Column 2: iPhone Image */}
        <a href="/products" className={`w-64 rounded-2xl p-2 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-sky-400'} transition-transform duration-500 hover:scale-105`}>
          <img 
            import iphone from "../assets/iphone.png";
            alt="image2" 
            width="100%" 
            className="drop-shadow-2xl rounded-[15px]"
          />
        </a>

        {/* Right Column: Shop Now Image & Clearance Text */}
        <div className={`w-64 text-4xl grid gap-4 rounded-2xl p-2 transition-colors duration-300 ${isDark ? 'bg-gray-800' : 'bg-sky-400'} transition-transform duration-500 hover:scale-105`}>
          <a href="/products" className="drop-shadow-2xl flex justify-center">
            <img 
              import shopNow from "../assets/Shop-Now.png";
              alt="shop-now" 
              height="50%" 
              width="80%"
              className="w-full h-auto object-contain"
            />
          </a>
          <a href="/products" className="grid justify-center">
            <b className={`
              drop-shadow-2xl p-2 w-[fit-content] h-[fit-content] 
              rounded-[15px] shadow-2xl
              ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-sky-700'}
              transition-transform duration-500 hover:scale-105
            `}>
             BUY NOW
            </b>
          </a>
        </div>

      </div>     
         
        {/* Main Hero Banner */}
        <div className={`
          relative overflow-hidden rounded-[2rem] p-6 sm:p-10 md:p-16
          transition-all duration-500 ease-in-out
          ${isDark 
            ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 shadow-2xl shadow-sky-900/10' 
            : 'bg-gradient-to-br from-sky-500 to-sky-700 shadow-2xl shadow-sky-500/30'
          }
        `}>
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-sky-600/10' : 'bg-white/20'}`}></div>
            <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-cyan-600/10' : 'bg-sky-400/20'}`}></div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 z-10 text-center lg:text-left">
              <span className={`
                inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-6
                ${isDark ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'bg-white/20 text-white border border-white/30'}
              `}>
                Limited Time Offer
              </span>
              
              <h1 className={`
                text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6
                ${isDark ? 'text-white' : 'text-white'}
              `}>
                END-OF-YEAR <br />
                <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400' : 'text-sky-100'}`}>
                  CLEARANCE
                </span>
              </h1>
              
              <p className={`
                text-lg sm:text-xl mb-10 max-w-md mx-auto lg:mx-0
                ${isDark ? 'text-gray-400' : 'text-sky-100'}
              `}>
                1,000s of savings—don't miss out on our biggest sale of the year!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/products" className={`
                  group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full overflow-hidden transition-all duration-300
                  ${isDark 
                    ? 'bg-sky-600 text-white hover:bg-sky-500 shadow-lg shadow-sky-500/25' 
                    : 'bg-white text-sky-600 hover:bg-sky-50 shadow-xl'
                  }
                `}>
                  <span className="relative z-10">Shop Now</span>
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="/products" className={`
                  inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full border-2 transition-all duration-300
                  ${isDark 
                    ? 'border-gray-700 text-white hover:border-gray-500 hover:bg-white/5' 
                    : 'border-white/40 text-white hover:bg-white/10'
                  }
                `}>
                  View Deals
                </a>
              </div>
            </div>

            {/* Right Image/Product Column */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Featured Product Image 1 */}
                <div className={`
                  col-span-1 row-span-2 rounded-2xl p-4 flex items-center justify-center
                  transition-transform duration-500 hover:scale-105
                  ${isDark ? 'bg-gray-800/30 backdrop-blur-sm border border-gray-700/50' : 'bg-white/20 backdrop-blur-sm'}
                `}>
                  <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=800&fit=crop" 
                    alt="Headphones" 
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
                  />
                </div>
                
                {/* Product Image 2 */}
                <div className={`
                  rounded-2xl p-4 flex items-center justify-center
                  transition-transform duration-500 hover:scale-105
                  ${isDark ? 'bg-gray-800/30 backdrop-blur-sm border border-gray-700/50' : 'bg-white/20 backdrop-blur-sm'}
                `}>
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" 
                    alt="Watch" 
                    className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
                  />
                </div>

                {/* Stats/Info Card */}
                <div className={`
                  rounded-2xl p-5 flex flex-col justify-center
                  transition-transform duration-500 hover:scale-105
                  ${isDark ? 'bg-gray-800/30 backdrop-blur-sm border border-gray-700/50' : 'bg-white/20 backdrop-blur-sm'}
                `}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-sky-100'}`}>
                    Starting At
                  </p>
                  <p className={`text-3xl sm:text-4xl font-black ${isDark ? 'text-white' : 'text-white'}`}>
                    $49.99
                  </p>
                  <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-sky-200'}`}>
                    Free Shipping
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Category Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className={`
            group relative overflow-hidden rounded-2xl p-6 h-64 cursor-pointer
            transition-all duration-500 transform hover:-translate-y-2
            ${isDark ? 'bg-gray-900 border border-gray-800 hover:border-sky-500/50' : 'bg-white border border-sky-200 shadow-lg hover:shadow-xl'}
          `}>
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-sky-600 to-cyan-600' : 'bg-gradient-to-r from-sky-400 to-sky-600'}`}></div>
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Electronics</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Latest gadgets & accessories</p>
              <a href="/products" className="mt-auto">
                <span className={`inline-flex items-center text-sm font-semibold ${isDark ? 'text-sky-400 group-hover:text-sky-300' : 'text-sky-600 group-hover:text-sky-800'}`}>
                  Explore <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`
            group relative overflow-hidden rounded-2xl p-6 h-64 cursor-pointer
            transition-all duration-500 transform hover:-translate-y-2
            ${isDark ? 'bg-gray-900 border border-gray-800 hover:border-sky-500/50' : 'bg-white border border-sky-200 shadow-lg hover:shadow-xl'}
          `}>
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-purple-400 to-pink-500'}`}></div>
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Fashion</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Trending styles for everyone</p>
              <a href="/products" className="mt-auto">
                <span className={`inline-flex items-center text-sm font-semibold ${isDark ? 'text-purple-400 group-hover:text-purple-300' : 'text-purple-600 group-hover:text-purple-800'}`}>
                  Explore <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`
            group relative overflow-hidden rounded-2xl p-6 h-64 cursor-pointer
            transition-all duration-500 transform hover:-translate-y-2
            ${isDark ? 'bg-gray-900 border border-gray-800 hover:border-sky-500/50' : 'bg-white border border-sky-200 shadow-lg hover:shadow-xl'}
          `}>
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'bg-gradient-to-r from-emerald-400 to-teal-500'}`}></div>
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Home & Living</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Upgrade your space</p>
              <a href="/products" className="mt-auto">
                <span className={`inline-flex items-center text-sm font-semibold ${isDark ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-emerald-600 group-hover:text-emerald-800'}`}>
                  Explore <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

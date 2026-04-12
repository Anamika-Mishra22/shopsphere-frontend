import React from "react";
import { useTheme } from "../context/ThemeContext";

// ✅ IMAGES IMPORT 
import product2 from "../assets/Product2.png";
import iphone from "../assets/iphone.png";
import shopNow from "../assets/Shop-Now.png";

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
        
          {/* LEFT TEXT */}
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
                `}
              >
                Shop now
              </a>
            </div>
          </div>

          {/* PRODUCT IMAGE */}
          <a href="/products" className={`w-64 rounded-2xl p-2 transition-transform duration-500 hover:scale-105 ${isDark ? 'bg-gray-800' : 'bg-sky-400'}`}>
            <img 
              src={product2}
              alt="product"
              className="drop-shadow-2xl rounded-full w-full h-auto object-contain"
            />
          </a>

          {/* IPHONE IMAGE */}
          <a href="/products" className={`w-64 rounded-2xl p-2 transition-transform duration-500 hover:scale-105 ${isDark ? 'bg-gray-800' : 'bg-sky-400'}`}>
            <img 
              src={iphone}
              alt="iphone"
              className="drop-shadow-2xl rounded-[15px] w-full h-auto"
            />
          </a>

          {/* SHOP NOW IMAGE */}
          <div className={`w-64 text-4xl grid gap-4 rounded-2xl p-2 transition-transform duration-500 hover:scale-105 ${isDark ? 'bg-gray-800' : 'bg-sky-400'}`}>
            <a href="/products" className="flex justify-center">
              <img 
                src={shopNow}
                alt="shop-now"
                className="w-full h-auto object-contain"
              />
            </a>

            <a href="/products" className="grid justify-center">
              <b className={`
                drop-shadow-2xl p-2 w-fit h-fit rounded-[15px] shadow-2xl
                ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-sky-700'}
              `}>
                BUY NOW
              </b>
            </a>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Home;

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

// images safe import
import product2 from "../assets/product2.png";
import iphone from "../assets/iphone.png";
import shopNow from "../assets/Shop-Now.png";

const Home = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black' : 'bg-sky-100'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ================= FIRST SECTION ================= */}
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

          {/* TEXT */}
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
              <button
                onClick={goToProducts}
                className={`
                  inline-block border rounded-full p-4 font-black cursor-pointer 
                  transition-all duration-300
                  ${isDark 
                    ? 'border-sky-500 bg-sky-600 text-white hover:bg-sky-500' 
                    : 'border-black bg-sky-500 text-white hover:bg-sky-600'
                  }
                `}
              >
                Shop now
              </button>
            </div>
          </div>

          {/* IMAGE 1 */}
          <div onClick={goToProducts}
            className={`w-64 rounded-2xl p-2 cursor-pointer hover:scale-105 transition ${isDark ? 'bg-gray-800' : 'bg-sky-400'}`}>
            <img src={product2} alt="img1" className="w-full object-contain" />
          </div>

          {/* IMAGE 2 */}
          <div onClick={goToProducts}
            className={`w-64 rounded-2xl p-2 cursor-pointer hover:scale-105 transition ${isDark ? 'bg-gray-800' : 'bg-sky-400'}`}>
            <img src={iphone} alt="img2" className="w-full object-contain" />
          </div>

          {/* IMAGE 3 */}
          <div onClick={goToProducts}
            className={`w-64 grid gap-4 rounded-2xl p-2 cursor-pointer hover:scale-105 transition ${isDark ? 'bg-gray-800' : 'bg-sky-400'}`}>
            <img src={shopNow} alt="img3" className="w-full object-contain" />
            <b className={`text-center p-2 rounded ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-sky-700'}`}>
              BUY NOW
            </b>
          </div>

        </div>

        {/* ================= SECOND HERO BANNER (RESTORED) ================= */}
        <div className={`
          relative overflow-hidden rounded-[2rem] p-6 sm:p-10 md:p-16 mt-10
          ${isDark 
            ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-800' 
            : 'bg-gradient-to-br from-sky-500 to-sky-700'
          }
        `}>

          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black">
              END-OF-YEAR CLEARANCE
            </h1>

            <p className="mt-4 text-lg md:text-xl">
              1,000s of savings—don’t miss out!
            </p>

            <button
              onClick={goToProducts}
              className="mt-6 px-8 py-3 bg-white text-sky-600 font-bold rounded-full hover:scale-105 transition"
            >
              Shop Now
            </button>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Home;
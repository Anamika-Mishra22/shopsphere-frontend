import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Wishlist = () => {
   const { isDark } = useTheme();
    return (
         <main className={`${isDark ? "bg-gray-900 text-white" : "bg-gray-100"} min-h-screen`}>
            

         </main>
    )
}

export default Wishlist;
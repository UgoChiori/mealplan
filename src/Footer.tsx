import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-200 text-black py-6 mt-10 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          Disclaimer: This meal plan is for informational purposes only and should not be considered medical or nutritional advice. 
          Consult a professional before making dietary changes.
        </p>
        <p className="mt-2 text-sm">
          &copy; {new Date().getFullYear()} <a 
          href="https://kaleidoscopic-treacle-06e2f2.netlify.app/"
          target="blank"
          rel="noopener noreferrer"
           className="text-teal-600 hover:underline"
           >Ugo Chiori.</a> All rights reserved.
           
        </p>
      </div>
    </footer>
  );
};

export default Footer;

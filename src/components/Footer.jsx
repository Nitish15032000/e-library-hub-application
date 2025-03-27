import React from "react";

const Footer = () => {
  return (
    <footer className=" reletive bottom-0 w-full bg-gray-800 text-white text-center mt-4 py-4">
      <p>&copy; {new Date().getFullYear()} Online Library System. All rights reserved.</p>
      <p>Developed by <strong>Nitish Kumar</strong></p>
      <p>A project for managing and browsing books online efficiently.</p>
    </footer>
  );
};

export default Footer;

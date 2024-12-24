import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-blue p-3 text-center">
      <div style={containerStyle}>
        <p className="text-white">
          &copy; {new Date().getFullYear() + " "}
          Crossroad Family Center. All rights reserved. Registered 501(c)(3)
          Corporation.
        </p>
        <nav>
          <a href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" style={linkStyle}>
            Terms of Service
          </a>{" "}
          |
          <a href="/contact" style={linkStyle}>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  margin: "0 0.5rem",
  textDecoration: "none",
};

export default Footer;

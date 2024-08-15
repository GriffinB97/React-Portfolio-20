import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Griffin Baker. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/GriffinB97" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' | '}
          <a href="https://www.linkedin.com/in/griffin-baker/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {' | '}
          <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer">
            Stack Overflow
          </a>
          {' | '}
          <a href="mailto:gbaker24@uncc.edu">Email: gbaker24@uncc.edu</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

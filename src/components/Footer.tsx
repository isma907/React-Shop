import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-slate-900">
      <div className="container flex gap-2 items-center justify-between">
        <p className="text-center text-white">© 2026 Isma907. All rights reserved.</p>
        <div className="flex gap-2">
          <a href="https://github.com/isma907" target="_blank" className="text-lg">
            <FaGithub className="text-white text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/ismaelfernandez91/" target="_blank">
            <FaLinkedin className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

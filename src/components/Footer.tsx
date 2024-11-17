import Link from 'next/link';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Discord', href: 'https://discord.gg/kNtuetJq' },
    { name: 'Github', href: 'https://github.com/hackathonzx/storycrafters' },
  ];

  return (
    <footer className="backdrop-blur-md bg-gray-900/60 text-white py-8">
      <Container maxWidth="lg">
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <Typography variant="h6" className="font-bold mb-4">
              Taiko Multiverse
            </Typography>
            <Typography variant="body2" className="text-gray-300">
              Your gateway to decentralized storytelling
            </Typography>
          </div>
          
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="text-center md:text-right">
            <Typography variant="body2" className="text-gray-300">
              &copy; {currentYear} Taiko Multiverse
            </Typography>
            <Typography variant="body2" className="text-gray-400 mt-2">
              Built with ❤️ for Web3
            </Typography>
          </div>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

import { Facebook, Instagram, Youtube } from 'lucide-react';

const SocialBar = ({ className = '', iconSize = 24, iconColor = "white" }) => {
  // We define all social links in one place for easy maintenance
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/shadesshowband',
      icon: Facebook,
      hoverColor: 'hover:text-[#1877F2]' // Facebook blue
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shadespartybandofficial/',
      icon: Instagram,
      hoverColor: 'hover:text-[#E4405F]' // Instagram pink
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@shadeschris',
      icon: Youtube,
      hoverColor: 'hover:text-[#FF0000]' // YouTube red
    }
  ];

  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform duration-200 hover:scale-110 ${social.hoverColor}`}
            aria-label={`Visit our ${social.name} page`}
          >
            <Icon size={iconSize} color={iconColor} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialBar;
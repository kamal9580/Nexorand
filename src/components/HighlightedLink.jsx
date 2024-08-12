import React from 'react';

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com' },
  { name: 'Instagram', url: 'https://www.instagram.com' },
  { name: 'Twitter', url: 'https://www.twitter.com' },
];

const HighlightedLinkSection = () => {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Highlighted Links</h2>
      <div className="p-6 border-4 border-gray-300 rounded-lg bg-white shadow-lg">
        <ul className="space-y-3">
          {socialLinks.map(({ name, url }) => (
            <li key={name}>
              <a
                href={url}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HighlightedLinkSection;

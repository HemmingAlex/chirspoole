import Link from "next/link";
const InstagramSection = ({ href }) => {
  // Sample Instagram video thumbnails - replace with your actual content
  const instagramVideos = [
    {
      id: 1,
      thumbnail: "/assets/Jack.jpg",
      link: "https://www.instagram.com/shadespartybandofficial/",
    },
    {
      id: 2,
      thumbnail: "/assets/Kamil.jpg",
      link: "https://www.instagram.com/shadespartybandofficial/",
    },
    {
      id: 3,
      thumbnail: "/assets/Paul.jpg",
      link: "https://www.instagram.com/shadespartybandofficial/",
    },
    {
      id: 4,
      thumbnail: "/assets/Chris.jpg",
      link: "https://www.instagram.com/shadespartybandofficial/",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Instagram Text */}
        <div className="text-center mb-12">
          <img
            src="/assets/shades.svg"
            alt="Shades Music School"
            className="h-12 mx-auto mb-8"
          />
          <h2 className="text-2xl font-bold mb-12">FOLLOW US ON INSTAGRAM</h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {instagramVideos.map((video) => (
            <Link
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square relative group overflow-hidden rounded-lg"
            >
              <img
                src={video.thumbnail}
                alt="Instagram content"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  View on Instagram
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Logo and Call to Action */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <img
            src="/assets/shades.svg"
            alt="Shades Music School"
            className="h-12 mx-auto"
          />
          <h3 className="text-2xl font-bold">LET US ENTERTAIN YOU</h3>
          <div className="space-y-2">
            {href !== "contact" ? (
              <a href={href} className="text-xl">
                CONTACT <span className="text-blue-600">OUR TEAM</span>
              </a>
            ) : (
              <Link href="/contact" className="text-xl">
                CONTACT <span className="text-blue-600">OUR TEAM</span>
              </Link>
            )}

            <p className="text-xl">
              <span className="text-blue-600">
                FOR YOUR BESPOKE TAILOR-MADE SPECIAL SHOW
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;

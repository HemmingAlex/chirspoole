export default function SocialIcons() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex gap-2">
      <a href="#" className="w-8 h-8 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition">
        <img src="/assets/file.svg" alt="Facebook" className="w-4 h-4" />
      </a>
      <a href="#" className="w-8 h-8 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition">
        <img src="/assets/globe.svg" alt="Youtube" className="w-4 h-4" />
      </a>
      <a href="#" className="w-8 h-8 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition">
        <img src="/assets/shades.svg" alt="Instagram" className="w-4 h-4" />
      </a>
      <a href="#" className="w-8 h-8 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition">
        <img src="/assets/vercel.svg" alt="Vimeo" className="w-4 h-4" />
      </a>
    </div>
  )
}
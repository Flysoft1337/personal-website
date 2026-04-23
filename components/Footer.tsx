export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Flysoft · Built with Next.js & Tailwind CSS
        </p>
        <p className="text-slate-700 text-xs mt-1 italic">
          代码是思想的具体化，优雅的实现胜过暴力
        </p>
      </div>
    </footer>
  );
}

import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-[#0F1E32] border-t border-[#1E3A5F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">
              RehabX <span className="text-[#1A6FBF]">AI</span>
            </h3>
            <p className="text-[#94A3B8] text-sm">
              Co-powered by Physio AI
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#94A3B8] text-sm">Website:</span>
            <a
              href="https://physiodietfitcare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A6FBF] hover:text-[#3D8FD9] transition-colors flex items-center gap-1 text-sm font-medium"
            >
              physiodietfitcare.com
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1E3A5F] text-center">
          <p className="text-[#64748B] text-sm">
            © 2026 RehabX AI Conference. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

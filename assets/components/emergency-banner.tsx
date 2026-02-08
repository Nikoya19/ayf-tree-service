"use client";

import { AlertTriangle, Phone, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <span className="font-semibold text-sm md:text-base">
            24/7 Emergency Storm Damage Service Available
          </span>
        </div>
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center space-x-1 bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors"
        >
          <Phone className="h-3 w-3" />
          <span>Call Now</span>
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

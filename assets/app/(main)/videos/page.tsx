"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { videos } from "@/lib/data";

export const metadata = {
  title: "Video Gallery | AYF Tree Service",
  description: "Watch our tree service professionals in action. See how we handle tree removal, trimming, stump grinding, and emergency storm cleanup.",
};

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(videos.gallery.map(v => v.category)))];

  const filteredVideos = filter === "All" 
    ? videos.gallery 
    : videos.gallery.filter(v => v.category === filter);

  const getEmbedUrl = (videoId: string, platform: string) => {
    if (platform === "youtube") {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (platform === "vimeo") {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    return "";
  };

  const getThumbnailUrl = (videoId: string, platform: string) => {
    if (platform === "youtube") {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return "/images/video-thumbnail.jpg";
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Video Gallery
            </h1>
            <p className="text-xl text-gray-200">
              See our professional tree service team in action. 
              Watch real projects from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {videos.featured.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {videos.featured.description}
            </p>
          </div>

          {/* Featured Video Player */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            {activeVideo === videos.featured.id ? (
              <iframe
                src={getEmbedUrl(videos.featured.id, videos.featured.platform)}
                title={videos.featured.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setActiveVideo(videos.featured.id)}
              >
                <img
                  src={getThumbnailUrl(videos.featured.id, videos.featured.platform)}
                  alt={videos.featured.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold text-lg">Click to Play</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More Videos
            </h2>
            <p className="text-lg text-gray-600">
              Browse our collection of tree service projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  filter === category
                    ? "bg-green-700 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Video Thumbnail */}
                <div 
                  className="relative aspect-video cursor-pointer group"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img
                    src={getThumbnailUrl(video.id, video.platform)}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="h-6 w-6 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.category}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {video.description}
                  </p>
                  <button
                    onClick={() => setActiveVideo(video.id)}
                    className="inline-flex items-center space-x-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No videos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* How to Add Videos */}
      <section className="py-12 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-4">📹 How to Add Your Videos</h3>
            <ol className="list-decimal list-inside text-sm text-blue-800 space-y-2">
              <li>Upload your video to <strong>YouTube</strong> (recommended) or Vimeo</li>
              <li>Copy the video ID from the URL (e.g., <code>youtube.com/watch?v=<strong>dQw4w9WgXcQ</strong></code>)</li>
              <li>Open <code>lib/data.ts</code> and paste the ID in the videos section</li>
              <li>Add title, description, and category</li>
              <li>Redeploy your site</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <div 
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={getEmbedUrl(activeVideo, "youtube")}
              title="Video Player"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

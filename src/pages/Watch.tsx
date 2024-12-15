import React from 'react';
import { useParams } from 'react-router-dom';
import { animeData } from '../data/animeData';

export default function Watch() {
  const { id } = useParams();
  const anime = animeData.find((a) => a.id === id);

  if (!anime) return <div>Anime not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            src={anime.videoUrl}
            className="w-full h-[600px] rounded-lg"
            allowFullScreen
          />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
        <p className="text-gray-400 mb-4">{anime.description}</p>
        
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
            {anime.genre.join(', ')}
          </span>
          <span className="text-yellow-400">★ {anime.rating}</span>
        </div>
      </div>
    </div>
  );
}
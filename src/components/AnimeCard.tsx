import React from 'react';
import { Play } from 'lucide-react';
import { Anime } from '../types';
import { Link } from 'react-router-dom';

interface AnimeCardProps {
  anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link to={`/watch/${anime.id}`} className="group relative">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={anime.thumbnail}
          alt={anime.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-semibold text-white">{anime.title}</h3>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-sm text-gray-400">{anime.genre.join(', ')}</span>
          <span className="text-yellow-400">★ {anime.rating}</span>
        </div>
      </div>
    </Link>
  );
}
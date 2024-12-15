import React, { useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import { animeData } from '../data/animeData';

export default function Admin() {
  const [selectedAnime, setSelectedAnime] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <button className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-5 h-5" />
            <span>Add Anime</span>
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Genre</th>
                <th className="px-6 py-3 text-left">Rating</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {animeData.map((anime) => (
                <tr key={anime.id} className="border-t border-gray-700">
                  <td className="px-6 py-4">{anime.title}</td>
                  <td className="px-6 py-4">{anime.genre.join(', ')}</td>
                  <td className="px-6 py-4">{anime.rating}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-400 hover:text-blue-300 mr-3">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                      <Trash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
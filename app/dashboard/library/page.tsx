'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, BookOpen, Clock, Star, Download, Play, Bookmark } from "lucide-react";
import Image from "next/image";

const books = [
  // ... (your books array)
];

const genres = ["All", "Classic", "Sci-Fi", "Fantasy", "Mystery"ystery", "Horror", "Romance", "Adventure"];

export default function LibraryPage() {
  return (
  <div className="p-6 space-y-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Library</h1>
      <p className="text-gray-600">Discover and read authentic novels from verified sources</p>
    </motion.div>

    {/* Search and Filters */}
    <Card className="mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search books, authors, or topics..." className="pl-10" />
          </div>
          <Button variant="outline" className="flex items-center bg-transparent">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {genres.map((genre) => (
            <Badge
              key={genre}
              variant={genre === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-green-100"
            >
              {genre}
            </Badge>
          ))}
        </div>
      </motion.div>
    </Card>

    {/* Continue Reading Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-6"
    >
      <h2 className="text-xl font-semibold">Continue Reading</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books
          .filter((book) => book.progress > 0)
          .map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hover:shadow-md transition-shadow"
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                      <Image
                        src={`/placeholder.svg?height=120&width=90&query=${book.cover}`}
                        alt={book.title}
                        width={90}
                        height={120}
                        className="rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="secondary">{book.genre}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            {book.rating}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {book.readTime}
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{book.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: `${book.progress}%` }}></div>
                          </div>
                        </div>
                        <Button size="sm" className="w-full">
                          <Play className="mr-2 h-4 w-4" />
                          Continue Reading
                        </Button>
                      </div>
                    </div>
                </CardContent>
              </Card>
            </motion.div>
          )))}
      </div>
    </motion.div>

    {/* All Books */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-6"
    >
      <h2 className="text-xl font-semibold">Discover New Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books
          .filter((book) => book.progress === 0)
          .map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hover:shadow-md transition-shadow"
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="text-center mb-4">
                      <Image
                        src={`/placeholder.svg?height=200&width=150&query=${book.cover}`}
                        alt={book.title}
                        width={150}
                        height={200}
                        className="rounded mx-auto mb-3"
                      />
                      <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                      <p className="text-gray-500 text-xs mb-3">{book.description}</p>
                    </div>

                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <Badge variant="secondary">{book.genre}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {book.rating}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {book.readTime}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Start Reading
                      </Button>
                      <Button size="sm" variant="outline">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
      </div>
    </motion.div>
  </div>
);
}
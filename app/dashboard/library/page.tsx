import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, BookOpen, Clock, Star, Download, Play, Bookmark } from "lucide-react"
import Image from "next/image"

const books = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic",
    rating: 4.8,
    readTime: "6h 30m",
    description: "A romantic novel of manners written by Jane Austen in 1813.",
    progress: 68,
    cover: "classic book cover",
  },
  {
    id: 2,
    title: "The Time Machine",
    author: "H.G. Wells",
    genre: "Sci-Fi",
    rating: 4.6,
    readTime: "4h 15m",
    description: "A science fiction novella about time travel.",
    progress: 23,
    cover: "science fiction book cover",
  },
  {
    id: 3,
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    genre: "Fantasy",
    rating: 4.7,
    readTime: "3h 45m",
    description: "A classic children's fantasy novel.",
    progress: 0,
    cover: "fantasy book cover",
  },
  {
    id: 4,
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    rating: 4.9,
    readTime: "8h 20m",
    description: "A collection of twelve short stories featuring Sherlock Holmes.",
    progress: 0,
    cover: "mystery book cover",
  },
  {
    id: 5,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Horror",
    rating: 4.5,
    readTime: "7h 10m",
    description: "A Gothic novel about a scientist who creates a monster.",
    progress: 0,
    cover: "horror book cover",
  },
  {
    id: 6,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Classic",
    rating: 4.6,
    readTime: "9h 15m",
    description: "A philosophical novel about a man who remains young while his portrait ages.",
    progress: 0,
    cover: "classic literature book cover",
  },
]

const genres = ["All", "Classic", "Sci-Fi", "Fantasy", "Mystery", "Horror", "Romance", "Adventure"]

export default function LibraryPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Library</h1>
        <p className="text-gray-600">Discover and read authentic novels from verified sources</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
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
        </CardContent>
      </Card>

      {/* Continue Reading Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {books
            .filter((book) => book.progress > 0)
            .map((book) => (
              <Card key={book.id} className="hover:shadow-md transition-shadow">
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
            ))}
        </div>
      </div>

      {/* All Books */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Discover New Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books
            .filter((book) => book.progress === 0)
            .map((book) => (
              <Card key={book.id} className="hover:shadow-md transition-shadow">
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
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

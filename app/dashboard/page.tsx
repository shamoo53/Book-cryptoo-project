import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Coins, Users, TrendingUp, Clock, Star, ArrowRight, Trophy, Target, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-red-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-green-100 mb-4">
          You've earned 47 BCT tokens this week. Keep reading to unlock more rewards!
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>12 books read this month</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5" />
            <span>Level 5 Reader</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Connected with 23 readers</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tokens</CardTitle>
            <Coins className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247 BCT</div>
            <p className="text-xs text-muted-foreground">+47 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Books Read</CardTitle>
            <BookOpen className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+3 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reading Streak</CardTitle>
            <Zap className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 days</div>
            <p className="text-xs text-muted-foreground">Personal best!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Community Rank</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#42</div>
            <p className="text-xs text-muted-foreground">+8 positions</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Currently Reading */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Currently Reading
                <Link href="/dashboard/library">
                  <Button variant="ghost" size="sm">
                    View All <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 p-4 border rounded-lg">
                <Image
                  src="/placeholder.svg?height=80&width=60"
                  alt="Book cover"
                  width={60}
                  height={80}
                  className="rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Pride and Prejudice</h3>
                  <p className="text-sm text-gray-600">by Jane Austen</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                    <span className="text-xs text-gray-500">68%</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="secondary">Classic</Badge>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      2h 15m left
                    </span>
                  </div>
                </div>
                <Button size="sm">Continue</Button>
              </div>

              <div className="flex items-center space-x-4 p-4 border rounded-lg">
                <Image
                  src="/placeholder.svg?height=80&width=60"
                  alt="Book cover"
                  width={60}
                  height={80}
                  className="rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">The Time Machine</h3>
                  <p className="text-sm text-gray-600">by H.G. Wells</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "23%" }}></div>
                    </div>
                    <span className="text-xs text-gray-500">23%</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="secondary">Sci-Fi</Badge>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      4h 32m left
                    </span>
                  </div>
                </div>
                <Button size="sm">Continue</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Achievements */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/dashboard/library">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Library
                </Button>
              </Link>
              <Link href="/dashboard/games">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Target className="mr-2 h-4 w-4" />
                  Play Games
                </Button>
              </Link>
              <Link href="/dashboard/community">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Join Discussion
                </Button>
              </Link>
              <Link href="/dashboard/marketplace">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Coins className="mr-2 h-4 w-4" />
                  Spend Tokens
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Speed Reader</p>
                  <p className="text-xs text-gray-500">Read 5 books in a week</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Community Helper</p>
                  <p className="text-xs text-gray-500">Helped 10 readers</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Streak Master</p>
                  <p className="text-xs text-gray-500">15-day reading streak</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trending Books */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Trending in Community
            <Link href="/dashboard/analytics">
              <Button variant="ghost" size="sm">
                View Trends <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardTitle>
          <CardDescription>Popular books among BookCryto readers this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "1984", author: "George Orwell", readers: "2.3k", tokens: "45" },
              { title: "To Kill a Mockingbird", author: "Harper Lee", readers: "1.8k", tokens: "38" },
              { title: "The Great Gatsby", author: "F. Scott Fitzgerald", readers: "1.5k", tokens: "42" },
            ].map((book, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src={`/placeholder.svg?height=60&width=45&query=${book.title} book cover`}
                    alt={book.title}
                    width={45}
                    height={60}
                    className="rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{book.title}</h4>
                    <p className="text-xs text-gray-600">{book.author}</p>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{book.readers} readers</span>
                  <span className="flex items-center">
                    <Coins className="h-3 w-3 mr-1 text-yellow-600" />
                    {book.tokens} BCT avg
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

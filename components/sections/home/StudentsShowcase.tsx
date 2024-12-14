import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle } from 'lucide-react'

const studentVideos = [
  {
    id: 1,
    name: "Aisha Johnson",
    performance: "Soulful Rendition of 'Summertime'",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Mia Chen",
    performance: "Piano Concerto No. 1 in B-flat minor",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    name: "Karin Aakriti",
    performance: "Knockin' on Heaven's Door Cover",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    name: "Leo Martinez",
    performance: "Original Composition: 'Echoes of Tomorrow'",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 5,
    name: "Zoe Thompson",
    performance: "Violin Solo: 'The Four Seasons - Summer'",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 6,
    name: "Ethan Nakamura",
    performance: "Drum Solo: Rhythms of the World",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
]

export default function StudentShowcase() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Witness Our Students&apos; Musical Journey</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From beginners to advanced performers, our students showcase their growth and passion for music.
          Click on any video to see these rising stars in action and experience the power of dedicated learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <CardContent className="p-0 relative">
                <Image
                  src={video.thumbnail}
                  alt={`${video.name} performing ${video.performance}`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                      <PlayCircle className="h-12 w-12" />
                      <span className="sr-only">Play video of {video.name}</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{video.name}</h3>
                <p className="text-sm text-gray-600">{video.performance}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 lg:p-24">
      <main className="max-w-2xl mx-auto space-y-12">
        <header>
          <h1 className="text-4xl font-bold mb-2">Lucas Abeldaño</h1>
          <p className="text-xl text-gray-400">Brief description about yourself</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About</h2>
          <p>
            Here you can write a detailed description about yourself, your work, and your interests. 
            This is where you can really let your personality shine through and give visitors a sense of who you are.
          </p>
          <p>
            Don't be afraid to get specific about your achievements, goals, and the things that drive you. 
            This is your space to tell your story.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Work</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Current Role</strong> - Brief description of what you do in your current role.
            </li>
            <li>
              <strong>Previous Role</strong> - A short summary of your responsibilities and achievements in a previous position.
            </li>
            <li>
              <strong>Side Project</strong> - Mention any significant side projects or open-source contributions.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Writing</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/post-1" className="text-blue-400 hover:underline">
                Title of Your First Blog Post
              </Link>
              <span className="text-gray-500 ml-2">Date</span>
            </li>
            <li>
              <Link href="/blog/post-2" className="text-blue-400 hover:underline">
                Title of Your Second Blog Post
              </Link>
              <span className="text-gray-500 ml-2">Date</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>
            You can reach me via email at{' '}
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
              your.email@example.com
            </a>
          </p>
          <div className="space-x-4">
            <Button variant="outline" asChild>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
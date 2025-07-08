import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import  Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge variant="outline" className="bg-blue-100 text-blue-700">
            Split.Track.Relax
          </Badge>

          <h1 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-7xl">
          A smarter way to manage shared expenses.
          </h1>

          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
          Manage group expenses effortlessly. From daily chai bills to weekend getaways — Spendzo makes splitting simple, fast, and drama-free.
          </p>

          <div className="flex flex-xol sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size= {"lg"}
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 ease-in-out"
              aria-label="Navigate to dashboard"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size= {"lg"}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              
            >
              <Link href="#how-it-works">
                See How it Works
              </Link>
            </Button>
          </div>
        </div>

        <div>
          <div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

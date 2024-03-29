/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/BqrHRGx16m0
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingPage() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl">Get started with High-Performance LLMs</h1>
              <p
                className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Keep your data safe and secure by deploying your own LLMs in a few clicks. We provide a simple and easy way to access LLMs with high performance and low latency.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="flex items-center gap-2 text-2xl font-semibold">
                <span>$</span>
                <span>0.0475</span>
                <span>/hour</span>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-base font-medium underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
                href="#">
                Pricing →
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="grid gap-4">
              <div
                className="relative inline-block w-full rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
                <select
                  className="w-full appearance-none h-11 pl-4 pr-10 rounded-lg border-0 bg-white dark:bg-gray-950 focus-visible:outline-none">
                  <option>Choose Model</option>
                  <option>llama2</option>
                  <option>mistral</option>
                  <option>n1-standard-4</option>
                  <option>n1-standard-8</option>
                  <option>n1-standard-16</option>
                  <option>n1-standard-32</option>
                </select>
                <ChevronDownIcon className="absolute right-3 top-3 h-4 w-4 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Prices vary by machine type. Select to view pricing.
              </p>
              <Button className="w-full" onClick={undefined}>
                Deploy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}


function ChevronDownIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}

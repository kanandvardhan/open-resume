"use client"

import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { Testimonials } from "home/Testimonials";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  router.push('/resume-parser')
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
      <Hero />
      <Steps />
      <Features />
      <Testimonials />
      <QuestionsAndAnswers />
    </main>
  );
}

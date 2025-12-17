"use client"
import Homefirstsection from "@/components/homefirstsection";
import Homesecondsection from "@/components/homesecondsection";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 pb-20 px-2 sm:px-4 md:px-8 lg:px-20">
      <Homefirstsection />
      <Homesecondsection />
    </div>
  );
}

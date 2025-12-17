"use client"
import Homefirstsection from "@/components/homefirstsection";
import Homesecondsection from "@/components/homesecondsection";

export default function Home() {

  return (
    <div className="mx-20 flex flex-col gap-8 pb-20">
      <Homefirstsection />
      <Homesecondsection />
    </div>
  );
}

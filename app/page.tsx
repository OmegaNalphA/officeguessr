import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={"/images/airbnb.jpg"}
        alt="office"
        width={520}
        height={520}
      />
    </main>
  );
}

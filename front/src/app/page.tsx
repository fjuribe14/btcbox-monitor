import SocketComponent from "@/components/socket-component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <p>hello</p>
      <SocketComponent />
    </main>
  );
}

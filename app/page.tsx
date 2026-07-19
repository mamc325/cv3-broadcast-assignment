import BroadcastTable from "./components/BroadcastTable";
import { liveBroadcasts } from "./data";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-2xl font-semibold">라방바 데이터랩 방송 리스트</h1>
      <div className="mt-6 overflow-x-auto">
        <BroadcastTable broadcasts={liveBroadcasts} type="live" />
      </div>
    </main>
  );
}

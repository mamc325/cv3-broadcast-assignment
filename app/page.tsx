"use client";

import { useState } from "react";
import BroadcastTable from "./components/BroadcastTable";
import { liveBroadcasts, homeBroadcasts, BroadcastType } from "./data";

export default function Home() {
  // 현재 선택된 유형 (기본: 라이브 방송)
  const [type, setType] = useState<BroadcastType>("live");

  // 유형에 따라 보여줄 데이터 선택 (최대 10개)
  const broadcasts = (
    type === "live" ? liveBroadcasts : homeBroadcasts
  ).slice(0, 10);

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-2xl font-semibold">라방바 데이터랩 방송 리스트</h1>

      {/* 유형 토글 버튼 */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setType("live")}
          className={
            "rounded px-4 py-2 text-sm " +
            (type === "live"
              ? "bg-black text-white"
              : "bg-zinc-100 text-zinc-600")
          }
        >
          라이브 방송
        </button>
        <button
          onClick={() => setType("home")}
          className={
            "rounded px-4 py-2 text-sm " +
            (type === "home"
              ? "bg-black text-white"
              : "bg-zinc-100 text-zinc-600")
          }
        >
          홈쇼핑
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <BroadcastTable broadcasts={broadcasts} type={type} />
      </div>
    </main>
  );
}

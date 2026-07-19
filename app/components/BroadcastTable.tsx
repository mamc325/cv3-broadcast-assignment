import { Broadcast, BroadcastType } from "../data";

// 값이 잠겨 있으면(null) 자물쇠, 숫자면 천 단위 콤마로 표시
function formatValue(value: number | null): string {
  if (value === null) return "🔒";
  return value.toLocaleString();
}

interface BroadcastTableProps {
  broadcasts: Broadcast[];
  type: BroadcastType;
}

export default function BroadcastTable({
  broadcasts,
  type,
}: BroadcastTableProps) {
  // 조회수/시청률 컬럼: 라이브는 "조회수", 홈쇼핑은 "시청률"
  const viewsHeader = type === "live" ? "조회수" : "시청률";

  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b text-left text-zinc-500">
          <th className="p-2">순번</th>
          <th className="p-2">방송정보</th>
          <th className="p-2">분류</th>
          <th className="p-2">방송시간</th>
          <th className="p-2">{viewsHeader}</th>
          <th className="p-2">판매량</th>
          <th className="p-2">매출액</th>
          <th className="p-2">상품수</th>
        </tr>
      </thead>
      <tbody>
        {broadcasts.map((b, index) => (
          <tr key={b.id} className="border-b">
            <td className="p-2">{index + 1}</td>
            <td className="p-2">{b.title}</td>
            <td className="p-2">{b.category}</td>
            <td className="p-2">{b.datetime}</td>
            <td className="p-2">{formatValue(b.views)}</td>
            <td className="p-2">{formatValue(b.salesCount)}</td>
            <td className="p-2">{formatValue(b.salesAmount)}</td>
            <td className="p-2">{b.productCount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

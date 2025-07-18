"use client";

import { Card } from "../../../../packages/ui/src/TransferCard";

export default function OnRampTransactions({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: "approved" | "Waiting";
    provider: string;
  }[];
}) {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8 ">No Recent Transactions</div>
      </Card>
    );
  }

  return (
    <Card title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">received INR</div>
              <div className="text-slate-600 text-sm">
                {t.time.toLocaleDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              +{t.amount | 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

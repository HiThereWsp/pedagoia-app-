"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, Download, Trash2 } from "lucide-react";

export default function HistoryPage() {
  const [historyItems] = useState([
    {
      id: 1,
      title: "Séquence Histoire CM1-CM2 - La Révolution",
      date: "2024-03-20",
      type: "sequence",
    },
    {
      id: 2,
      title: "Progression Maths CP - Nombres jusqu'à 100",
      date: "2024-03-19",
      type: "progression",
    },
    {
      id: 3,
      title: "Réunion parents-profs CE2",
      date: "2024-03-18",
      type: "meeting",
    },
  ]);

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Historique des contenus</h1>
          <p className="text-gray-600">
            Retrouvez tous vos contenus générés précédemment
          </p>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-4">
            {historyItems.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center">
                        <History className="h-5 w-5 text-[#2E8B57]" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </DashboardLayout>
  );
}
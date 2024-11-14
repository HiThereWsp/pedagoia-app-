"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Message {
  type: 'user' | 'bot';
  content: string;
}

interface ChatInterfaceProps {
  messages: Message[];
  inputValue: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSend: () => void;
}

export function ChatInterface({
  messages,
  inputValue,
  isLoading,
  onInputChange,
  onSend
}: ChatInterfaceProps) {
  return (
    <>
      <ScrollArea className="flex-1 p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex gap-3 max-w-[85%]">
                {message.type === 'bot' && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <Card className={`p-4 ${
                  message.type === 'user' 
                    ? 'bg-[#2E8B57] text-white' 
                    : 'bg-white'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t bg-white p-4">
        <div className="max-w-3xl mx-auto flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            className="flex-1"
            placeholder="Précisez vos besoins d'ajustement..."
            onKeyPress={(e) => e.key === 'Enter' && onSend()}
          />
          <Button 
            className="bg-[#2E8B57] hover:bg-[#2E8B57]/90"
            onClick={onSend}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Envoyer'}
          </Button>
        </div>
      </div>
    </>
  );
}
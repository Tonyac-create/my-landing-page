import { ShineBorder } from "@/components/ui/shine-border";
import React from "react";

interface ServiceCardProps {
    span: string;
    title: string;
    description: string;
    color?: string[];
    icon: React.ComponentType<{ size?: number, className?: string }>;
}
export default function ServiceCard({ icon: Icon, span, title, description, color }: ServiceCardProps) {
    return (
        <article>
            <ShineBorder
                className="relative flex h-[400px] w-[30px] flex-col items-center py-8 overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={color}
            >
                <Icon size={48} className="animate-pulse"/>
                {/* <PenTool className="w-12 h-12 animate-pulse" /> */}
                <h1 className="text-2xl mb-8"><span className="font-bold">{span}</span>{title}</h1>
                <h2>{description}</h2>
            </ShineBorder>
        </article>
    )
}
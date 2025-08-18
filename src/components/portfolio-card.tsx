import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

type Props = { title: string; sub: string; desc: string; img: string };

export default function PortfolioCard({ title, sub, desc, img }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group block w-full cursor-pointer bg-transparent p-0 border-0 text-left">
            <Card
            className="
                overflow-hidden transition
                hover:-translate-y-0.5 hover:shadow-md
                border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-900
            "
            >
            <div className="relative aspect-[3/2]">
                <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                />
            </div>

            <CardContent className="flex items-center justify-between px-4 py-4">
                <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{sub}</p>
                </div>
                <span className="text-xs opacity-60">View</span>
            </CardContent>
            </Card>
        </button>
        </DialogTrigger>


      <DialogContent>
        <div className="relative aspect-video bg-zinc-100 rounded-md dark:bg-zinc-800">
          <Image src={img} alt={title} fill className="object-cover rounded-md" />
        </div>
        <DialogHeader>
          <Badge className="bg-slate-200 text-black dark:bg-slate-300">{sub}</Badge>
          <Separator className="my-2" />
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

import { Search } from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex gap-3 items-center">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 flex items-center gap-3">
        <Search className="size-4 text-emerald-300" />
        <input
          placeholder="Buscar Participante..."
          className="bg-transparent flex-1 outline-none"
        />
      </div>
    </div>
  );
}

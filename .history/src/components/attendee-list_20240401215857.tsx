import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  //MoreHorizontal,
} from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            placeholder="Buscar participante..."
            className="bg-transparent flex-1 outline-none"
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full  ">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input
                  type="checkbox"
                  className="size-4 rounded border border-white/10 bg-black/20"
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bor-white/10">
              <td className="py-3 px-4 text-sm text-zinc-300">
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </td>
              <td className="py-3 px-4 text-sm">
                <div className="flex flex-col ga-1">
                  <span className="font-semibold text-white">
                    Guilherme Cardoso
                  </span>
                  <span>guilherme_cardosogui@hotmail.com</span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
              <td className="py-3 px-4 text-sm text-zinc-300">3 dias atrás</td>
              <td className="py-3 px-4 text-sm text-zinc-300"></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td
                className="py-3 px-4 text-sm text-zinc-300 text-right"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>

                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

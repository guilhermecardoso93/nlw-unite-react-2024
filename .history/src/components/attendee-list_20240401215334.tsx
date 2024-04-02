import { Search } from "lucide-react";

//ChevronLeft,  ChevronRight,  ChevronsLeft,  ChevronsRight,  MoreHorizontal,

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
                  className="size-4 bg-black/20 rounded border border-white/10"
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
                <input type="checkbox" />
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
              <td colSpan={3}>Mostrando 10 de 128 itens</td>
              <td colSpan={3}>Página 1 de 23</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

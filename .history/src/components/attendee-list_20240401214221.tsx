import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";

export function AttendeeList() {
  return (
    <div>
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
              <th className="py-3 px-2.5 text-sm font-semibold">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-2.5 text-sm font-semibold">Código</th>
              <th className="py-3 px-2.5 text-sm font-semibold">
                Participante
              </th>
              <th className="py-3 px-2.5 text-sm font-semibold">
                Data de inscrição
              </th>
              <th className="py-3 px-2.5 text-sm font-semibold">
                Data de check-in
              </th>
              <th className="py-3 px-2.5 text-sm font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div>
                  <span>Guilherme Cardoso</span>
                  <span>guilherme_cardosogui@hotmail.com</span>
                </div>
              </td>
              <td>7 dias atrás</td>
              <td>3 dias atrás</td>
              <td></td>
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

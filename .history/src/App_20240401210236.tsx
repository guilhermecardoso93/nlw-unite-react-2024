import { Header } from "./components/header";
import { AttendeeList } from "./components/attendee-list";

export function App() {

  return (
    <div className="flex gap-2">
      <Header />
      <AttendeeList />
    </div>
  )
}


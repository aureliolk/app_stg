import ListUser from "./components/funcUser/listUser"
import PainelUser from "./components/painelUser"

export default async function Home() {
  
  return (
    <main>
      <h1 className="text-2xl font-bold px-2 py-4 text-center">STG Space Form</h1>
      <div className="flex gap-2 justify-between">
        <div className="w-1/2 border p-2 max-h-96">
          <PainelUser />
        </div>
        <div className="flex flex-col gap-4 w-1/2 max-h-96 border p-2 overflow-auto">
          <ListUser />
        </div>
      </div>
    </main>
  )
}


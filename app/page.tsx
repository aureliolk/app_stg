import PainelUser from "./components/painelUser"

export default async function Home() {
  const res = await fetch("https://teste.stgspace.com/wp-json/jet-cct/banco_de_dados", {
    headers: {
      "Authorization": "Basic YXVyZWxpbzpoVmRvIG5qamEgWlhjaCB5MjVtIEwyQ1cgRmZpNg=="
    }
  })
  const data = await res.json()

  return (
    <main>
      <h1 className="text-2xl font-bold px-2 py-4 text-center">STG Space Form</h1>
      <div className="flex gap-2 justify-between">
        <div className="w-1/2 border p-2 max-h-96">
          <PainelUser />
        </div>
        <div className="flex flex-col gap-4 w-1/2 max-h-96 border p-2 overflow-auto">
          {data.map((item: DataProps, i: number) => {
            return (
              <>
                <div key={item._ID} className="border border-slate-200 p-1">
                  <div><strong>ID:</strong><span>{item._ID}</span></div>
                  <div><strong>Nome:</strong><span>{item._nome}</span> <span>{item._sobrenome}</span></div>
                  <div><strong>ID:</strong><span>{item._email}</span></div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </main>
  )
}

interface DataProps {
  _ID: string
  _email: string
  _nome: string
  _sobrenome: string
}
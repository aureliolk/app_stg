const ListUser = async () => {
    const res = await fetch("https://sacramentotur.com.br/wp-json/jet-cct/api_cct", {
        headers: {
            "Authorization": "Basic YXVyZWxpb2xrOmtpdksgUzcxaCBja1E4IHBMcEkgMFI3ayBHNnFa",
        }
    })
    const data = await res.json()

    return (
        <>
            {data.map((item: DataProps, i: number) => {
                return (
                    <div key={item._ID} className="border border-slate-200 p-1">
                        <div><strong>ID:</strong><span>{item._ID}</span></div>
                        <div><strong>Nome:</strong><span>{item._firstname}</span> <span>{item._lastname}</span></div>
                        <div><strong>ID:</strong><span>{item._email}</span></div>
                    </div>
                )
            })}
        </>
    )
}

interface DataProps {
    _ID: string
    _email: string
    _firstname: string
    _lastname: string
}

export default ListUser

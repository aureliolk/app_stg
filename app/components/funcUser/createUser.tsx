const CreateUser = ()=>{
    
    
    return(
        <form action="" className="flex flex-col gap-2">
            <h2 className="w-full text-center py-2">Cadastra Usuários</h2>
            <div className="flex justify-between gap-2">
                <input className="flex border w-full text-sm text-center p-1" type="text" name="first-name" id="first-name" placeholder="Type it First Name" />
                <input className="flex border w-full text-sm text-center p-1" type="text" name="sobrenome" id="sobrenome" placeholder="Type it Last Name" />
            </div>
            <div>
                <input type="text" className="flex border w-full text-sm text-center p-1" name="username" id="username" placeholder="Type in Username" />
            </div>
            <div>
                <input type="email" className="flex border w-full text-sm text-center p-1" name="email" id="email" placeholder="Type in Email" />
            </div>
            <div>
                <button type="submit" className="border w-full text-sm p-3 bg-lime-500 text-white">Cadastra Usuario</button>
            </div>
        </form>
    )
}

export default CreateUser
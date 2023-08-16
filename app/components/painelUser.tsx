'use client'

import { useState } from "react"
import CreateUser from "./funcUser/createUser"
const PainelUser = () => {
    const [createUser, setCreateUser ] = useState(false)
    const [updateUser, setUpdateUser ] = useState(false)
    const [deleteUser, setDeleteUser ] = useState(false)

    console.log(createUser,updateUser, deleteUser )

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-around gap-2">
                <button className="border w-1/3" onClick={()=>{setCreateUser(true), setUpdateUser(false), setDeleteUser(false)}}>Criar User</button>
                <button className="border w-1/3" onClick={()=>{setCreateUser(false), setUpdateUser(true), setDeleteUser(false)}}>Atualizar User</button>
                <button className="border w-1/3" onClick={()=>{setCreateUser(false), setUpdateUser(false), setDeleteUser(true)}}>Deletar User</button>
            </div>
            <div className="flex justify-center items-center border p-2">
                {createUser && <>
                    <CreateUser />
                </>}
            </div>
        </div>
    )
}

export default PainelUser
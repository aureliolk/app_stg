'use client'

import { useState } from "react"

const PainelUser = () => {
    const [createUser, setCreateUser ] = useState(false)
    const [uploadUser, setUploadUser ] = useState(false)
    const [updateUser, setUpdateUser ] = useState(false)



    return (
        <>
            <div className="flex justify-around gap-2">
                <button className="border w-1/3">Criar User</button>
                <button className="border w-1/3">Atualizar User</button>
                <button className="border w-1/3">Deletar User</button>
            </div>
            <div className="flex justify-center items-center border">
                
            </div>
        </>
    )
}
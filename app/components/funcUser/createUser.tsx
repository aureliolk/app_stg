'use client'
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    firstName: string
    lastName: string
    userName: string
    email: string
}


const CreateUser = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const [loading,setLoading] = useState(false)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true)
        const res = await fetch("https://sacramentotur.com.br/wp-json/jet-cct/api_cct", {
            headers: {
                "Authorization": "Basic YXVyZWxpb2xrOmtpdksgUzcxaCBja1E4IHBMcEkgMFI3ayBHNnFa",
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                _firstname: data.firstName,
                _lastname: data.lastName,
                _email: data.email,
            })
        })

        console.log(res)
        setLoading(false)
        window.location.reload()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div className="flex gap-2">
                <input {...register("firstName")} className="border p-2 flex w-full text-sm text-center" placeholder="Type In FirstName" />
                <input {...register("lastName")} className="border p-2 flex w-full text-sm text-center" placeholder="Type In LastName" />
            </div>
            <div>
                <input {...register("userName")} className="border p-2 flex w-full text-sm text-center" placeholder="Type In UserName" />
            </div>
            <div>
                <input {...register("email")} className="border p-2 flex w-full text-sm text-center" placeholder="Type In Email" />
            </div>
            {loading ? <div className="p-2 border bg-lime-500 text-white text-center">...</div>: <input type="submit" value={"Cadastra Usuario"} className="p-2 border bg-lime-500 text-white cursor-pointer"/>}
        </form>
    )
}

export default CreateUser
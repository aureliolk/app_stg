'use client'
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    firstName: string
    lastName: string
    userName: string
    email: string
}


const CreateUser = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> =async (data) => {

        const res = await fetch("https://teste.stgspace.com/wp-json/jet-cct/banco_de_dados", {
            headers: {
              "Authorization": "Basic YXVyZWxpbzpoVmRvIG5qamEgWlhjaCB5MjVtIEwyQ1cgRmZpNg==",
            },
            cache: "force-cache",
            method:"POST",
            body:JSON.stringify({
             _email:data.email,
             _nome:data.firstName,
             _sobrenome:data.lastName
            })
          })
        
        console.log(res)
    
    }


    // console.log(watch("firstName")) // watch input value by passing the name of it


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <>
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
                <input type="submit" className="p-2 border bg-lime-500 text-white" />
            </form>
        </>
    )
}

export default CreateUser
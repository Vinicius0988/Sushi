import { useState} from "react"

interface InputProps<T> {
  label: string
  value: T
  updateValue: (value: T) => void
  type?: string
}

function Input<T extends string | number>({ label, value, updateValue, type }: InputProps<T>) {

    return (
        <>
        <label>{label}</label>
        <input
            value={value}
            type={type}
            onChange={event => {
                const val = type === "number" ? Number(event.target.value) : event.target.value;
                updateValue(val as T);
            }}
        />
        </>
    )
}

export function CreateModal() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
           
    return (
        <div className="modal-overflow">   
        <h2>Cadastre um novo item no cardapio</h2>
        <form className="modal-body">
            <Input label="title" value={title} updateValue={setTitle} />
            <Input label="price" value={price} updateValue={setPrice} /> 
            <Input label="image" value={image} updateValue={setImage} />
        </form>
        </div>
    )
}
import { Form } from "@remix-run/react";

export default function NavSearch(): JSX.Element {
    return (
        <>
            <Form className="form" action="/items">
                <input type="text" placeholder="Nunca dejes de buscar" name="search"  required/>
                <button ></button>
            </Form>
        </>
    )
}
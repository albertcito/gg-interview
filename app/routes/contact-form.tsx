import type { Route } from "./+types/home";
import BasicForm from "../ui/form/index";
import AddressForm from "~/ui/form/address";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="mx-auto flex flex-wrap flex-row gap-4 items-center justify-center">
      <BasicForm
        initialValues={{
          firstName: 'John',
          lastName: 'Doe',
          phone: '1234567890',
        }}
      />
    </div>
  )
}

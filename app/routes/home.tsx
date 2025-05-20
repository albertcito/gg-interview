import type { Route } from "./+types/home";
import BasicForm from "../ui/form/index";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className=" max-w-md mx-auto">
      <BasicForm
        initialValues={{ firstName: 'John', lastName: 'Doe', phone: '1234567890', zipCode: '123456789' }}
      />
    </div>
  )
}

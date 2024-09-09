import Profile from "@/components/Profile";
import ToDoForm from "@/components/ToDoForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Profile />;
      <ToDoForm id={0} title={""} />
    </div>
  );
}
